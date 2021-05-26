import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://ec2-3-132-213-109.us-east-2.compute.amazonaws.com:8000',
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://rate-backend.herokuapp.com',
})

export default api

export const getVisaoGeralData = async () => {
  try {
    const response = await api.get('/stats/general')
    return { data: response.data, success: true }
  } catch (err) {
    return { success: false }
  }
}

export const getOperatorsData = async () => {
  try {
    const response = await api.get('/operators')
    return { data: response.data, success: true }
  } catch (err) {
    return { success: false }
  }
}
