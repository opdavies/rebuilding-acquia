<template>
  <div id="app" class="min-h-screen antialiased bg-gray-200 font-sans flex flex-col flex-1">
    <div class="flex flex-col flex-1">
      <router-view :applications="applications" :types="types" class="flex flex-col flex-1"/>
    </div>
  </div>
</template>

<style src="./assets/css/tailwind.css"/>

<script>
import { applications, types } from '@/data'

export default {
  data () {
    return {
      applications,
      types
    }
  }
}
</script>
