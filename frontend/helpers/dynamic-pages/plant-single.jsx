import React from 'react'

import HighlightFiftySingle from '~/components/highlight-fifty/highlight-fifty-single'
import RichText from '~/components/rich-text'
import SeeMoreSingle from '~/components/see-more/see-more-single'

const DynamicPagePlantSingle = ({ pageData, posts }) => {
  return (
    <>
      <HighlightFiftySingle
        categories={pageData?.taxterms}
        featuredMedia={pageData?.featuredMedia}
        title={pageData?.title}
      />
      <RichText
        className="container prose text-gray-dark prose-img:w-full prose-img:object-cover prose-img:rounded-lg lg:mb-10"
        columns="col-span-full lg:col-span-6 lg:col-start-4"
        htmlText={pageData.content?.rendered}
      />
      <SeeMoreSingle posts={posts} pageData={pageData} />
    </>
  )
}

export default DynamicPagePlantSingle
