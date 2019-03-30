<template>
  <div>
    <ul class="list-reset flex flex-wrap -mr-2 -mb-2">
      <li class="tag is-type">{{ type }}</li>
      <li class="tag">{{ level }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    level: String,
    type: String
  }
}
</script>
