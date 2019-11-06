import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

const plugins = [createPersistedState()]

console.log(state)

export default () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    //plugins
  })
}
