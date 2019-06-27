<template>
  <div>
    <div class="w-full fixed top-0 z-30">
      <navbar></navbar>

      <title-block :application="application">
        <template slot="right">
          <div class="flex items-center">
            <div class="hidden md:block">
              <button type="button" class="py-2 px-6 text-sm font-bold text-blue-300 uppercase border border-blue-300 hover:text-blue-400 hover:border-blue-400 focus:border-blue-400">
                Steps to launch
              </button>
            </div>

            <header-buttons class="ml-5" :links="[
              { title: 'Add database', icon: 'actions__new-database', disabled: false },
              { title: 'Git Info', icon: 'actions__info', disabled: false },
              { title: 'Rename', icon: 'actions__edit', disabled: false },
              { title: 'Cancel', icon: 'actions__remove--circle', disabled: false },
            ]"></header-buttons>
          </div>
        </template>
      </title-block>
    </div>

    <div class="mt-48">
      <div class="-mt-3 h-full flex flex-row-reverse">
        <div class="ml-16 p-4 flex-1 overflow-x-hidden lg:p-12 lg:ml-56">
          <div class="mb-6">
            <div class="mb-2 lg:flex lg:items-baseline">
              <div class="mr-16 mb-4 lg:mb-0">
                <h1 class="mb-2 text-4xl font-thin">Environments</h1>

                <application-tags :application="application" :types="$attrs.types"/>
              </div>

              <div class="flex-1 justify-between items-baseline lg:flex lg:flex-row-reverse">
                <div class="w-full lg:w-1/2 xl:w-1/3">
                  <form action="#">
                    <input type="text" placeholder="Filter environments" class="py-2 px-3 w-full border border-gray-600 rounded">
                  </form>
                </div>

                <div class="flex-1">
                  <toggle-help @toggle="help.hidden = !help.hidden"></toggle-help>
                </div>
              </div>
            </div>
          </div>

          <div class="spaced-y-6">
            <quick-help :hidden="help.hidden"></quick-help>

            <environment-cards :application="application" :id="id"/>

            <task-log :tasks="application.tasks" v-if="application.tasks[0]"></task-log>
          </div>
        </div>

        <sidebar :links="[
          { title: 'Environments', icon: 'alpha__grid', active: true, disabled: false },
          { title: 'Product Keys', icon: 'locations__keys', active: false, disabled: true },
          { title: 'Security', icon: 'alpha__security', active: false, disabled: true },
          { title: 'Acquia Search', icon: 'actions__search', active: false, disabled: false },
        ]"></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationTags from '@/components/Application/ApplicationTags'
import EnvironmentCards from '@/components/Environment/EnvironmentCards'
import QuickHelp from '@/components/Environment/QuickHelp'
import TaskLog from '@/components/Environment/TaskLog/TaskLog'
import ToggleHelp from '@/components/Environment/ToggleHelp'

export default {
  components: {
    ApplicationTags,
    EnvironmentCards,
    QuickHelp,
    TaskLog,
    ToggleHelp
  },

  props: {
    id: String
  },

  data () {
    return {
      help: {
        hidden: false
      }
    }
  },

  computed: {
    application () {
      return this.$attrs.applications[this.id]
    }
  }
}
</script>
