/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import Image from '~/components/image'
import { getDataByPostType } from '~/services/posts'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

import CardPostProduct from '../card-post/card-post-product'
import CardPostSmall from '../card-post/card-post-small'
import CtaGreen from '../cta/cta-green'

const Archive = ({
  title,
  hasTitle,
  isUppercase,
  postType,
  hasIcon,
  icon,
  description,
  selectedPosts = [],
}) => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [loadedPosts, setLoadedPosts] = useState([...selectedPosts])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadedAllPosts, setIsLoadedAllPosts] = useState(false)
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  useEffect(() => {
    setPage(1)
    setLoadedPosts([...selectedPosts])
    setIsLoadedAllPosts(false)
  }, [router.asPath])

  useEffect(() => {
    setLoadedPosts([...selectedPosts])
    if (page > 1) {
      const loadMore = async () => {
        setIsLoading(true)
        const response = await getDataByPostType({
          postType: postType,
          page: page,
          exclude: [],
        })
        setIsLoading(false)
        setLoadedPosts([...loadedPosts, ...response.data])
        response.data.length < 8 &&
        page <= response.request.getResponseHeader('x-wp-totalpages')
          ? setIsLoadedAllPosts(true)
          : setIsLoadedAllPosts(false)
      }
      loadMore()
    }
  }, [page])

  if (selectedPosts.length === undefined) return ''

  return (
    <section className="container py-8 lg:pb-9 lg:pt-10">
      <Grid className="gap-y-5">
        {hasTitle && (
          <div className="col-span-full flex flex-col items-center space-y-5 lg:mb-5">
            <div className="relative">
              {hasIcon && (
                <Image
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-[22px] h-[18px]"
                  {...icon}
                />
              )}
              <HeadingTagSelector
                className={classNames(
                  'styled-heading heading-2xl font-semibold text-green',
                  { uppercase: isUppercase, 'pl-7': hasIcon }
                )}
                title={title}
              />
            </div>
            {description && (
              <div
                className="text-base font-lato-regular lg:text-center lg:max-w-[640px] text-gray-dark"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )}
          </div>
        )}
        {postType === 'products'
          ? loadedPosts.map((product, index) => (
              <CardPostProduct
                {...product}
                href={`${postLinkFormatter(product.type)}/${product.slug}`}
                trackingData={{
                  event: 'view_item',
                  items: [
                    {
                      content_type: product.type,
                      page_path: router.asPath,
                      page_title: pageTitle,
                      item_id: product.id,
                      item_name: product.title?.rendered,
                      item_brand: 'Incrível',
                      item_category: product.type,
                      price: product.acf?.price,
                    },
                  ],
                }}
                key={`product-${index}`}
              />
            ))
          : loadedPosts.map((post, index) => (
              <CardPostSmall
                href={`${postLinkFormatter(post.type)}/${post.slug}`}
                {...post}
                columns="col-span-full lg:col-span-3"
                imageHeight="h-[170px]"
                key={`post-${index}`}
                isHalf={false}
                trackingData={{
                  event: 'selected_content',
                  items: {
                    item_category: post.taxterms[0]?.slug,
                    item_id: post.id,
                    item_name: post.title?.rendered,
                    content_type: post.type,
                    page_path: router.asPath,
                    page_title: pageTitle,
                    text: post.excerpt?.rendered,
                  },
                }}
              />
            ))}
        {!isLoadedAllPosts && loadedPosts.length >= 8 && (
          <div className="col-span-full pt-3 lg:pt-9 flex justify-center">
            <CtaGreen
              textColor="beige"
              hasArrowIcon={true}
              onClick={() => setPage(page + 1)}
              title={isLoading ? 'Carregando...' : 'Carregar mais'}
              className={classNames('cursor-pointer', {
                'pointer-events-none cursor-default opacity-70': isLoading,
              })}
              trackingData={{
                event: 'select_content',
                items: {
                  item_category:
                    loadedPosts[0].type !== 'products'
                      ? loadedPosts[0].taxterms[0].name
                      : 'products',
                  item_id: '',
                  item_name: 'Carregar mais',
                  content_type: loadedPosts[0].type,
                  page_path: router.asPath,
                  page_title: pageTitle,
                  text: 'Carregar mais',
                },
              }}
            />
          </div>
        )}
      </Grid>
    </section>
  )
}

export default Archive
