import axios from "axios";
import config from "../config";

export default {
  name: "SubscriberService",

  createSubscriber(subscriber) {
    let url = config.SUBSCRIBERS_URL
    return axios
      .post(url, subscriber, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  updateSubscriber(subscriber) {
    let url = config.SUBSCRIBERS_URL + '/' + subscriber.id
    return axios
      .put(url, subscriber, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  applyProfile(msisdn, profileId) {
    let url = config.SUBSCRIBERS_URL + '/profile' + profileId + '/apply'
    return axios
      .put(url, msisdn, {
        auth: {
          username: "default",
          password: "$PAiC2020@"
        }
      })
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  getSubscriber(msisdn) {
    let url = config.SUBSCRIBERS_URL + '/' + msisdn
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
  getAllSubscriber() {
    //TODO: Get all subscribers

  },

}