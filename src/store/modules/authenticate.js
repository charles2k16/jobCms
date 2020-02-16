// State
const state = {
  user: null,
  userType: "",
  token: "",
  isAdmin: false,
  loggedIn: false,
  isEmployee: false,
  isEmployer: false
}
  
// Getters
const getters = {
  getUser: (state) => state.user,
  admin: (state) => state.isAdmin,
  getToken: (state) => state.token,
  loggedIn: (state) => state.loggedIn,
  userType: (state) => state.userType,
  employee: (state) => state.isEmployee,
  employer: (state) => state.isEmployer,
}

// Actions
const actions = {
  login ({commit}, response) {
    commit('LOGIN_SUCCESS', response)
  },
  setUser ({commit}, response) {
    commit('USER_SUCCESS', response)
  },
  logout ({commit}) {
    commit('LOGOUT')
  },
}

// Mutations
const mutations = {
  LOGIN_SUCCESS: (state, response) => {
    state.token = response.access_token
  },
  USER_SUCCESS: (state, user) => {
    state.userType = user.type
    state.user = user
    state.loggedIn = true
  },
  LOGOUT: (state) => {
    state.user = null;
    state.token = '';
    state.loggedIn = false;
    state.isAdmin = false;
    state.userType = '';
    state.isEmployee = false;
    state.isEmployer = false;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}