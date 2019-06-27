<template>
  <div>
    <ul class="list-reset flex flex-wrap -mr-2 -mb-2">
      <li class="tag" :data-type="application.type" v-text="applicationTypeName"/>
      <li class="tag">{{ application.level }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    application: Object
  },

  computed: {
    applicationTypeName () {
      return this.$attrs.types[this.application.type].name
    }
  }
}
</script>

<style scoped>
.tag {
  @apply text-2xs py-1 px-2 rounded uppercase border border-gray-400 bg-white mr-2 mb-2
}

.tag[data-type="drupal"] {
  @apply bg-blue-100 border-blue-100 text-white
}

.tag[data-type="nodejs"] {
  @apply bg-green border-green text-white
}
</style>
