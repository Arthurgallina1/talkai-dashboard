import axios from 'axios'

const strapiApi = axios.create({
  // baseURL: 'https://ec2-3-132-213-109.us-east-2.compute.amazonaws.com:8000',
  baseURL: 'http://localhost:1337'
  // baseURL: 'https://rate-backend.herokuapp.com',
})

export default strapiApi
