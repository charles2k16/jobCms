function getApiUrl() {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'http://localhost:9090/api/'
  }
  return 'http://localhost:9090/api/'
}

const API_URL = getApiUrl();

export default {
  PROFILE_URL: API_URL + "profile",
  USERS_URL: API_URL + "user",
  SUBSCRIBERS_URL: API_URL + "subscriber",
  FEATURES_URL: API_URL + "features",
  SETTINGS_URL: API_URL + "settings",
}