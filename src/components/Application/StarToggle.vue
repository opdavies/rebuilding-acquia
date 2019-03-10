<template>
  <button type="button" @click="starred = !starred" class="focus:outline-none" :class="[starred ? 'text-orange-1 hover:text-orange-2 focus:text-orange-2' : 'text-grey-4 focus:text-orange-2 hover:text-orange-1']">
    <span class="visuallyhidden">{{ !starred ? 'Star' : 'Unstar' }} {{ application.name }}</span>
    <svg class="h-6 w-6 fill-current -mr-1" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#state__${starred ? 'starred' : 'unstarred'}`"></use></svg>
  </button>
</template>

<script>
export default {
  props: {
    application: Object,
  },

  data() {
    return {
      starred: false
    }
  },
}
</script>
