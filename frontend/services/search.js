import clientApi from '~/utils/client-api'

export const getSearchData = async ({
  keyword,
  page,
  per_page,
  type = '',
  exclude = [],
}) => {
  return clientApi().get(
    `/wp/v2/search?keyword=${keyword}&page=${page}&per_page=${per_page}&type=${type}&exclude=${exclude.join(
      ','
    )}&acf_format=standard`
  )
}
