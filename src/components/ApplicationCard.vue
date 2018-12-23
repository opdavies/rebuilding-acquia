<template>
  <div class="w-full md:w-1/3 lg:w-1/4 mx-6 mb-6 bg-white p-4 border border-grey rounded">
    <div class="flex flex-col h-full justify-between">
      <div class="flex justify-between mb-12">
        <div>
          <div>
            <router-link :to="{name: 'environments', params: {id: id}}" class="text-blue-dark no-underline hover:underline focus:underline"><h2 class="mb-1">{{ application.name }}</h2></router-link>
          </div>
          <div>
            <a href="#0" class="text-blue-dark no-underline hover:underline focus:underline">{{ application.environments['prod'].url }}</a>
          </div>
        </div>

        <div>
          <button type="button" @click="starred = !starred" class="focus:outline-none">
            <svg class="h-6 w-6 text-orange fill-current" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#state__${starred ? 'starred' : 'unstarred'}`"></use></svg>
          </button>
        </div>
      </div>

      <application-tags :type="application.type" :level="application.level"></application-tags>
    </div>
  </div>
</template>

<script>
import ApplicationTags from '@/components/ApplicationTags'

export default {
  components: {
    ApplicationTags,
  },

  props: {
    application: Object,
    id: Number,
  },

  data() {
    return {
      starred: false,
    }
  }
}
</script>
