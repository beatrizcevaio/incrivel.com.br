/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import CardPostSmall from '~/components/card-post/card-post-small'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import { getSearchData } from '~/services/search'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const SearchResultGuide = ({ title }) => {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadedAllPosts, setIsLoadedAllPosts] = useState(false)

  useEffect(() => {
    const loadResults = async () => {
      const response = await getSearchData({
        keyword: router.query.s,
        type: 'guide',
        page: 1,
        per_page: 8,
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
          type: 'guide',
          page: page,
          per_page: 8,
        })
        setIsLoading(false)
        setPosts(page == 1 ? [...response.data] : [...posts, ...response.data])
        response.data.length < 8 &&
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
        <Grid className="container gap-y-4">
          <div className="col-span-full flex justify-center lg:mb-4">
            <HeadingTagSelector
              className="styled-heading heading-2xl font-modern-condensed-black text-green"
              title={title}
            />
          </div>
          {posts.map((post, index) => (
            <CardPostSmall
              href={`${postLinkFormatter(post.type)}/${post.slug}`}
              {...post}
              featuredMedia={post.featured_media}
              columns="col-span-full lg:col-span-3"
              imageHeight="h-[170px]"
              key={`card-${index}`}
              isHalf={false}
            />
          ))}
          {!isLoadedAllPosts && posts.length >= 8 && (
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

export default SearchResultGuide
