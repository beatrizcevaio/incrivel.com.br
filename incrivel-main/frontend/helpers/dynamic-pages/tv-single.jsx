import React from 'react'

import RichText from '~/components/rich-text'
import SeeMoreSingle from '~/components/see-more/see-more-single'

const DynamicPageTvSingle = ({ pageData, posts }) => {
  return (
    <>
      <RichText
        className="container prose text-gray-dark prose-img:w-full prose-img:object-cover prose-img:rounded-lg lg:mb-10"
        columns="col-span-full lg:col-span-6 lg:col-start-4"
        htmlText={pageData.content?.rendered}
      />
      <SeeMoreSingle posts={posts} pageData={pageData} />
    </>
  )
}

export default DynamicPageTvSingle
