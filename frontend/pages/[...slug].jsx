import RenderDynamicPages from '~/helpers/render-dynamic-pages'
import Seo from '~/helpers/seo'
import Layout from '~/layouts/default'
import NotFound from '~/pages/404'
import { getPageData } from '~/services/pages'
import {
  getAmbassadorsData,
  getAmbassadorsPostsData,
  getCultureData,
  getCulturePostsData,
  getGastronomyData,
  getGastronomyPostsData,
  getGuideData,
  getGuidePostsData,
  getPlantData,
  getPlantPostsData,
  getPostData,
  getPostsData,
  getProductsData,
  getProductsPostsData,
  getTvData,
  getTvPostsData,
} from '~/services/posts'
import { getPostTypeBySlug } from '~/utils/post-types'

const DynamicPage = ({
  notFound,
  notFoundMessage,
  postType,
  pageUrl,
  pageData,
  posts,
  projects,
  globalData,
}) => {
  if (notFound || !pageData) {
    return <NotFound message={notFoundMessage} />
  }

  return (
    <Layout translatedPaths={pageData.translatedPaths} globalData={globalData}>
      <Seo data={pageData?.seo} url={pageUrl} postType={pageData?.type} />
      <RenderDynamicPages
        postType={postType}
        pageData={pageData}
        posts={posts}
        projects={projects}
      />
    </Layout>
  )
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = async ({ params, resolvedUrl }) => {
  try {
    let response = {}
    let responsePosts = {}

    const pageUrl = `${process.env.siteUrl}${resolvedUrl}`
    const postType = getPostTypeBySlug(params.slug[0])
    const pageParameters = {
      slug: params.slug[params.slug.length - 1],
    }

    switch (postType) {
      case 'post':
        response = await getPostData(pageParameters)
        responsePosts = await getPostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'gastronomy':
        response = await getGastronomyData(pageParameters)
        responsePosts = await getGastronomyPostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'guide':
        response = await getGuideData(pageParameters)
        responsePosts = await getGuidePostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'culture':
        response = await getCultureData(pageParameters)
        responsePosts = await getCulturePostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'tv':
        response = await getTvData(pageParameters)
        responsePosts = await getTvPostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'ambassadors':
        response = await getAmbassadorsData(pageParameters)
        responsePosts = await getAmbassadorsPostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'plant':
        response = await getPlantData(pageParameters)
        responsePosts = await getPlantPostsData({
          page: 1,
          per_page: 3,
          exclude: [response?.data?.[0].id],
        })
        break
      case 'products':
        response = await getProductsData(pageParameters)
        responsePosts = await getProductsPostsData({
          page: 1,
          per_page: 5,
          exclude: [response?.data?.[0].id],
        })
        break
      default:
        response = await getPageData(pageParameters)
    }

    const notFound = response.status !== 200 || !response?.data?.length

    return {
      props: {
        notFound,
        postType,
        pageUrl,
        pageData: response?.data?.[0] || '',
        posts: responsePosts?.data || [],
      },
    }
  } catch (error) {
    return {
      props: {
        notFound: true,
        notFoundMessage: error?.message,
      },
    }
  }
}

export default DynamicPage
