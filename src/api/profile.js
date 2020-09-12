import axios from "axios";
import config from "../config";

export default {
  name: "ProfileService",

  // let auth = {
  //   username: 'user',
  //   password: '$1525$'
  // },

  getProfileList () {
    let url = config.PROFILE_URL
    return axios.get(url, {auth: {
      username: 'user',
      password: '$1525$'
    }})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}