<template>
  <div>
    <ul class="list-reset -ml-2 flex flex-wrap">
      <li class="ml-2 py-1 px-2 text-2xs rounded uppercase border" :class="typeClasses" v-text="applicationTypeName"/>
      <li class="ml-2 py-1 px-2 text-2xs rounded uppercase border border-gray-400 bg-white">{{ application.level }}</li>
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
    },

    typeClasses() {
      return {
        '': 'bg-white border-gray-400',
        drupal: 'bg-blue-100 border-blue-100 text-white',
        nodejs: 'bg-green border-green text-white'
      }[this.application.type]
    }
  }
}
</script>
