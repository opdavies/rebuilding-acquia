import _ from 'lodash'

let data = require('./data').default

export default {
  methods: {
    setData (newData) {
      data = newData
    },

    getData () {
      return data
    },

    getTypes () {
      return data.types
    },

    getApplications () {
      return data.applications
    },

    getApplication (applicationId) {
      return _(data.applications).get(applicationId)
    },

    getEnvironment (applicationId, environment) {
      return _(this.getApplication(applicationId))
        .get('environments')[environment]
    },

    getApplicationType (application) {
      return this.getTypes()[application.type]
    },

    getVersion (type, environment) {
      return _(environment).get(`versions.${type}`)
    }
  }
}
