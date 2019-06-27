<template>
  <div>
    <div class="fixed top-0 w-full z-30">
      <navbar></navbar>

      <title-block :application="application" :environment="environment">
        <template slot="right">
          <header-buttons :links="[
            !isProduction ? { title: 'Install Drupal', icon: 'actions__upload', disabled: false } : {},
            { title: 'Clear Varnish', icon: 'alpha__clear-cache', disabled: false },
            !isProduction ? { title: 'Live development', icon: 'actions__publish-settings', disabled: false } : { title: 'Production mode', icon: 'state__locked', disabled: false },
            { title: 'Rename', icon: 'actions__edit', disabled: false },
            { title: 'Configure', icon: 'actions__setting', disabled: false },
          ]"></header-buttons>
        </template>
      </title-block>
    </div>

    <div class="mt-48">
      <div class="-mt-3 flex flex-row-reverse h-full">
        <div class="ml-16 p-4 flex-1 overflow-x-hidden lg:ml-56 lg:p-12">
          <div>
            <div>
              <h1 class="mb-2 text-4xl font-thin">Overview</h1>

              <application-tags :application="application" :types="$attrs.types"/>
            </div>

            <div class="my-10">
              <a :href="environment.url" class="flex items-center text-sm text-blue-300 no-underline hover:underline focus:underline">
                <svg class="h-6 w-6 fill-current mr-1" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__globe"></use></svg>
                {{ environment.url }}
              </a>
            </div>

            <div class="spaced-y-10">
              <div>
                <action-cards :environment="environment" :is-production="isProduction"></action-cards>
              </div>

              <div class="shadow-md overflow-hidden">
                <div class="p-3 bg-white border-b-2 border-gray-300"><h2 class="text-lg">Site Health</h2></div>
                <div class="p-4 bg-white">
                  <div class="mb-6">
                    <p class="text-lg font-hairline text-gray-700">Uptime monitoring</p>
                  </div>

                  <div class="mb-5 text-center leading-normal">
                    <p class="text-gray-600">
                      Acquia uses a specially tuned uptime monitoring solution to keep track<br class="hidden md:inline">
                      of whether your Drupal site is really up and running.
                    </p>
                  </div>

                  <div class="flex justify-center">
                    <button type="button" class="btn">Enable Uptime</button>
                    <button type="button" class="btn is-secondary">Learn more</button>
                  </div>
                </div>
              </div>

              <div class="shadow-md overflow-hidden">
                <div class="p-3 bg-white border-b-2 border-gray-300"><h2 class="text-lg">Information</h2></div>
                <div class="px-4 py-6 bg-white">
                  <div class="mb-6 relative">
                    <div class="mb-1 text-xs">Git URL</div>
                    <div class="p-3 border border-gray-500 rounded truncate">{{ gitUrl }}</div>
                    <div class="absolute top-0 right-0">
                      <button type="button" class="flex items-center text-xs text-blue-300 hover:underline focus:underline">
                        <svg class="mr-1 h-3 w-3 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                        Copy <span class="visuallyhidden">Git URL to your clipboard</span>
                      </button>
                    </div>
                  </div>

                  <div class="mb-6 relative">
                    <div class="mb-1 text-xs">SSH URL</div>
                    <div class="p-3 border border-gray-500 rounded truncate">{{ sshUrl }}</div>
                    <div class="absolute top-0 right-0">
                      <button type="button" class="flex items-center text-xs text-blue-300 hover:underline focus:underline">
                        <svg class="mr-1 h-3 w-3 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                        Copy <span class="visuallyhidden">SSH URL to your clipboard</span>
                      </button>
                    </div>
                  </div>

                  <div class="-mx-4 -mb-4 flex flex-wrap lg:-mb-6">
                    <div class="mb-4 px-4 w-full lg:w-1/2 lg:mb-6">
                      <div class="mb-1 text-xs text-gray-600">IP Address</div>
                      <div>1.2.3.4</div>
                    </div>

                    <div class="mb-4 px-4 w-full lg:w-1/2 lg:mb-6">
                      <div class="mb-1 text-xs text-gray-600">Region</div>
                      <div>eu-west-1</div>
                    </div>

                    <div class="mb-4 px-4 w-full lg:w-1/2 lg:mb-6">
                      <div class="mb-1 text-xs text-gray-600">PHP version</div>
                      <div v-text="phpVersion"></div>
                    </div>

                    <div class="mb-4 px-4 w-full lg:w-1/2 lg:mb-6">
                      <div class="mb-1 text-xs text-gray-600">Live development mode</div>
                      <div>Off</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <sidebar :links="[
          { title: 'Overview', icon: 'sections__applications', active: true, disabled: false },
          { title: 'Stack Metrics', icon: 'sections__activity', active: false, disabled: false },
          { title: 'Servers', icon: 'alpha__server', active: false, disabled: false },
          { title: 'Databases', icon: 'alpha__database-38', active: false, disabled: false },
          { title: 'Domains', icon: 'alpha__globe', active: false, disabled: false },
          { title: 'Users & Keys', icon: 'locations__keys', active: false, disabled: false },
          { title: 'SSL', icon: 'alpha__ssl', active: false, disabled: false },
          { title: 'Logs', icon: 'alpha__page', active: false, disabled: false },
          { title: 'Insight', icon: 'alpha__insight', active: false, disabled: false },
          { title: 'Scheduled jobs', icon: 'alpha__recent', active: false, disabled: false },
          { title: 'Uptime', icon: 'alpha__grid', active: false, disabled: false },
          { title: 'Variables', icon: 'objects__variable', active: false, disabled: false },
        ]"></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import ActionCards from '@/components/Environment/ActionCards'
import ApplicationTags from '@/components/Application/ApplicationTags'

export default {
  components: {
    ActionCards,
    ApplicationTags
  },

  props: {
    id: String,
    environmentName: String
  },

  computed: {
    application: function () {
      return this.$attrs.applications[this.id]
    },

    environment: function () {
      return this.application.environments[this.environmentName]
    },

    gitUrl: function () {
      return `${this.application.machineName}@svn-1234.prod.hosting.acquia.com:${this.application.machineName}.git`
    },

    isProduction: function () {
      return this.environmentName === 'prod'
    },

    sshUrl: function () {
      return `${this.application.machineName}.${this.environmentName}@staging-1234.prod.hosting.acquia.com`
    },

    phpVersion: function () {
      return this.environment.versions.php
    }
  }
}
</script>
