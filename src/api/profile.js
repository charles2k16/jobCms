import axios from "axios";
import config from "../config";

export default {
  name: "ProfileService",

  basicAuth() {
    let a = {
      auth: {
        username: "default",
        password: "$PAiC2020@"
      }
    }
    return a
  },
  getProfileList() {
    let url = config.PROFILE_URL;
    return axios
      .get(url, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  createProfile(profile) {
    let url = config.PROFILE_URL;
    return axios
      .post(url, profile, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  updateProfile(profile) {
    let url = config.PROFILE_URL + '/' + profile.id
    return axios
      .put(url, profile, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  applyProfile(profileId) {
    let self = this;
    let url = config.PROFILE_URL + profileId + '/apply'
    return axios.head(url, self.basicAuth)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
