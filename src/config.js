function getApiUrl () {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'http://localhost:9090/api/profile/'
  } else if (hn === 'jobscms.netlify.com') {
    return 'http://localhost:9090/api/profile'
  }
  return 'http://localhost:9090/api/profile'
}

const API_URL = getApiUrl();

export default {
  REGISTER: API_URL + "register",
  LOGIN: API_URL + "login",
  CURRENT_USER: API_URL + "currentuser",
  LOGOUT: API_URL + "logout",
  EMPLOYEE: API_URL + "employee",
  JOBS: "http://localhost:9090/api/profile"
}