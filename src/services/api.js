import axios from 'axios'
const blockchainUrl = "https://greenbay-network-rest-insightful-bat.mybluemix.net/api"

class ApiService {
  async get (url, config = {}) {
    const response = await axios.get(`${blockchainUrl}/${url}`, config)
    if (response.error) {
      return Promise.reject(new Error(`Error GET ${url} : ${JSON.stringify(response)}`))
    }

    return response
  }

  async post (url, data = {}, config = {}) {
    config.headers || (config.headers = {
      'Content-Type': 'application/json'
    })
    const response = await axios.post(`${blockchainUrl}/${url}`, data, config)
    if (response.error) {
       return Promise.reject(new Error(`Error POST ${url} : ${JSON.stringify(response)}`))
    }

    return response
  }
}

export default new ApiService()
