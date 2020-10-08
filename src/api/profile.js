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
  updateProfile() {
    //TODO: Update profile by Id
  },
  applyProfile() {
    // set profileId as a param
    //TODO: Apply profile settings to all subscribers associated with the profile
  }
};
