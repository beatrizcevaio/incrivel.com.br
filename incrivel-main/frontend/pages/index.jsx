import RenderBlocks from '~/helpers/render-blocks'
import Seo from '~/helpers/seo'
import Layout from '~/layouts/default'
import NotFound from '~/pages/404'
import { getPageData } from '~/services/pages'

const HomePage = ({ notFound, notFoundMessage, pageData, pageUrl }) => {
  if (notFound || !pageData) {
    return <NotFound message={notFoundMessage} />
  }

  return (
    <Layout>
      <Seo data={pageData?.seo} url={pageUrl} postType={pageData?.type} />
      <RenderBlocks blocks={pageData.content.blocks} />
    </Layout>
  )
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = async ({ locale, resolvedUrl }) => {
  try {
    const pageUrl = `${process.env.siteUrl}${resolvedUrl}`
    const response = await getPageData({ slug: 'homepage', lang: locale })
    const notFound = response.status !== 200 || !response?.data?.length

    return {
      props: {
        notFound,
        pageUrl,
        pageData: response?.data?.[0] || '',
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

export default HomePage
