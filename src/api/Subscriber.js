import axios from "axios";
import config from "../config";

export default {
  name: "SubscriberService",
  
  createSubscriber(subscriber) {
    //TODO: add new subscriber eg:
    /* {
	"msisdn": "(505)87681955",
	"password": "$12345$",
	"profile": {
		"id": "2b4d0212ec0843e081d01cd62bea1663"
	},
	"settings": [
		{"id": "a675509d4af14931b6e375f7a377eb79"}
	],
	"notes": "Hello !!",
    "callForwardOnInactiveTime": 60
    */

  },
  updateSubscriber(subscriber) {
      //TODO: update subscriber by Id

  },
  applyProfile(profileId) {
    //TODO: Apply profile settings to the subscriber
  },
  getSubscriber(subscriberId) {
    //TODO: Get subscriber by Id
  },
  getAllSubscriber() {
    //TODO: Get all subscribers

  },

}