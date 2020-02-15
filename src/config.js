function getApiUrl () {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'https://jobs.github.com/positions.json?description=python&location=new+york'
  } else if (hn === 'jobscms.netlify.com') {
    return 'https://jobs.github.com/positions.json?description=python&location=new+york'
  }
  return 'https://jobs.github.com/positions.json?description=python&location=new+york'
}

const API_URL = getApiUrl();

export default {
  JOBS_URL: API_URL,
}