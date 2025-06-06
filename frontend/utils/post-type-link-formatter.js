export const postLinkFormatter = (postType) => {
  switch (postType) {
    case 'culture':
      return 'cultura'
    case 'ambassadors':
      return 'embaixadores'
    case 'gastronomy':
      return 'gastronomia'
    case 'guide':
      return 'guia'
    case 'plant':
      return 'plant-based'
    case 'products':
      return 'produtos'
    case 'tv':
      return 'series-e-programas'
    default:
      return postType
  }
}
