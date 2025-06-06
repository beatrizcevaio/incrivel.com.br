import React from 'react'

import { default as AmbassadorsList } from '~/components/ambassadors-list'
import { default as Archive } from '~/components/archive'
import { default as BreadedCampaign } from '~/components/breaded-campaign'
import { default as BreadedHero } from '~/components/breaded-hero'
import { default as BreadedIntroduction } from '~/components/breaded-introduction'
import { default as BreadedPreparation } from '~/components/breaded-preparation'
import { default as BreadedSocials } from '~/components/breaded-socials'
import { default as BreadedVideo } from '~/components/breaded-video'
import { default as CloseToMe } from '~/components/close-to-me'
import { default as ContactForm } from '~/components/contact-form'
import { default as Cta } from '~/components/cta'
import { default as HeadlineCulture } from '~/components/headline-culture'
import { default as HeadlineEightPosts } from '~/components/headline-eight-posts'
import { default as HeadlineFivePosts } from '~/components/headline-five-posts'
import { default as HeadlineFourPosts } from '~/components/headline-four-posts'
import { default as HeadlineGastronomy } from '~/components/headline-gastronomy'
import { default as HeadlineGuide } from '~/components/headline-guide'
import { default as HeadlineOnePlusFour } from '~/components/headline-one-plus-four'
import { default as HeadlineOnePlusOne } from '~/components/headline-one-plus-one'
import { default as HeadlineOnePlusTwo } from '~/components/headline-one-plus-two'
import { default as HeadlineOnePostLarge } from '~/components/headline-one-post-large'
import { default as HeadlineOnePostShort } from '~/components/headline-one-post-short'
import { default as HeadlinePlantBased } from '~/components/headline-plant-based'
import { default as HeadlineThreePosts } from '~/components/headline-three-posts'
import { default as HighlightFifty } from '~/components/highlight-fifty'
import { default as HighlightLargeContent } from '~/components/highlight-large-content'
import { default as HighlightLargeInstitutional } from '~/components/highlight-large-institutional'
import { default as HighlightProduct } from '~/components/highlight-product'
import { default as HighlightShort } from '~/components/highlight-short'
import { default as HighlightThumbnail } from '~/components/highlight-thumbnail'
import { default as HighlightVideo } from '~/components/highlight-video'
import { default as Hits } from '~/components/hits'
import { default as ImageLeftWithTabNav } from '~/components/image-left-with-tab-nav'
import { default as PostsRelated } from '~/components/posts-related'
import { default as PrivacyEditor } from '~/components/privacy-editor'
import { default as ProductsList } from '~/components/products-list'
import { default as PromotionBanner } from '~/components/promotion-banner'
import { default as SearchResult } from '~/components/search-result'
import { default as SearchResultCulture } from '~/components/search-result/search-result-culture'
import { default as SearchResultGastronomy } from '~/components/search-result/search-result-gastronomy'
import { default as SearchResultGuide } from '~/components/search-result/search-result-guide'
import { default as SearchResultPlant } from '~/components/search-result/search-result-plant'
import { default as SearchResultProduct } from '~/components/search-result/search-result-product'
import { default as SearchResultTv } from '~/components/search-result/search-result-tv'
import { default as SeeMore } from '~/components/see-more'
import { default as TextContentImageLeft } from '~/components/text-content-image-left'
import { default as TextContentImageRight } from '~/components/text-content-image-right'
import { default as TextContentWithGallery } from '~/components/text-content-with-gallery'
import { default as TextContentWithTable } from '~/components/text-content-with-table'
import { default as TextSeo } from '~/components/text-seo'
import { default as TheTownAccessib } from '~/components/the-town-accessib'
import { default as TheTownBanner } from '~/components/the-town-banner'
import { default as TheTownIntro } from '~/components/the-town-intro'
import { default as TheTownMap } from '~/components/the-town-map'
import { default as TheTownMenu } from '~/components/the-town-menu'
import { default as TheTownSharing } from '~/components/the-town-sharing'
import { default as ToBuy } from '~/components/to-buy'
import { camelize } from '~/utils/global'

const Blocks = {
  ContactForm,
  Cta,
  AmbassadorsList,
  Archive,
  BreadedCampaign,
  BreadedHero,
  BreadedIntroduction,
  BreadedPreparation,
  BreadedSocials,
  BreadedVideo,
  HeadlineCulture,
  HeadlineEightPosts,
  HeadlineFivePosts,
  HeadlineFourPosts,
  HeadlineGastronomy,
  HeadlineGuide,
  HeadlineOnePlusFour,
  HeadlineOnePlusOne,
  HeadlineOnePlusTwo,
  HeadlineOnePostLarge,
  HeadlineOnePostShort,
  HeadlinePlantBased,
  HeadlineThreePosts,
  HighlightFifty,
  HighlightLargeContent,
  HighlightLargeInstitutional,
  HighlightProduct,
  HighlightShort,
  HighlightThumbnail,
  HighlightVideo,
  Hits,
  ImageLeftWithTabNav,
  CloseToMe,
  PostsRelated,
  PrivacyEditor,
  ProductsList,
  PromotionBanner,
  SeeMore,
  SearchResult,
  SearchResultCulture,
  SearchResultGastronomy,
  SearchResultGuide,
  SearchResultPlant,
  SearchResultProduct,
  SearchResultTv,
  TextContentImageLeft,
  TextContentImageRight,
  TextContentWithGallery,
  TextContentWithTable,
  TextSeo,
  TheTownAccessib,
  TheTownBanner,
  TheTownIntro,
  TheTownMap,
  TheTownMenu,
  TheTownSharing,
  ToBuy,
}

const RenderBlocks = ({ blocks }) => {
  return blocks.map(({ blockName, ...component }, componentIndex) => {
    const blockNameFormatted = camelize(blockName.replace('acf/', ''))

    const componentName =
      blockNameFormatted.charAt(0).toUpperCase() + blockNameFormatted.slice(1)

    const Block = Blocks[componentName]

    if (!Block) {
      throw new Error(`Block ${componentName} not found`)
    }

    return <Block key={`block-template-${componentIndex}`} {...component} />
  })
}

export default RenderBlocks
