import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import CardPostLargest from '~/components/card-post/card-post-largest'
import CtaGreen from '~/components/cta/cta-green'
import Grid from '~/components/grid'
import HeadingTagSelector from '~/components/heading-tag-selector'
import { postLinkFormatter } from '~/utils/post-type-link-formatter'

const HeadlineGuide = ({ title, description, selectedPost = [], button }) => {
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  if (selectedPost.length === undefined) return ''

  return (
    <section className="pt-14 pb-11 lg:pt-10 lg:pb-9">
      {title && (
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
      )}
      <Grid className="container gap-y-4">
        {selectedPost[0] && (
          <CardPostLargest
            href={`${postLinkFormatter(selectedPost[0].type)}/${
              selectedPost[0].slug
            }`}
            {...selectedPost[0]}
            trackingData={{
              event: 'selected_content',
              items: {
                item_category: selectedPost[0].taxterms[0]?.slug,
                item_id: selectedPost[0].id,
                item_name: selectedPost[0].title?.rendered,
                content_type: selectedPost[0].type,
                page_path: router.asPath,
                page_title: pageTitle,
                text: selectedPost[0].excerpt?.rendered,
              },
            }}
            imageClasses="w-full h-[170px] sm:h-[230px] lg:h-[458px]"
          />
        )}
        <div className="col-span-full flex justify-center pt-5">
          <CtaGreen
            {...button}
            trackingData={{
              event: 'select_content',
              items: {
                item_category: 'post',
                item_id: '',
                item_name: button.link.title,
                content_type: 'guide',
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

export default HeadlineGuide
