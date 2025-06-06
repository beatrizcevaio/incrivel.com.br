import cors from 'cors'

export const getOnNoMatchHandle = (request, response) => {
  response.status(405).json({ error: 'Method Not Allowed' })
}

export const getCors = () => {
  return process.env.NODE_ENV !== 'development'
    ? cors({
        origin: process.env.SITE_URL,
      })
    : cors()
}
