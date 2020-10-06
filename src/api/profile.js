import axios from "axios";
import config from "../config";

export default {
  name: "ProfileService",

  getProfileList() {
    let url = config.PROFILE_URL
    return axios.get(url, {
      auth: {
        username: 'default',
        password: '$PAiC2020@'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  createProfile(profile) {
    let url = config.PROFILE_URL
    return axios.post(url, profile, {
      auth: {
        username: 'default',
        password: '$PAiC2020@'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
