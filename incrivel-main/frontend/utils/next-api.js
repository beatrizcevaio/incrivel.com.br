import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

const nextApi = () => {
  return instance
}

export default nextApi
