<template>
  <div>
    <div v-if="display == 'grid'" class="bg-white p-4 border-grey rounded border flex-1">
      <div class="flex flex-col h-full justify-between">
        <div class="flex mb-12" :class="[display == 'grid' ? 'justify-between' : '']">
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

    <div v-if="display == 'list'" class="bg-white p-3 border-grey border-b">
      <div class="flex flex-row-reverse items-center justify-between">
        <div class="flex flex-1 justify-between">
          <div class="flex-1">
            <router-link :to="{name: 'environments', params: {id: id}}" class="text-blue-dark no-underline hover:underline focus:underline"><h2 class="text-base font-normal mb-1">{{ application.name }}</h2></router-link>
          </div>

          <application-tags :type="application.type" :level="application.level" class="w-1/5"></application-tags>

          <div class="w-2/5">
            <a href="#0" class="text-blue-dark no-underline hover:underline focus:underline">{{ application.environments['prod'].url }}</a>
          </div>
        </div>

        <div class="mr-3">
          <button type="button" @click="starred = !starred" class="focus:outline-none">
            <svg class="h-6 w-6 text-orange fill-current" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#state__${starred ? 'starred' : 'unstarred'}`"></use></svg>
          </button>
        </div>
      </div>
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
    display: String,
    id: Number,
  },

  data() {
    return {
      starred: false,
    }
  }
}
</script>
