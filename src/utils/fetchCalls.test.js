import { fetchData } from './fetchCalls';

describe('FetchData', () => {


  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: true
      })
    })
  })

  it('should return a resolved response when successful', async () => {
    let response = await fetchData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    expect(response).toEqual({ status: 200, ok: true })
  })

  it('should return an error when unsuccessful', async () => {
    let error = new Error('There was an error fetching data')
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        ok: false
      })
    })
    await expect(fetchData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')).rejects.toEqual(error)
  })
})
