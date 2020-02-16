import axios from "axios";
import config from "../config";

export default {
  name: "JobsService",

  getJobs () {
    let url = config.JOBS
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}