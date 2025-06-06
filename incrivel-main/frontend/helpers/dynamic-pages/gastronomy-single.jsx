import React from 'react'

import HighlightThumbnailSingle from '~/components/highlight-thumbnail/highlight-thumbnail-single'
import Preparation from '~/components/preparation'
import RichText from '~/components/rich-text'
import SeeMoreSingle from '~/components/see-more/see-more-single'

const DynamicPageGastronomySingle = ({ pageData, posts }) => {
  return (
    <>
      <HighlightThumbnailSingle
        acf={pageData?.acf}
        categories={pageData?.taxterms}
        featuredMedia={pageData?.featuredMedia}
        title={pageData?.title}
      />
      {pageData.acf?.editor && (
        <RichText
          className="container prose text-gray-dark prose-img:w-full prose-img:object-cover prose-img:rounded-lg lg:mb-10"
          columns="col-span-full lg:col-span-6 lg:col-start-4"
          htmlText={pageData.acf?.editor}
        />
      )}
      <Preparation {...pageData} />
      <SeeMoreSingle posts={posts} pageData={pageData} />
    </>
  )
}

export default DynamicPageGastronomySingle
