function getApiUrl () {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'https://www.thomqdesigns.com/api/'
  } else if (hn === 'jobscms.netlify.com') {
    return 'https://www.thomqdesigns.com/api/'
  }
  return 'https://www.thomqdesigns.com/api/'
}

const API_URL = getApiUrl();

export default {
  REGISTER: API_URL + "register",
  LOGIN: API_URL + "login",
  CURRENT_USER: API_URL + "currentuser",
  LOGOUT: API_URL + "logout",
  EMPLOYEE: API_URL + "employee",
  JOBS: "https://jobs.github.com/positions.json?description=python&location=new+york"
}