import axios from "axios";
// import config from "../config";

export default {
  name: "ProfileService",

  getProfileList() {
    // let url = config.PROFILE_URL
    return axios.get('http://localhost:9090/api/profile', {
      auth: {
        username: 'foo',
        password: 'bar'
      }
    })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}
