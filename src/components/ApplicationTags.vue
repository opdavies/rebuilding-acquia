<template>
  <div>
    <ul class="list-reset flex flex-wrap -mr-2 -mb-2">
      <li class="text-2xs uppercase py-1 px-2 rounded border border-transparent bg-blue-light text-white mr-2 mb-2">{{ type }}</li>
      <li class="text-2xs uppercase py-1 px-2 rounded border border-grey bg-white mr-2 mb-2">{{ level }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    level: String,
    type: String,
  },
}
</script>
