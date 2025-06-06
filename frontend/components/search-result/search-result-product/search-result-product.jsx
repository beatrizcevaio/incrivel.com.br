/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import Link from '~/components/link'
import { getSearchData } from '~/services/search'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const SearchResultProduct = ({ title }) => {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadedAllPosts, setIsLoadedAllPosts] = useState(false)

  useEffect(() => {
    const loadResults = async () => {
      const response = await getSearchData({
        keyword: router.query.s,
        type: 'products',
        page: 1,
        per_page: 5,
      })
      setPosts([...response.data])
    }
    loadResults()
  }, [])

  useEffect(() => {
    if (page > 1) {
      const loadMore = async () => {
        setIsLoading(true)
        const response = await getSearchData({
          keyword: router.query.s,
          type: 'products',
          page: page,
          per_page: 5,
        })
        setIsLoading(false)
        setPosts(page == 1 ? [...response.data] : [...posts, ...response.data])
        response.data.length < 5 &&
        page <= response.headers?.['x-wp-totalpages']
          ? setIsLoadedAllPosts(true)
          : setIsLoadedAllPosts(false)
      }
      loadMore()
    }
  }, [page])

  return (
    posts.length > 0 && (
      <section className="py-8 lh:pt-9 lg:pb-10">
        <Grid className="container">
          <div className="col-span-full flex justify-center lg:mb-4">
            <HeadingTagSelector
              className="styled-heading heading-2xl font-modern-condensed-black text-green"
              title={title}
            />
          </div>
          <div className="col-span-full lg:col-span-10 lg:col-start-2 flex items-center flex-wrap mb-5 lg:mb-8">
            {posts.map((post, index) => (
              <article
                className="w-1/2 md:w-[33%] lg:w-[20%] lg:hover:-translate-y-2 duration-300"
                key={`post-${index}`}
              >
                <Link
                  className="flex flex-col items-center justify-center w-full"
                  href={`${postLinkFormatter(post.type)}/${post.slug}`}
                >
                  <Image {...post.acf?.archiveImage} />
                  <h4 className="text-base text-gray-dark font-modern-condensed-medium font-semibold">
                    {post.title}
                  </h4>
                </Link>
              </article>
            ))}
          </div>
          {!isLoadedAllPosts && posts.length >= 5 && (
            <div className="col-span-full pt-3 lg:pt-9 flex justify-center">
              <CtaGreen
                textColor="beige"
                hasArrowIcon={true}
                onClick={() => setPage(page + 1)}
                title={isLoading ? 'Carregando...' : 'Carregar mais'}
                className={classNames('cursor-pointer', {
                  'pointer-events-none cursor-default opacity-70': isLoading,
                })}
              />
            </div>
          )}
        </Grid>
      </section>
    )
  )
}

export default SearchResultProduct
