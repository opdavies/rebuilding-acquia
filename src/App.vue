<template>
  <div id="app" class="flex flex-col flex-1">
    <router-view class="flex flex-col flex-1"></router-view>
  </div>
</template>

<style lang="sass">
@tailwind preflight
@tailwind components
@tailwind utilities

.btn
  @apply text-sm font-thin antialiased text-white px-4 py-3 no-underline rounded mx-1 bg-blue-dark

  &:hover,
  &:focus
    @apply bg-blue-darker

.btn.is-secondary
  @apply bg-grey-dark

  &:hover,
  &:focus
    @apply bg-grey-darker
</style>
