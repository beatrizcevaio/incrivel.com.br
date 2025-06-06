import clientApi from '~/utils/client-api'

export const getPageData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/pages?slug=${slug}&acf_format=standard`)
}
