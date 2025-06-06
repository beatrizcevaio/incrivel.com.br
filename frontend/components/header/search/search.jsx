import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

import Cta from '~/components/cta'
import CloseIcon from '~/icons/close.svg'
import SearchIcon from '~/icons/search.svg'

import styles from './search.module.css'

const Search = ({ search, setSearch, reference }) => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  const onSubmitForm = useCallback(
    (event) => {
      event.preventDefault()
      router.push({
        pathname: '/busca',
        query: {
          s: keyword,
        },
      })
    },
    [keyword, router]
  )

  return (
    <div
      className={classNames(
        'fixed left-0 w-screen h-[166px] lg:h-[300px] py-6 lg:py-24 bg-green z-40 duration-200',
        {
          'top-[50px] lg:top-[70px]': search,
          '-top-full lg:-top-[300px]': !search,
        }
      )}
      ref={reference}
    >
      <button
        className="hidden absolute top-5 md:top-0 right-5 md:right-[90px] w-fit md:w-[50px] h-fit md:h-[50px] lg:flex lg:items-center lg:justify-center md:bg-beige md:bg-opacity-70 md:rounded duration-300 hover:bg-opacity-100"
        onClick={() => {
          setSearch(false)
        }}
      >
        <CloseIcon className="w-[18px] h-[18px]" />
      </button>
      <form className="container space-y-6" onSubmit={onSubmitForm}>
        <div className={styles.inputCase}>
          <input
            onChange={(event) => {
              setKeyword(event.target.value)
            }}
            value={keyword}
            type="text"
            placeholder="Buscar no site"
            name="s"
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
            page_title: pageTitle,
          }}
        />
      </form>
    </div>
  )
}

export default Search
