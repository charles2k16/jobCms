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
  updateSubscriber() {
    // pp subscriber
    //TODO: update subscriber by Id

  },
  applyProfile() {
    //  pp profileId
    //TODO: Apply profile settings to the subscriber
  },
  getSubscriber() {
    //  pp subscriberId
    //TODO: Get subscriber by Id
  },
  getAllSubscriber() {
    //TODO: Get all subscribers

  },

}