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
      return features
    },
    successMessage(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'primary',
        duration: 2000
      });
    },
    errorMessage(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'error',
        duration: 3000
      });
    },
  }
}