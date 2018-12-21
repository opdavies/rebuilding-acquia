<template>
  <div id="app">
    <environments></environments>
  </div>
</template>

<script>
import Environments from './components/Environments.vue'

export default {
  name: 'app',
  components: {
    Environments
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
