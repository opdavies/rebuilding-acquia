<template>
  <div>
    <navbar></navbar>

    <div class="px-4 py-5 border-b-2 border-grey flex justify-between items-center">
      <div class="w-full md:w-auto flex flex-col">
        <div class="text-xs mb-3">
          <ol class="list-reset flex">
            <li class="mr-6"><a href="#0" class="text-blue-dark no-underline hover:underline">Applications</a></li>
            <li>{{ application.name }}</li>
          </ol>
        </div>

        <button class="flex flex-1 items-center justify-between md:justify-start">
          <div class="text-2xl font-hairline mr-2">{{ application.name }}</div>
          <svg class="h-6 w-6 text-blue-dark fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__down-arrow"></use></svg>
        </button>
      </div>

      <div class="hidden md:block">
        <ul class="list-reset flex">
          <li>
            <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
              <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__new-database"></use></svg>
              Add database
            </button>
          </li>

          <li class="ml-6">
            <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
              <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__info"></use></svg>
              Git Info
            </button>
          </li>

          <li class="ml-6">
            <button type="button" class="text-xs text-grey-dark no-underline flex flex-col items-center justify-center cursor-not-allowed" disabled>
              <svg class="h-6 w-6 fill-current text-grey-dark mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__edit"></use></svg>
              Rename
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-row-reverse h-full">
      <div class="flex-1 p-4 lg:p-12">
        <div class="mb-6">
          <div class="lg:flex lg:items-baseline mb-2">
            <div class="mr-16 mb-4 lg:mb-0">
              <h1 class="text-4xl font-hairline mb-2">Environments</h1>

              <!-- <application-tags></application-tags> -->
            </div>

            <div class="lg:flex lg:flex-row-reverse flex-1 justify-between _bg-blue items-baseline">
              <div class="w-full lg:w-1/2 xl:w-1/3">
                <form action="#">
                  <input type="text" placeholder="Filter environments" class="w-full py-2 px-3 border border-grey-darker rounded">
                </form>
              </div>

              <div class="flex-1">
                <toggle-help @toggle="help.hidden = !help.hidden"></toggle-help>
              </div>
            </div>
          </div>
        </div>

        <quick-help :hidden="help.hidden"></quick-help>
        <environment-cards :environments="application.environments"></environment-cards>
        <task-log></task-log>
      </div>

      <div class="w-auto lg:w-64 bg-grey-darkest text-white antialiased">
        <div>
          <ul class="list-reset">
            <li class="border-r-6 border-b border-grey-darker">
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-blue px-4 py-5 bg-grey-darker">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__grid"></use></svg>
                <span class="hidden lg:block lg:ml-4">Environments</span>
              </a>
            </li>
            <li class="border-r-6 border-grey-darkest hover:border-grey-darker">
              <div class="flex items-center text-grey no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 cursor-not-allowed hover:bg-grey-darker">
                <svg class="h-6 w-6 text-grey fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#locations__keys"></use></svg>
                <span class="hidden lg:block lg:ml-4">Product Keys</span>
              </div>
            </li>
            <li class="border-r-6 border-grey-darkest hover:border-grey-darker">
              <div class="flex items-center text-grey no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 cursor-not-allowed hover:bg-grey-darker">
                <svg class="h-6 w-6 text-grey fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__security"></use></svg>
                <span class="hidden lg:block lg:ml-4">Security</span>
              </div>
            </li>
            <li class="border-r-6 border-grey-darkest hover:border-grey-darker">
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 hover:bg-grey-darker">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__search"></use></svg>
                <span class="hidden lg:block lg:ml-4">Acquia Search</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnvironmentCards from '@/components/EnvironmentCards'
import QuickHelp from '@/components/QuickHelp'
import TaskLog from '@/components/TaskLog'
import ToggleHelp from '@/components/ToggleHelp'
import data from '@/data.json'

export default {
  components: {
    EnvironmentCards,
    QuickHelp,
    TaskLog,
    ToggleHelp,
  },

  props: {
    id: String,
  },

  data() {
    return {
      applications: data.applications,
      help: {
        hidden: false,
      }
    }
  },

  computed: {
    application: function() {
      return this.applications[this.id]
    }
  }
}
</script>
