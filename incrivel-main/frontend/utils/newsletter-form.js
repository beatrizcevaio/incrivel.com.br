import nextApi from './next-api'

export const sendNewsletterSalesforce = async ({ formValues }) => {
  return nextApi().post('/contact', formValues)
}
