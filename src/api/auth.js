import axios from "axios";
import config from "../config";
import is from "is_js";

export default {
  name: "AuthService",

  setToken () {
    let vuex = JSON.parse(localStorage.getItem('vuex'))
    if (is.not.null(vuex)) {
      let token = vuex.authenticate.token
      if (token !== '') {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      }
    }
  },

  register (data) {
    let url = config.REGISTER
    return axios.post(url, data)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  login (data) {
    let url = config.LOGIN
    return axios.post(url, data)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getLoggenInuser () {
    setToken()
    let url = config.CURRENT_USER
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  logout (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    let url = config.LOGOUT
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}