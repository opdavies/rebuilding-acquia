<template>
  <div id="app" class="flex flex-col flex-1">
    <router-view class="flex flex-col flex-1"></router-view>
  </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;

h1,
h2 {
  @apply font-bold
}

h2 {
  @apply text-2xl
}

.btn {
  @apply text-sm font-thin antialiased text-white px-4 py-3 no-underline rounded mx-1 bg-blue-dark;

  &:hover,
  &:focus {
    @apply bg-blue-darker
  }
}

.btn.is-secondary {
  @apply bg-grey-dark;

  &:hover,
  &:focus {
    @apply bg-grey-darker
  }
}

.tag {
  @apply text-2xs uppercase py-1 px-2 rounded border border-grey bg-white mr-2 mb-2
}

.tag.is-type {
  @apply bg-blue-light border-blue-light text-white
}

@tailwind utilities;
</style>
