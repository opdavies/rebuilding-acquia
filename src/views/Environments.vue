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
              <li>{{ application.name }}</li>
            </ol>
          </div>

          <button class="flex flex-1 items-center justify-between md:justify-start">
            <div class="text-2xl font-hairline mr-2">{{ application.name }}</div>
            <svg class="h-6 w-6 text-blue-dark fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__down-arrow"></use></svg>
          </button>
        </template>

        <template slot="right">
          <header-buttons :links="[
            { title: 'Add database', icon: 'actions__new-database', disabled: false },
            { title: 'Git Info', icon: 'actions__info', disabled: false },
            { title: 'Rename', icon: 'actions__edit', disabled: false },
            { title: 'Cancel', icon: 'actions__remove--circle', disabled: false },
          ]"></header-buttons>
        </template>
      </title-block>
    </div>

    <div class="mt-48">
      <div class="-mt-3 md:-mt-1 flex flex-row-reverse h-full">
        <div class="flex-1 p-4 lg:p-12 ml-16 lg:ml-56 overflow-x-hidden">
          <div class="mb-6">
            <div class="lg:flex lg:items-baseline mb-2">
              <div class="mr-16 mb-4 lg:mb-0">
                <h1 class="text-4xl font-thin mb-2">Environments</h1>

                <application-tags :type="application.type" :level="application.level"></application-tags>
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
          <environment-cards :environments="application.environments" :id="id"></environment-cards>
          <task-log :tasks="application.tasks"></task-log>
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
import data from '@/data.json'

export default {
  components: {
    ApplicationTags,
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
