import axios from "axios";
import config from "../config";

export default {
  name: "ProfileService",

  getFeatures() {
    //TODO: Getting the features available for call-forwarding
  },
  getSettings() {
    //status
    //TODO: Getting the status catalogue
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

};
