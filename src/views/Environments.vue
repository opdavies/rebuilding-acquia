<template>
  <div>
    <div class="fixed top-0 w-full z-30">
      <navbar></navbar>

      <title-block :application="application">
        <template slot="right">
          <div class="flex items-center">
            <div class="hidden md:block">
              <button type="button" class="text-sm font-bold text-blue-300 uppercase py-2 px-6 border border-blue-300 hover:text-blue-400 hover:border-blue-400 focus:border-blue-400">
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
      <div class="-mt-6 md:-mt-3 flex flex-row-reverse h-full">
        <div class="flex-1 p-4 lg:p-12 ml-16 lg:ml-56 overflow-x-hidden">
          <div class="mb-6">
            <div class="lg:flex lg:items-baseline mb-2">
              <div class="mr-16 mb-4 lg:mb-0">
                <h1 class="text-4xl font-thin mb-2">Environments</h1>

                <application-tags :type="getApplicationType(application)" :level="application.level"></application-tags>
              </div>

              <div class="lg:flex lg:flex-row-reverse flex-1 justify-between _bg-blue items-baseline">
                <div class="w-full lg:w-1/2 xl:w-1/3">
                  <form action="#">
                    <input type="text" placeholder="Filter environments" class="w-full py-2 px-3 border border-gray-600 rounded">
                  </form>
                </div>

                <div class="flex-1">
                  <toggle-help @toggle="help.hidden = !help.hidden"></toggle-help>
                </div>
              </div>
            </div>
          </div>

          <quick-help :hidden="help.hidden"></quick-help>
          <environment-cards :environments="application.environments" :id="id"></environment-cards>
          <task-log :tasks="application.tasks" v-if="application.tasks[0]"></task-log>
        </div>

        <sidebar class="-mt-1 md:-mt-2px" :links="[
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
import ApiClient from '@/api-client.js'
import ApplicationTags from '@/components/Application/ApplicationTags'
import EnvironmentCards from '@/components/Environment/EnvironmentCards'
import QuickHelp from '@/components/Environment/QuickHelp'
import TaskLog from '@/components/Environment/TaskLog/TaskLog'
import ToggleHelp from '@/components/Environment/ToggleHelp'

export default {
  mixins: [ApiClient],

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
    application: function () {
      return this.getApplication(this.id)
    }
  }
}
</script>
