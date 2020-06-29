import axios from 'axios'

export async function apiGet (url) {
  const data = await axios.get(url)
  return data
}
