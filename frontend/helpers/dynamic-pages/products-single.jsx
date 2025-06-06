import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

// import CloseToMeSingle from '~/components/close-to-me/close-to-me-single'
import HighlightLargeInstitutionalSingle from '~/components/highlight-large-institutional/highlight-large-institutional-single'
import ImageLeftWithTabNavSingle from '~/components/image-left-with-tab-nav/image-left-with-tab-nav-single'
import SeeMoreSingle from '~/components/see-more/see-more-single'
import TextContentWithTableSingle from '~/components/text-content-with-table/text-content-with-table-single'

const DynamicPageProductsSingle = ({ pageData, posts }) => {
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return (
    <>
      <HighlightLargeInstitutionalSingle
        acf={pageData?.acf}
        title={pageData?.title}
        featuredMedia={pageData?.featuredMedia}
        excerpt={pageData?.excerpt}
        trackingData={{
          event: 'select_item',
          items: [
            {
              content_type: pageData.type,
              page_path: router.asPath,
              page_title: pageTitle,
              item_id: pageData.id,
              item_name: pageData.title?.rendered,
              item_brand: 'Incrível',
              item_category: 'products',
              price: pageData.acf?.price,
            },
          ],
        }}
      />
      <ImageLeftWithTabNavSingle acf={pageData?.acf} />
      <TextContentWithTableSingle acf={pageData?.acf} />
      {/* <CloseToMeSingle /> */}
      <SeeMoreSingle posts={posts} pageData={pageData} />
      <Script src="https://lett.2buycdn.com/embed/v1/plugin.js" defer></Script>
    </>
  )
}

export default DynamicPageProductsSingle
