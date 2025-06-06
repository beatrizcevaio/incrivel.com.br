import clientApi from '~/utils/client-api'

export const getMenusData = async () => {
  return clientApi().get('/wp/v2/menus')
}
