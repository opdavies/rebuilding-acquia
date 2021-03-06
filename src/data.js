module.exports = {
  types: {
    drupal: {
      id: 'drupal',
      name: 'Drupal'
    },
    nodejs: {
      id: 'nodejs',
      name: 'Node.js'
    }
  },

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
            php: '7.1'
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
            php: '7.1'
          }
        },
        ra: {
          name: 'RA',
          url: 'ra.rebuilding-acquia.com',
          label: 'tags/WELCOME',
          versions: {
            php: '7.2'
          }
        }
      },
      tasks: [
        {
          text: 'Commit: fdac923 Merge branch \'update-password-policy\' refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 19, 2018 3:48:29 PM UTC +0000',
            started: 'Dec 19, 2018 3:48:29 PM UTC +0000',
            completed: 'Dec 19, 2018 3:48:29 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: 9688c41 Update IP address refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 19, 2018 3:50:31 PM UTC +0000',
            started: 'Dec 19, 2018 3:50:31 PM UTC +0000',
            completed: 'Dec 19, 2018 3:50:31 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Deploy code from test to prod',
          user: 'system',
          times: {
            display: 'Dec 19, 2018 3:55:29 PM UTC +0000',
            started: 'Dec 19, 2018 3:55:29 PM UTC +0000',
            completed: 'Dec 19, 2018 3:55:29 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Deploy the code reference master to dev',
          user: 'system',
          times: {
            display: 'Dec 20, 2018 10:13:48 PM UTC +0000',
            started: 'Dec 20, 2018 10:13:48 PM UTC +0000',
            completed: 'Dec 20, 2018 10:13:48 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Deploy the code reference tags/2018-12-19 to test',
          user: 'system',
          times: {
            display: 'Dec 20, 2018 10:25:07 PM UTC +0000',
            started: 'Dec 20, 2018 10:25:07 PM UTC +0000',
            completed: 'Dec 20, 2018 10:25:07 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: e75c4a3 Merge branch \'voucher-code-bug-34\' refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 21, 2018 12:55:49 PM UTC +0000',
            started: 'Dec 21, 2018 12:55:49 PM UTC +0000',
            completed: 'Dec 21, 2018 12:55:49 PM UTC +0000'
          },
          status: 'Failed',
          loading: false,
          success: false
        },
        {
          text: 'Commit: 398945c Ensure stage_file_proxy is enabled refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 21, 2018 1:09:19 PM UTC +0000',
            started: 'Dec 21, 2018 1:09:19 PM UTC +0000',
            completed: 'Dec 21, 2018 1:09:19 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: 96ac151 Fix syntax refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 21, 2018 1:23:43 PM UTC +0000',
            started: 'Dec 21, 2018 1:23:43 PM UTC +0000',
            completed: 'Dec 21, 2018 1:23:43 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: 8056d51 Add production URLs as settings refs/heads/master',
          user: 'system',
          times: {
            display: 'Dec 21, 2018 1:34:13 PM UTC +0000',
            started: 'Dec 21, 2018 1:34:13 PM UTC +0000',
            completed: 'Dec 21, 2018 1:34:13 PM UTC +0000'
          },
          status: 'In progress',
          loading: true,
          success: true
        }
      ]
    },
    2: {
      id: 2,
      name: 'Oliver Davies',
      machineName: 'oliverdavies',
      type: 'drupal',
      level: 'Professional',
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
        }
      },
      tasks: [
        {
          text: 'Create database opdaviestest in Dev.',
          user: 'system',
          times: {
            display: 'Dec 23, 2018 11:26:48 PM UTC +0000',
            started: 'Dec 23, 2018 11:26:50 PM UTC +0000',
            completed: 'Dec 23, 2018 11:26:52 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Create database opdaviestest in Stage.',
          user: 'system',
          times: {
            display: 'Dec 23, 2018 11:26:48 PM UTC +0000',
            started: 'Dec 23, 2018 11:26:50 PM UTC +0000',
            completed: 'Dec 23, 2018 11:26:52 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Install Drupal 8 to Dev.',
          user: 'oliver@oliverdavies.uk (oliver@oliverdavies.uk)',
          times: {
            display: 'Dec 23, 2018 11:33:52 PM UTC +0000',
            started: 'Dec 23, 2018 11:33:53 PM UTC +0000',
            completed: 'Dec 23, 2018 11:37:21 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: 9736ef5 Importing site archive refs/heads/master',
          user: 'vcs.commit',
          times: {
            display: 'Dec 23, 2018 11:36:29 PM UTC +0000',
            started: 'Dec 23, 2018 11:36:30 PM UTC +0000',
            completed: 'Dec 23, 2018 11:37:16 PM UTC +0000'
          },
          loading: false,
          success: true
        },
        {
          text: 'Commit: 0ab620f Initial commit to Acquia Git starter repo. refs/tags/pre-import-2018-12-23',
          user: 'vcs.commit',
          times: {
            display: 'Dec 23, 2018 11:36:30 PM UTC +0000',
            started: 'Dec 23, 2018 11:36:32 PM UTC +0000',
            completed: 'Dec 23, 2018 11:36:33 PM UTC +0000'
          },
          loading: false,
          success: true
        }
      ]
    }
  }
}
