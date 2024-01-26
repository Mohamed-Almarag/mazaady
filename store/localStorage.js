export const state = () => ({
  currentLocale: 'en',
  expire: 24,
  status: true,
  errorCode: null,
})

export const getters = {
  currentLocale(state) {
    return state.currentLocale
  },
  get_error_code(state) {
    return state.errorCode
  },
}


export const mutations = {
  SET_CURRENT_LOCALE(state, payload) {
    state.currentLocale = payload
  },
  SET_ERROR_MSG(state, payload) {
    state.errorCode = payload
  },
}

export const actions = {
  response_handler({ commit }, payload) {
    responseHandler(payload, { commit })
  },

}
