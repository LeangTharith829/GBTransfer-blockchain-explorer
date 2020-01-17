import * as types from '../mutation-types'
import { BlockchainService } from '../../services'
import moment from 'moment'

export default {
  namespaced: true,
  state: {
    address: {},
    transaction: {},
    deposite: null,
    lockbalance: null,
    unlockbalance: null,
    withdraw: null,
    transfermoney: [],
    deposites: [],
    lockbalances: [],
    unlockbalances: [],
    withdraws: [],
    transfermoneys: [],
    fetchingAddress: false,
    fetchingDeposite: false,
    fetchingDeposites: false,
    fetchingLockBalances: false,
    fetchingLockBalance: false,
    fetchingUnlockBalance: false,
    fetchingUnlockBalances: false,
    fetchingWithdraw: false,
    fetchingWithdraws: false,
    fetchingTransfer: false,
    fetchingTransfers: false,
    fetchingTransaction: false,
  },
  mutations: {
    [types.SET_ADDRESS] (state, payload) {
      state.address = payload.value
      state.fetchingAddress = false
    },
    [types.SET_TRANSACTION] (state, payload) {
      state.transaction = payload.value
      state.fetchingTransaction = false
    },
    [types.SET_DEPOSITES] (state, payload) {
      state.deposites = payload.value
      state.fetchingDeposites = false
    },
    [types.SET_DEPOSITE] (state, payload) {
      state.deposite = payload.value
      state.fetchingDeposite = false
    },
    [types.SET_LOCKBALANCES] (state, payload) {
      state.lockbalances = payload.value
      state.fetchingLockBalances = false
    },
    [types.SET_LOCKBALANCE] (state, payload) {
      state.lockbalance = payload.value
      state.fetchinLockBalance = false
    },
    [types.SET_UNLOCKBALANCES] (state, payload) {
      state.unlockbalances = payload.value
      state.fetchingUnlockBalances = false
    },
    [types.SET_UNLOCKBALANCE] (state, payload) {
      state.unlockbalance = payload.value
      state.fetchingUnlockBalance = false
    },
    [types.SET_WITHDRAWS] (state, payload) {
      state.withdraws = payload.value
      state.fetchingWithdraws = false
    },
    [types.SET_WITHDRAW] (state, payload) {
      state.withdraw = payload.value
      state.fetchingWithdraw = false
    },
    [types.SET_TRANSFERMONEYS] (state, payload) {
      state.transfermoneys = payload.value
      state.fetchingTransfers = false
    },
    [types.SET_TRANSFERMONEY] (state, payload) {
      state.transfermoney = payload.value
      state.fetchingTransfer = false
    },
    [types.FETCHING_ADDRESS] (state, payload) {
      state.fetchingAddress = true
    },
    [types.FETCHING_TRANSACTION] (state, payload) {
      state.fetchingTransaction = true
    },
    [types.FETCHING_DEPOSITES] (state, payload) {
      state.fetchingDeposites = true
    },
    [types.FETCHING_DEPOSITE] (state, payload) {
      state.fetchingDeposite = true
    },
    [types.FETCHING_LOCKBALANCE] (state, payload) {
      state.fetchingLockBalance = true
    },
    [types.FETCHING_LOCKBALANCES] (state, payload) {
      state.fetchingLockBalances = true
    },
    [types.FETCHING_UNLOCKBALANCE] (state, payload) {
      state.fetchingUnlockBalance = true
    },
    [types.FETCHING_UNLOCKBALANCES] (state, payload) {
      state.fetchingUnlockBalances = true
    },
    [types.FETCHING_WITHDRAWAL] (state, payload) {
      state.fetchingWithdraw = true
    },
    [types.FETCHING_WITHDRAWALS] (state, payload) {
      state.fetchingWithdraws = true
    },
    [types.FETCHING_TRANSFERMONEY] (state, payload) {
      state.fetchingTransfer = true
    },
    [types.FETCHING_TRANSFERMONEYS] (state, payload) {
      state.fetchingTransfers = true
    },
  },
  actions: {
    fetchAddress: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_ADDRESS,
        value: true
      })
      let value = await BlockchainService.getAddress(address)

      commit({
        type: types.SET_ADDRESS,
        value
      })
    },
    fetchTransaction: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_TRANSACTION,
        value: true
      })
      let value = await BlockchainService.getTransaction(address)

      commit({
        type: types.SET_TRANSACTION,
        value
      })
    },
    fetchDeposites: async ({ commit }) => {
      commit({
        type: types.FETCHING_DEPOSITES,
        value: true
      })
      let value = await BlockchainService.getDeposites()
      value.sort((a, b)=>{return (a.timestamp < b.timestamp?1:-1)})
      value.map((o)=>{
        o.to_address = o.to_address.replace('resource:org.greenbay.Address#', '')
        o.timestamp = moment(o.timestamp).format('YYYY-MM-DD HH:mm:ss')
      })
      commit({
        type: types.SET_DEPOSITES,
        value
      })
    },
    fetchDeposite: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_DEPOSITE,
        value: true
      })
      let value = await BlockchainService.getDeposite(address)

      commit({
        type: types.SET_DEPOSITE,
        value
      })
    },
    fetchLockBalances: async ({ commit }) => {
      commit({
        type: types.FETCHING_LOCKBALANCES,
        value: true
      })
      let value = await BlockchainService.getLockBalances()
      value.sort((a, b)=>{return (a.timestamp < b.timestamp?1:-1)})
      value.map((o)=>{
        o.address = o.address.replace('resource:org.greenbay.Address#', '')
        o.timestamp = moment(o.timestamp).format('YYYY-MM-DD HH:mm:ss')
      })
      console.log('fetchLockBalances', value)

      commit({
        type: types.SET_LOCKBALANCES,
        value
      })
    },
    fetchLockBalance: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_LOCKBALANCE,
        value: true
      })
      let value = await BlockchainService.getLockBalance(address)
      console.log('fetchLockBalance', value)
      commit({
        type: types.SET_LOCKBALANCE,
        value
      })
    },
    fetchUnLockBalances: async ({ commit }) => {
      commit({
        type: types.FETCHING_UNLOCKBALANCES,
        value: true
      })
      let value = await BlockchainService.getUnlockBalances()
      value.sort((a, b)=>{return (a.timestamp < b.timestamp?1:-1)})
      value.map((o)=>{
        o.address = o.address.replace('resource:org.greenbay.Address#', '')
        o.timestamp = moment(o.timestamp).format('YYYY-MM-DD HH:mm:ss')
      })
      commit({
        type: types.SET_UNLOCKBALANCES,
        value
      })
    },
    fetchUnLockBalance: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_UNLOCKBALANCE,
        value: true
      })
      let value = await BlockchainService.getUnLockBalance(address)
      
      commit({
        type: types.SET_UNLOCKBALANCE,
        value
      })
    },
    fetchWithdraws: async ({ commit }) => {
      commit({
        type: types.FETCHING_WITHDRAWALS,
        value: true
      })
      let value = await BlockchainService.getWithdraws()
      value.sort((a, b)=>{return (a.timestamp < b.timestamp?1:-1)})
      value.map((o)=>{
        o.from_address = o.from_address.replace('resource:org.greenbay.Address#', '')
        o.timestamp = moment(o.timestamp).format('YYYY-MM-DD HH:mm:ss')
      })
      commit({
        type: types.SET_WITHDRAWS,
        value
      })
    },
    fetchWithdraw: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_WITHDRAWAL,
        value: true
      })
      let value = await BlockchainService.getWithdraw(address)

      commit({
        type: types.SET_WITHDRAW,
        value
      })
    },
    fetchTransferMoneys: async ({ commit }) => {
      commit({
        type: types.FETCHING_TRANSFERMONEYS,
        value: true
      })
      let value = await BlockchainService.getTransferMoneys()
      value.sort((a, b)=>{return (a.timestamp < b.timestamp?1:-1)})
      value.map((o)=>{
        o.from = o.from.replace('resource:org.greenbay.Address#', '')
        o.to = o.to.replace('resource:org.greenbay.Address#', '')
        o.timestamp = moment(o.timestamp).format('YYYY-MM-DD HH:mm:ss')
      })
      console.log('fetchTransferMoneys', value)

      commit({
        type: types.SET_TRANSFERMONEYS,
        value
      })
    },
    fetchTransferMoney: async ({ commit }, address) => {
      commit({
        type: types.FETCHING_TRANSFERMONEY,
        value: true
      })
      let value = await BlockchainService.getTransferMoney(address)

      commit({
        type: types.SET_TRANSFERMONEY,
        value
      })
    }
  },
  getters: {
    address: state => state.address,
    transaction: state => state.transaction,
    deposite: state => state.deposite,
    lockbalance: state => state.lockbalance,
    unlockbalance: state => state.unlockbalance,
    withdraw: state => state.withdraw,
    transfermoney: state => state.transfermoney,
    deposites: state => state.deposites,
    lockbalances: state => state.lockbalances,
    unlockbalances: state => state.unlockbalances,
    withdraws: state => state.withdraws,
    transfermoneys: state => state.transfermoneys,
    fetchingAddress: state => state.fetchingAddress,
    fetchingTransaction: state => state.fetchingTransaction,
    fetchingLockBalances: state => state.fetchingLockBalances,
    fetchingLockBalance: state => state.fetchingLockBalance,
    fetchingUnlockBalance: state => state.fetchingUnlockBalance,
    fetchingUnlockBalances: state => state.fetchingUnlockBalances,
    fetchingTransfer: state => state.fetchingTransfer,
    fetchingTransfers: state => state.fetchingTransfers,
    fetchingWithdraw: state => state.fetchingWithdraw,
    fetchingWithdraws: state => state.fetchingWithdraws,
    fetchingDeposites: state => state.fetchingDeposites,
    fetchingDeposite: state => state.fetchingDeposite,
  }
}
