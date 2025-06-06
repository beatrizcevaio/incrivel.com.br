/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

import CardPostFifty from '~/components/card-post/card-post-fifty'
import CardPostSmall from '~/components/card-post/card-post-small'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineGastronomy = ({ title, description, selectedPosts, button }) => {
  if (selectedPosts.length === undefined) return ''

  const posts = useMemo(() => selectedPosts.slice(1), [selectedPosts])
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return (
    <section className="pt-14 pb-11 lg:pt-10 lg:pb-9">
      <div className="container w-full flex flex-col items-center space-y-6 lg:space-y-5 mb-10">
        <HeadingTagSelector
          className="styled-heading uppercase heading-4xl font-modern-condensed-black text-green"
          title={title}
        />
        <div
          className="text-base font-lato-regular lg:text-center lg:max-w-[640px] text-gray-dark"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <Grid className="container gap-y-4">
        {selectedPosts[0] && (
          <CardPostFifty
            href={`${postLinkFormatter(selectedPosts[0].type)}/${
              selectedPosts[0].slug
            }`}
            {...selectedPosts[0]}
            columns="col-span-full"
            imageClasses="w-full h-[170px] sm:h-[458px]"
            trackingData={{
              event: 'selected_content',
              items: {
                item_category: selectedPosts[0].taxterms[0]?.slug,
                item_id: selectedPosts[0].id,
                item_name: selectedPosts[0].title?.rendered,
                content_type: selectedPosts[0].type,
                page_path: router.asPath,
                page_title: pageTitle,
                text: selectedPosts[0].excerpt?.rendered,
              },
            }}
          />
        )}
        {posts.map((card, index) => (
          <CardPostSmall
            href={`${postLinkFormatter(card.type)}/${card.slug}`}
            {...card}
            columns="col-span-full lg:col-span-3"
            imageHeight="h-20 sm:h-[170px]"
            key={`card-${index}`}
            isHalf={true}
            trackingData={{
              event: 'selected_content',
              items: {
                item_category: card.taxterms[0]?.slug,
                item_id: card.id,
                item_name: card.title?.rendered,
                content_type: card.type,
                page_path: router.asPath,
                page_title: pageTitle,
                text: card.excerpt?.rendered,
              },
            }}
          />
        ))}
        <div className="col-span-full flex justify-center pt-5">
          <CtaGreen
            {...button}
            trackingData={{
              event: 'select_content',
              items: {
                item_category: 'post',
                item_id: '',
                item_name: button.link.title,
                content_type: 'gastronomy',
                page_path: router.asPath,
                page_title: pageTitle,
                text: button.link.title,
              },
            }}
          />
        </div>
      </Grid>
    </section>
  )
}

export default HeadlineGastronomy
