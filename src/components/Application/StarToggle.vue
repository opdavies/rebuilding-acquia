<template>
  <button type="button" @click="starred = !starred" class="focus:outline-none" :class="[starred ? 'text-orange hover:text-orange-light focus:text-orange-light' : 'text-grey focus:text-orange hover:text-orange']">
    <span class="visuallyhidden">{{ !starred ? 'Star' : 'Unstar' }} {{ application.name }}</span>
    <svg class="h-6 w-6 fill-current" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#state__${starred ? 'starred' : 'unstarred'}`"></use></svg>
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
