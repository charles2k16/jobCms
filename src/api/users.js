import axios from "axios";
import config from "../config";

export default {
  name: "userService",

  getAllUsers() {
    let url = config.USERS_URL + "/getAll"
    return axios.get(url, {
      auth: {
        username: 'default',
        password: '$PAiC2020@'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  createUser(user) {
    let url = config.USERS_URL + "/save"
    return axios.post(url, user, {
      auth: {
        username: 'default',
        password: '$PAiC2020@'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updateUser(user) {
      let url = config.USERS_URL + "/edit"
      return axios.put(url, user, {
        auth: {
          username: 'default',
          password: '$PAiC2020@'
        }
      })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
