import clientApi from '~/utils/client-api'

export const getPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/posts?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getPostData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/posts?slug=${slug}&acf_format=standard`)
}

export const getGastronomyData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/gastronomy?slug=${slug}&acf_format=standard`)
}

export const getGastronomyPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/gastronomy?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getGuideData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/guide?slug=${slug}&acf_format=standard`)
}

export const getGuidePostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/guide?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getPlantData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/plant?slug=${slug}&acf_format=standard`)
}

export const getPlantPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/plant?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getCultureData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/culture?slug=${slug}&acf_format=standard`)
}

export const getCulturePostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/culture?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getProductsData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/products?slug=${slug}&acf_format=standard`)
}

export const getProductsPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/products?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getTvData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/tv?slug=${slug}&acf_format=standard`)
}

export const getTvPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/tv?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getAmbassadorsData = async ({ slug }) => {
  return clientApi().get(`/wp/v2/ambassadors?slug=${slug}&acf_format=standard`)
}

export const getAmbassadorsPostsData = async ({
  page = 1,
  per_page = 8,
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/ambassadors?page=${page}&per_page=${per_page}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}

export const getDataByPostType = ({ postType, page, exclude }) => {
  switch (postType) {
    case 'culture':
      return getCulturePostsData({ page, exclude })
    case 'ambassadors':
      return getAmbassadorsPostsData({ page, exclude })
    case 'gastronomy':
      return getGastronomyPostsData({ page, exclude })
    case 'guide':
      return getGuidePostsData({ page, exclude })
    case 'plant':
      return getPlantPostsData({ page, exclude })
    case 'products':
      return getProductsPostsData({ page, exclude })
    case 'tv':
      return getTvPostsData({ page, exclude })
    default:
      return getPostsData({ page, exclude })
  }
}
