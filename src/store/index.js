import Vue from 'vue'
import Vuex from 'vuex'
import BlockchainModule from './modules/blockchain'

Vue.use(Vuex)

export const strict = false

export default new Vuex.Store({
  modules: {
    blockchain: BlockchainModule,
  },
  strict: true
})
