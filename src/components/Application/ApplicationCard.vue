<template>
  <div>
    <div v-if="display == 'grid'" class="bg-white p-4 border-grey-400 rounded border flex-1">
      <div class="flex h-full">
        <div class="flex-1 w-5/6 flex flex-col justify-between">
          <div>
            <div>
              <router-link :to="{name: 'environments', params: {id: id}}" class="text-blue-300 no-underline hover:underline focus:underline focus:outline-none"><h2 class="mb-1">{{ application.name }}</h2></router-link>
            </div>

            <div class="truncate text-blue-300">
              <a href="#0" class="text-inherit no-underline hover:underline focus:underline focus:outline-none">{{ application.environments['prod'].url }}</a>
            </div>
          </div>

          <application-tags :type="application.type" :level="application.level" class="mt-6"></application-tags>
        </div>

        <div class="flex-none w-1/6 text-right">
          <star-toggle :application="application"></star-toggle>
        </div>
      </div>
    </div>

    <div v-if="display == 'list'" class="bg-white p-3 border-grey-400 border-b">
      <div class="-mx-2">
        <div class="flex flex-row-reverse items-center justify-between">
          <div class="flex flex-1 justify-between items-center -mx-2">
            <div class="flex-1 px-2">
              <router-link :to="{name: 'environments', params: {id: id}}" class="text-blue-300 no-underline hover:underline focus:underline"><h2 class="text-base font-normal mb-1">{{ application.name }}</h2></router-link>
            </div>

            <application-tags :type="application.type" :level="application.level" class="w-1/4 px-2"></application-tags>

            <div class="w-2/5 px-2">
              <a href="#0" class="text-blue-300 no-underline hover:underline focus:underline">{{ application.environments['prod'].url }}</a>
            </div>
          </div>

          <div class="px-2">
            <star-toggle :application="application"></star-toggle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationTags from '@/components/Application/ApplicationTags'
import StarToggle from '@/components/Application/StarToggle'

export default {
  components: {
    ApplicationTags,
    StarToggle,
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
