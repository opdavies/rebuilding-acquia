<template>
  <div>
    <navbar></navbar>

    <div class="px-4 py-5 border-b-2 border-grey flex justify-between items-center">
      <div class="w-full md:w-auto flex flex-col">
        <div class="text-2xl font-hairline mr-2">Applications</div>
      </div>

      <div class="hidden md:block">
        <ul class="list-reset flex">
          <li>
            <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
              <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__new-app"></use></svg>
              Add Application
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-row-reverse flex-1 h-full">
      <div class="flex-1 p-4 lg:p-12">
        <div class="mb-6">
          <div class="lg:flex lg:items-baseline mb-12">
            <div class="mr-16 mb-4 lg:mb-0">
              <h1 class="text-4xl font-hairline mb-2">Applications</h1>
            </div>

            <application-switcher class="hidden lg:flex-1 lg:flex lg:justify-end mr-3" :mode="display" @display-changed="handleDisplay"></application-switcher>

            <div class="lg:flex lg:flex-row-reverse justify-between items-baseline">
              <div class="w-full">
                <form action="#">
                  <input type="text" placeholder="Filter applications" class="w-full py-2 px-3 border border-grey-darker rounded">
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 -mb-6">
          <application-card
            v-for="application in applications"
            :id="application.id"
            :application="application"
            :key="application.id"
            :display="display"
            class="px-3 w-full"
            :class="[display == 'grid' ? 'lg:w-1/3 xl:w-1/4 mb-6 flex flex-col' : '']"
          ></application-card>
        </div>
      </div>

      <div class="w-auto lg:w-64 bg-grey-darkest text-white antialiased">
        <div>
          <ul class="list-reset">
            <li>
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-blue px-4 py-5 bg-grey-darker">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__grid"></use></svg>
                <span class="hidden lg:block lg:ml-4">All</span>
              </a>
            </li>
            <li>
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#state__starred"></use></svg>
                <span class="hidden lg:block lg:ml-4">Starred</span>
              </a>
            </li>
            <li>
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__recent"></use></svg>
                <span class="hidden lg:block lg:ml-4">Recents</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationCard from '@/components/ApplicationCard'
import ApplicationSwitcher from '@/components/ApplicationSwitcher'
import data from '@/data.json'

export default {
  components: {
    ApplicationCard,
    ApplicationSwitcher,
  },

  data() {
    return {
      applications: data.applications,
      display: 'grid',
    }
  },

  methods: {
    handleDisplay(mode) {
      this.display = mode
    }
  }
}
</script>
