<template>
  <div class="hidden lg:block">
    <ul class="list-reset flex">
      <li v-for="(link, i) in links" :key="link.title" :class="{ 'ml-6': i !== 0 }">
        <button
          type="button"
          class="text-xs no-underline hover:underline flex flex-col items-center justify-center"
          :class="{
            'text-gray-400 cursor-not-allowed': link.disabled,
            'text-blue-300': !link.disabled,
          }"
          :disabled="link.disabled"
        >
          <svg class="mb-2 h-6 w-6 fill-current" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#${link.icon}`"></use></svg>
          {{ link.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { omitBy, _ } from 'lodash'

export default {
  props: {
    links: Array
  },

  computed: {
    filteredLinks: function () {
      let links = this.links

      return omitBy(links, _.isEmpty)
    }
  }
}
</script>
