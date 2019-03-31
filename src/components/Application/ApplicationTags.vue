<template>
  <div>
    <ul class="list-reset flex flex-wrap -mr-2 -mb-2">
      <li class="tag" :data-type="type.id">{{ type.name }}</li>
      <li class="tag">{{ level }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    level: String,
    type: Object
  }
}
</script>

<style scoped>
.tag {
  @apply text-2xs py-1 px-2 rounded uppercase border border-grey-400 bg-white mr-2 mb-2
}

.tag[data-type="drupal"] {
  @apply bg-blue-100 border-blue-100 text-white
}

.tag[data-type="nodejs"] {
  @apply bg-green border-green text-white
}
</style>
