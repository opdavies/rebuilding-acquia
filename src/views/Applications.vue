<template>
  <div>
    <div class="fixed pin-t w-full z-30">
      <navbar></navbar>

      <title-block>
        <template slot="left">
          <div class="text-2xl font-hairline mr-2">Applications</div>
        </template>

        <template slot="right">
          <header-buttons :links="[
            { title: 'Add Application', icon: 'alpha__new-app', disabled: false },
          ]"></header-buttons>
        </template>
      </title-block>
    </div>

    <div class="mt-48">
      <div class="-mt-10 md:-mt-3 flex flex-row-reverse h-full">
        <div class="flex-1 p-4 lg:p-12 ml-16 lg:ml-56 overflow-x-hidden">
          <div class="mb-6">
            <div class="lg:flex lg:items-baseline mb-12">
              <div class="mr-16 mb-4 lg:mb-0">
                <h1 class="text-4xl font-thin mb-2">Applications</h1>
              </div>

              <application-display-switcher class="hidden lg:flex-1 lg:flex lg:justify-end mr-3" :mode="display" @display-changed="handleDisplay"></application-display-switcher>

              <div class="lg:flex lg:flex-row-reverse justify-between items-baseline">
                <div class="w-full">
                  <form action="#">
                    <label for="applications" class="visuallyhidden">Filter applications</label>
                    <input id="applications" type="text" placeholder="Filter applications" class="w-full py-2 px-3 border border-grey-4-6 rounded">
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 -mb-6">
            <application-card
              v-for="application in sortedApplications"
              :id="application.id"
              :application="application"
              :key="application.id"
              :display="display"
              class="px-3 w-full"
              :class="[display == 'grid' ? 'md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 flex flex-col' : '']"
            ></application-card>
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
import ApplicationCard from '@/components/Application/ApplicationCard'
import ApplicationDisplaySwitcher from '@/components/Application/ApplicationDisplaySwitcher'
import _ from 'lodash'
import data from '@/data.json'

export default {
  components: {
    ApplicationCard,
    ApplicationDisplaySwitcher,
  },

  data() {
    return {
      applications: data.applications,
      display: 'grid',
    }
  },

  computed: {
    sortedApplications: function () {
      return _.sortBy(this.applications, [function (a) { return a.name }])
    }
  },

  methods: {
    handleDisplay(mode) {
      this.display = mode
    }
  }
}
</script>
