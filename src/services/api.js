import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://ec2-3-132-213-109.us-east-2.compute.amazonaws.com:8000',
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://rate-backend.herokuapp.com',
})

export default api

export const getVisaoGeralData = async () => {
  try {
    const response = await api.get('/overview/general')
    return { data: response.data.data, success: true }
  } catch (err) {
    throw new Error('Error on fetching general data')
  }
}

export const getOperatorsData = async () => {
  try {
    const response = await api.get('/operators')
    return { data: response.data.data, success: true }
  } catch (err) {
    return { success: false }
  }
}

export const getMessagesByChatId = async (chatId) => {
  try {
    const response = await api.get(`/messages/${chatId}`)
    return { data: response.data.data, success: true }
  } catch (err) {
    throw new Error('Error on fetching messages')
  }
}

export const updateChatById = async (chatId, label) => {
  try {
    const response = await api.patch(`/chats/${chatId}`, { label })
    return { data: response.data.data, success: true }
  } catch (err) {
    throw new Error('Error on updating chat status')
  }
}

export const getOperatorOverview = async (operatorId) => {
  try {
    const response = await api.get(`overview/operator/${operatorId}`)
    return { data: response.data.data, success: true }
  } catch (err) {
    throw new Error('Error on fetching operatorOverview')
  }
}

export const getGeneralOverview = async () => {
  try {
    const response = await api.get(`/overview/general`)
    return { data: response.data.data, success: true }
  } catch (err) {
    throw new Error('Error on fetching operatorOverview')
  }
}
