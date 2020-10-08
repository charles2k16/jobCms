import axios from "axios";
import config from "../config";

export default {
  name: "settingsService",

  basicAuth() {
    let a = {
      auth: {
        username: "default",
        password: "$PAiC2020@"
      }
    }
    return a
  },

  getSettings() {
    let self = this;
    let url = config.SETTINGS_URL;
    return axios
      .get(url, self.basicAuth)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
}