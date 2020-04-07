import * as T from './mutation-types'

export default {
    async fetchMenus({ commit, state }) {
        commit(T.FETCH_MENU, state.menusRegister)
    }
}