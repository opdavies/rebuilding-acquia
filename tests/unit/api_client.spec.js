import _ from 'lodash'

const apiClient = require('../../src/api-client')
const methods = apiClient.default.methods

test('it can get the application types', () => {
  const data = {
    types: {
      drupal: {
        id: 'drupal',
        name: 'Drupal'
      },
      symfony: {
        id: 'symfony',
        name: 'Symfony'
      }
    }
  }

  methods.setData(data)

  expect(methods.getTypes()).toBe(data.types)
})

test('it can get the applications', () => {
  const data = {
    applications: {
      1: {
        id: 1,
        name: 'Rebuilding Acquia',
        machineName: 'rebuildingacquia',
        type: 'drupal',
        level: 'Enterprise',
        environments: {},
        tasks: {}
      },
      2: {
        id: 2,
        name: 'Oliver Davies',
        machineName: 'oliverdavies',
        type: 'drupal',
        level: 'Professional',
        environments: {},
        tasks: {}
      }
    }
  }

  methods.setData(data)

  expect(methods.getApplications()).toBe(data.applications)
})

test('it can get a single application', () => {
  const data = {
    applications: {
      1: {
        id: 1,
        name: 'Rebuilding Acquia',
        machineName: 'rebuildingacquia',
        type: 'drupal',
        level: 'Enterprise',
        environments: {},
        tasks: {}
      },
      2: {
        id: 2,
        name: 'Oliver Davies',
        machineName: 'oliverdavies',
        type: 'drupal',
        level: 'Professional',
        environments: {},
        tasks: {}
      }
    }
  }

  methods.setData(data)

  _.forEach([1, 2], (applicationId) => {
    expect(methods.getApplication(applicationId))
      .toBe(data.applications[applicationId])
  })
})

test('it can get an environment for an application', () => {
  const data = {
    applications: {
      1: {
        id: 1,
        name: 'Rebuilding Acquia',
        machineName: 'rebuildingacquia',
        type: 'drupal',
        level: 'Enterprise',
        environments: {
          dev: {
            name: 'Dev',
            url: 'dev.oliverdavies.uk',
            label: 'develop',
            versions: {
              php: '7.2'
            }
          },
          stage: {
            name: 'Stage',
            url: 'stg.oliverdavies.uk',
            label: 'master',
            versions: {
              php: '7.2'
            }
          },
          prod: {
            name: 'Prod',
            url: 'oliverdavies.uk',
            label: 'tags/2018-12-21',
            versions: {
              php: '7.2'
            }
          },
          tasks: {}
        }
      }
    }
  }

  methods.setData(data)

  _.forEach(['dev', 'stage', 'prod'], (environmentName) => {
    expect(methods.getEnvironment(1, environmentName))
      .toBe(data.applications[1].environments[environmentName])
  })
})

test('it can get the type of an application', () => {
  const data = {
    types: {
      drupal: {
        id: 'drupal',
        name: 'Drupal'
      },
      symfony: {
        id: 'symfony',
        name: 'Symfony'
      }
    }
  }

  methods.setData(data)

  const applications = {
    drupal: {
      type: 'drupal'
    },
    symfony: {
      type: 'symfony'
    },
  }

  _.forEach(applications, (application, expected) => {
    expect(methods.getApplicationType(application)).toBe(data.types[expected])
  })
})

test('it can get a version from an environment', () => {
  const data = {
    applications: {
      1: {
        id: 1,
        name: 'Rebuilding Acquia',
        machineName: 'rebuildingacquia',
        type: 'drupal',
        level: 'Enterprise',
        environments: {
          dev: {
            name: 'Dev',
            url: 'dev.rebuilding-acquia.com',
            label: 'develop',
            versions: {
              php: '5.6'
            }
          },
          stage: {
            name: 'Stage',
            url: 'stg.rebuilding-acquia.com',
            label: 'master',
            versions: {
              php: '7.1'
            }
          },
          prod: {
            name: 'Prod',
            url: 'rebuilding-acquia.com',
            label: 'tags/2018-12-21',
            versions: {
              php: '7.2'
            }
          }
        }
      }
    }
  }

  methods.setData(data)

  const expected = {
    dev: '5.6',
    stage: '7.1',
    prod: '7.2'
  }

  _.forEach(expected, (version, environment) => {
    expect(methods.getVersion('php', data.applications[1].environments[environment]))
      .toBe(version)
  })
})
