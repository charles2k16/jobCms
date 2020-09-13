export default {
  methods: {
    getFeatures(callForward) {
      let features = [
        {
          feature: 'CFU',
          status: 'inactive'
        },
        {
          feature: 'CFNRC',
          status: 'inactive'
        },
        {
          feature: 'CFB',
          status: 'inactive'
        },
        {
          feature: 'CFNRY',
          status: 'inactive'
        }
      ]

      features.map(function (ff) {
        ff.status = (callForward == ff.feature) ? 'active' : ff.status
      })
      console.log(features)
      return features
    }
  }
}