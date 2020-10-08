import axios from "axios";
import config from "../config";

export default {
  name: "featuresService",

  basicAuth() {
    let a = {
      auth: {
        username: "default",
        password: "$PAiC2020@"
      }
    }
    return a
  },

  getFeatures() {
    let self = this;
    let url = config.FEATURES_URL;
    return axios
      .get(url, self.basicAuth)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
}