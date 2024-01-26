export default function ({ $axios, redirect, app, store, req }) {
  // base_url for development mode
  $axios.setBaseURL(`https://staging.mazaady.com/api/v1/`)

  function setHeader() {
    let privateKey = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      lang: app.i18n.locale,
      'private-key':privateKey
    }

    return headers
  }
  // Add a request interceptor
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers = setHeader(config)

      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
