<template>
  <div>
    <div class="w-full fixed top-0 z-30">
      <navbar></navbar>

      <title-block>
        <template slot="right">
          <header-buttons :links="[
            { title: 'Add Application', icon: 'alpha__new-app', disabled: false },
          ]"></header-buttons>
        </template>
      </title-block>
    </div>

    <div class="mt-48">
      <div class="-mt-3 h-full flex flex-row-reverse">
        <div class="ml-16 p-4 flex-1 overflow-x-hidden lg:ml-56 lg:p-12">
          <div class="mb-6">
            <div class="lg:flex lg:items-baseline mb-12">
              <div class="mr-16 mb-4 lg:mb-0">
                <h1 class="mb-2 text-4xl font-thin">Applications</h1>
              </div>

              <application-display-switcher class="mr-3 hidden lg:flex-1 lg:flex lg:justify-end" :mode="display" @display-changed="handleDisplay"></application-display-switcher>

              <div class="justify-between items-baseline lg:flex lg:flex-row-reverse">
                <div class="w-full">
                  <form action="#">
                    <label for="applications" class="visuallyhidden">Filter applications</label>
                    <input id="applications" type="text" placeholder="Filter applications" class="py-2 px-3 w-full border border-gray-600 rounded">
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="-mt-6 -mx-3 flex flex-wrap">
            <div
              v-for="application in sortedApplications"
              :key="application.id"
              class="px-3 w-full"
              :class="{ 'mt-6 flex flex-col md:w-1/2 lg:w-1/3 xl:w-1/4': display == 'grid' }"
            >
              <application-card
                :application="application"
                :display="display"
                :id="application.id"
                class="flex flex-col flex-1"
              ></application-card>
            </div>
          </div>
        </div>

        <sidebar :links="[
          { title: 'All', icon: 'alpha__grid', active: true, disabled: false },
          { title: 'Starred', icon: 'state__starred', active: false, disabled: false },
          { title: 'Recents', icon: 'objects__recent', active: false, disabled: false },
        ]"></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import sortBy from 'lodash/sortBy'
import ApplicationCard from '@/components/Application/ApplicationCard'
import ApplicationDisplaySwitcher from '@/components/Application/ApplicationDisplaySwitcher'

export default {
  props: {
    applications: {
      type: Object,
      required: true
    },
    types: {
      type: Object,
      required: true
    }
  },

  components: {
    ApplicationCard,
    ApplicationDisplaySwitcher
  },

  data () {
    return {
      display: 'grid'
    }
  },

  computed: {
    sortedApplications: function () {
      return sortBy(this.applications, [function (a) { return a.name }])
    }
  },

  methods: {
    handleDisplay (mode) {
      this.display = mode
    }
  }
}
</script>
