import axios from 'axios'

const API_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL,
})

export const registerUser =  async (data: any) =>
  axios.post(`${API_URL}/signup`, data)

export const loginUser = async (data: any) => {
  const response = await axios.post(`${API_URL}/login`, data)
  localStorage.setItem('token', response.data.token)
}

export const getProfile = async () => {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('No token found')

  return api.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
}
