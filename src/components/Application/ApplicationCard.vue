<template>
  <div>
    <div v-if="display == 'grid'" class="bg-white p-4 border-gray-400 rounded-sm border flex-1 shadow">
      <div class="flex h-full">
        <div class="flex-1 w-5/6 flex flex-col justify-between">
          <div>
            <div>
              <router-link :to="{name: 'environments', params: {id: id}}" class="text-blue-300 no-underline hover:underline focus:underline focus:outline-none"><h2 class="mb-1">{{ application.name }}</h2></router-link>
            </div>

            <div class="truncate text-blue-300">
              <a href="#0" class="text-inherit no-underline hover:underline focus:underline focus:outline-none" v-text="prodUrl"/>
            </div>
          </div>

          <php-version class="mt-8" :application="application"></php-version>
        </div>

        <div class="w-1/6 flex-none text-right">
          <star-toggle :application="application" :starred="starred" @toggle="starred = !starred"></star-toggle>
        </div>
      </div>
    </div>

    <div v-if="display == 'list'" class="p-3 bg-white border-gray-400 border-b">
      <div class="-mx-2">
        <div class="flex flex-row-reverse items-center justify-between">
          <div class="-mx-2 flex flex-1 justify-between items-center">
            <div class="px-2 flex-1">
              <router-link :to="{name: 'environments', params: { id }}" class="text-blue-300 no-underline hover:underline focus:underline">
                <h2 class="mb-1 text-base font-normal">{{ application.name }}</h2>
              </router-link>
            </div>

            <div class="px-2 w-2/5">
              <a href="#0" class="text-blue-300 no-underline hover:underline focus:underline" v-text="prodUrl"/>
            </div>

            <div class="px-1 w-1/5">
              <php-version :application="application"/>
            </div>
          </div>

          <div class="px-2">
            <star-toggle :application="application" :starred="starred" @toggle="starred = !starred"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhpVersion from '@/components/Application/PhpVersion'
import StarToggle from '@/components/Application/StarToggle'

export default {
  components: { PhpVersion, StarToggle },

  props: {
    application: Object,
    display: String,
    id: String
  },

  data () {
    return {
      starred: false
    }
  },

  computed: {
    prodUrl () {
      return this.application.environments['prod'].url
    }
  }
}
</script>
