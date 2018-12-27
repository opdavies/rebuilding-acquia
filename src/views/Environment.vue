<template>
  <div>
    <div class="fixed pin-t w-full z-30">
      <navbar></navbar>

      <title-block>
        <template slot="left">
          <div class="text-xs mb-3">
            <ol class="list-reset flex">
              <li class="flex items-center pr-1">
                <router-link to="/" class="text-blue-dark no-underline hover:underline mr-1">Applications</router-link>
                <svg class="w-3 h-3 fill-current text-grey" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/></svg>
              </li>
              <li class="flex items-center pr-1">
                <router-link :to="{ name: 'environments' }" class="text-blue-dark no-underline hover:underline mr-1">{{ application.name }}</router-link>
                <svg class="w-3 h-3 fill-current text-grey" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/></svg>
              </li>
              <li>{{ environment.name }}</li>
            </ol>
          </div>

          <button class="flex flex-1 items-center justify-between md:justify-start">
            <div class="text-2xl font-hairline">{{ application.name }} : {{ environment.name }}</div>
            <svg class="h-6 w-6 text-blue-dark fill-current ml-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__down-arrow"></use></svg>
          </button>
        </template>

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
      <div class="-mt-4 md:-mt-2 flex flex-row-reverse h-full">
        <div class="flex-1 p-4 lg:p-12 ml-16 lg:ml-64 overflow-x-hidden">
          <div>
            <div>
              <h1 class="font-hairline mb-2">Overview</h1>

              <application-tags :type="application.type" :level="application.level"></application-tags>
            </div>

            <div class="my-10">
              <a :href="environment.url" class="flex items-center text-sm text-blue-dark no-underline hover:underline focus:underline">
                <svg class="h-6 w-6 fill-current mr-1" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__globe"></use></svg>
                {{ environment.url }}
              </a>
            </div>

            <div class="mb-6">
              <div class="flex flex-wrap -mx-4 -mb-4">
                <div class="w-full md:w-1/3 px-4 mb-4">
                  <div class="border border-grey rounded shadow bg-white overflow-hidden">
                    <div class="border-t-4 border-teal">
                      <div class="border-b border-grey-dark">
                        <div class="px-3 py-4">
                          <div class="flex flex-row-reverse">
                            <div class="flex-1">
                              <h2 class="text-grey-darker text-base mb-1">Code</h2>
                              <div class="text-xs text-grey-darker">{{ environment.name }}: {{ environment.label }}</div>
                            </div>

                            <div class="mr-3">
                              <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__code"></use></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <ul class="list-reset flex -ml-px">
                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__fork"></use></svg>
                              <span class="block">Deploy</span>
                            </button>
                          </li>

                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
                              <span class="block">Switch</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-4 mb-4">
                  <div class="border border-grey rounded shadow bg-white overflow-hidden">
                    <div class="border-t-4 border-teal">
                      <div class="border-b border-grey-dark">
                        <div class="px-3 py-4">
                          <div class="flex flex-row-reverse">
                            <div class="flex-1">
                              <h2 class="text-grey-darker text-base mb-1">Databases</h2>
                              <div class="text-xs text-grey-darker">{{ environment.name }}</div>
                            </div>

                            <div class="mr-3">
                              <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__database"></use></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <ul class="list-reset flex -ml-px">
                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                              <span class="block">Copy</span>
                            </button>
                          </li>

                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
                              <span class="block">Back up</span>
                            </button>
                          </li>

                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button
                              type="button"
                              class="w-full py-3 text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block"
                              :class="{
                                'text-blue-dark': !isProduction,
                                'text-grey cursor-not-allowed': isProduction
                              }"
                              :disabled="isProduction"
                            >
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__restore"></use></svg>
                              <span class="block">Restore</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-4 mb-4">
                  <div class="border border-grey rounded shadow bg-white overflow-hidden">
                    <div class="border-t-4 border-teal">
                      <div class="border-b border-grey-dark">
                        <div class="px-3 py-4">
                          <div class="flex flex-row-reverse">
                            <div class="flex-1">
                              <h2 class="text-grey-darker text-base mb-1">Files</h2>
                              <div class="text-xs text-grey-darker">{{ environment.name }}</div>
                            </div>

                            <div class="mr-3">
                              <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__environment"></use></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <ul class="list-reset flex -ml-px">
                          <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                            <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                              <span class="block">Copy</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6 rounded border border-grey shadow overflow-hidden">
              <div class="bg-grey-light p-4"><h2 class="text-lg">Site Health</h2></div>
              <div class="bg-white p-4">
                <div class="mb-6">
                  <p class="text-lg font-hairline text-grey-darkest">Uptime monitoring</p>
                </div>

                <div class="text-center leading-normal mb-5">
                  <p class="text-grey-darker">
                    Acquia uses a specially tuned uptime monitoring solution to keep track<br class="hidden md:inline">
                    of whether your Drupal site is really up and running.
                  </p>
                </div>

                <div class="flex justify-center">
                  <button type="button" class="text-sm font-thin bg-blue-dark hover:bg-blue-darker antialiased text-white px-4 py-3 no-underline rounded mx-1">Enable Uptime</button>
                  <button type="button" class="text-sm font-thin bg-grey-dark hover:bg-grey-darker antialiased text-white px-4 py-3 no-underline rounded mx-1">Learn more</button>
                </div>
              </div>
            </div>

            <div class="rounded border border-grey shadow overflow-hidden">
              <div class="bg-grey-light p-4"><h2 class="text-lg">Information</h2></div>
              <div class="bg-white px-4 py-6">
                <div class="mb-6 relative">
                  <div class="text-xs mb-1">Git URL</div>
                  <div class="border border-grey-dark rounded p-3">{{ gitUrl }}</div>
                  <div class="absolute pin-t pin-r">
                    <button type="button" class="flex items-center text-xs text-blue-dark hover:underline focus:underline">
                      <svg class="h-3 w-3 fill-current mr-1" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                      Copy <span class="visuallyhidden">Git URL to your clipboard</span>
                    </button>
                  </div>
                </div>

                <div class="mb-6 relative">
                  <div class="text-xs mb-1">SSH URL</div>
                  <div class="border border-grey-dark rounded p-3">{{ sshUrl }}</div>
                  <div class="absolute pin-t pin-r">
                    <button type="button" class="flex items-center text-xs text-blue-dark hover:underline focus:underline">
                      <svg class="h-3 w-3 fill-current mr-1" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                      Copy <span class="visuallyhidden">SSH URL to your clipboard</span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-wrap -mx-4 -mb-4 lg:-mb-6">
                  <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-6">
                    <div class="mb-1 text-xs text-grey-darker">IP Address</div>
                    <div>111.222.333.444</div>
                  </div>

                  <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-6">
                    <div class="mb-1 text-xs text-grey-darker">Region</div>
                    <div>eu-west-1</div>
                  </div>

                  <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-6">
                    <div class="mb-1 text-xs text-grey-darker">PHP version</div>
                    <div>7.1</div>
                  </div>

                  <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-6">
                    <div class="mb-1 text-xs text-grey-darker">Live development mode</div>
                    <div>Off</div>
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
import ApplicationTags from '@/components/Application/ApplicationTags'
import data from '@/data.json'

export default {
  components: {
    ApplicationTags,
  },

  props: {
    id: String,
    environmentName: String,
  },

  data() {
    return {
      applications: data.applications,
    }
  },

  computed: {
    application: function () {
      return this.applications[this.id]
    },

    environment: function () {
      return this.application['environments'][this.environmentName]
    },

    gitUrl: function () {
      return this.application.machineName  + '@svn-1234.prod.hosting.acquia.com:' + this.application.machineName + '.git'
    },

    isProduction: function () {
      return this.environmentName == 'prod'
    },

    sshUrl: function () {
      return this.application.machineName + '.' + this.environmentName + '@staging-1234.prod.hosting.acquia.com'
    }
  },
}
</script>
