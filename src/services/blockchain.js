import ApiService from './api'

class BlockchainService {
  async getAddress (address) {
    var headers = {
      'Content-Type': 'application/json'
    }
    try {
      const response = await ApiService.get('Address/' + address, { headers: headers })
      return response.data
    } catch(e) {
      return null
    }
  }
  async getTransaction (tx) {
    
    const func1 = BlockchainService.getDeposite(tx)
    const func2 = BlockchainService.getLockBalance(tx)
    const func3 = BlockchainService.getTransferMoney(tx)
    const func4 = BlockchainService.getUnlockBalance(tx)
    const func5 = BlockchainService.getWithdraw(tx)
    
    const responses = await Promise.all([func1, func2, func3, func4, func5]);
    return responses.find(o=>o != null)
  }

  async getDeposites () {
    var headers = {
      'Content-Type': 'application/json'
    }
    const response = await ApiService.get('depositMoneyFromExternal', { headers: headers })
    return response.data
  }

  static async getDeposite (address) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    try {
      const response = await ApiService.get('depositMoneyFromExternal/' + address, { headers: headers })
      return {...response.data, type:'deposit'}
    } catch(e) {
      return null
    }
  }

  async getLockBalances (cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    const response = await ApiService.get('lockBalance', { headers: headers })
    return response.data
  }

  static async getLockBalance (address, cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }

    try {
      const response = await ApiService.get('lockBalance/' + address, { headers: headers })
      return {...response.data, type:'lockbalance'}
    } catch(e) {
      return null
    }
  }

  async getUnlockBalances (cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    const response = await ApiService.get('unlockBalance', { headers: headers })
    return response.data
  }

  static async getUnlockBalance (address, cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    try {
      const response = await ApiService.get('unlockBalance/' + address, { headers: headers })
      return {...response.data, type:'unlockbalance'}
    } catch(e) {
      return null
    }
  }

  async getWithdraws (cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    const response = await ApiService.get('withdrawMoneyToExternal', { headers: headers })
    return response.data
  }

  static async getWithdraw (address, cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    try {
      const response = await ApiService.get('withdrawMoneyToExternal/' + address, { headers: headers })
      return {...response.data, type:'withdraw'}
    } catch(e) {
      return null
    }
  }

  async getTransferMoneys (cb) {
    console.log('called getTransferMoneys')
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    const response = await ApiService.get('transferMoney', { headers: headers })
    return response.data
  }

  static async getTransferMoney (address, cb) {
    var headers = {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + token,
    }
    try {
      const response = await ApiService.get('transferMoney/' + address, { headers: headers })
      return {...response.data, type:'transfer'}
    } catch(e) {
      return null
    }
  }
}

export default new BlockchainService()
