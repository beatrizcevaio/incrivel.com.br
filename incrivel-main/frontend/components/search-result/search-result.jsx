import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Cta from '~/components/cta'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import SearchLoading from '~/components/search-result/search-loading'
import SearchIcon from '~/icons/search.svg'
import { getSearchData } from '~/services/search'

import styles from './search.module.css'

const SearchResult = ({ title }) => {
  const router = useRouter()
  const [total, setTotal] = useState(-1)
  const [isTotalLoaded, setIsTotalLoaded] = useState(false)
  const numberPosts = total
  const [keyword, setKeyword] = useState('')
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  useEffect(() => {
    const loadResults = async () => {
      const response = await getSearchData({
        keyword: router.query.s,
        page: 1,
        per_page: -1,
      })
      setTotal(response.headers?.['x-wp-total'])
      setIsTotalLoaded(response.headers?.['x-wp-total'] !== 0)
    }
    loadResults()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="lg:min-h-[348px] py-6 lg:py-24 bg-green">
        <Grid className="container">
          <div className="col-span-full flex flex-col items-center text-beige mb-5 lg:mb-10">
            <HeadingTagSelector
              className="styled-heading heading-2xl font-modern-condensed-black"
              title={title}
            />
            {numberPosts === '0' ? (
              <p>Desculpe! não encontramos nenhum resultado.</p>
            ) : (
              isTotalLoaded && (
                <p>{`${
                  numberPosts === 1
                    ? `Foi encontrado ${numberPosts} resultado`
                    : `Foram encontrados ${numberPosts} resultados`
                }`}</p>
              )
            )}
          </div>
          <form className="col-span-full space-y-6" method="get">
            <div className={styles.inputCase}>
              <input
                type="text"
                placeholder="Buscar"
                name="s"
                onChange={(event) => {
                  setKeyword(event.target.value)
                }}
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-green" />
            </div>
            <Cta
              type="submit"
              className="block mx-auto !h-fit"
              color="beige"
              hasArrowIcon={true}
              title="Buscar"
              trackingData={{
                event: 'search',
                search_term: keyword,
                page_path: router,
                page_tile: pageTitle,
              }}
            />
          </form>
        </Grid>
      </section>
      {!isTotalLoaded && <SearchLoading />}
    </>
  )
}

export default SearchResult
