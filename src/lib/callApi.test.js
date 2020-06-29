import { apiGet } from './callApi'
import axios from 'axios'

jest.mock('axios')

describe('apiGet', () => {
  it('fetches successfully data from an API', async () => {
    const data = { data: 'somedata' }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    const result = await apiGet('some/url')
    expect(result).toEqual(data)
  })
})
