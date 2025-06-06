import clientApi from '~/utils/client-api'

export const getOptionsData = async () => {
  return clientApi().get('/wp/v2/options')
}
