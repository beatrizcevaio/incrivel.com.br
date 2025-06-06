export const postTypesSlugs = {
  ambassadors: ['embaixadores'],
  culture: ['cultura'],
  gastronomy: ['gastronomia'],
  guide: ['guia'],
  plant: ['plant-based'],
  post: ['noticias'],
  products: ['produtos'],
  tv: ['series-e-programas'],
}

export const getPostTypeBySlug = (slug) => {
  return Object.keys(postTypesSlugs).find((key) =>
    postTypesSlugs[key].includes(slug)
  )
}
