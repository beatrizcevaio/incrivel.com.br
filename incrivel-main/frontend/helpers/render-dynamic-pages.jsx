import React from 'react'

import DynamicPageAmbassadorsSingle from './dynamic-pages/ambassadors-single'
import DynamicPageCultureSingle from './dynamic-pages/culture-single'
import DynamicPageDefault from './dynamic-pages/default'
import DynamicPageGastronomySingle from './dynamic-pages/gastronomy-single'
import DynamicPageGuideSingle from './dynamic-pages/guide-single'
import DynamicPagePlantSingle from './dynamic-pages/plant-single'
import DynamicPageProductsSingle from './dynamic-pages/products-single'
import DynamicPageTvSingle from './dynamic-pages/tv-single'

const RenderDynamicPages = ({ pageData, posts, postType }) => {
  switch (postType) {
    case 'gastronomy':
      return <DynamicPageGastronomySingle pageData={pageData} posts={posts} />
    case 'guide':
      return <DynamicPageGuideSingle pageData={pageData} posts={posts} />
    case 'culture':
      return <DynamicPageCultureSingle pageData={pageData} posts={posts} />
    case 'plant':
      return <DynamicPagePlantSingle pageData={pageData} posts={posts} />
    case 'tv':
      return <DynamicPageTvSingle pageData={pageData} posts={posts} />
    case 'ambassadors':
      return <DynamicPageAmbassadorsSingle pageData={pageData} posts={posts} />
    case 'products':
      return <DynamicPageProductsSingle pageData={pageData} posts={posts} />
    default:
      return <DynamicPageDefault pageData={pageData} />
  }
}

export default RenderDynamicPages
