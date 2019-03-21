<template>
  <div id="app" class="flex flex-col flex-1">
    <router-view class="flex flex-col flex-1"></router-view>
  </div>
</template>

<style lang="postcss">
@tailwind base;

html {
  line-height: 1.15;
}

@tailwind components;

h1,
h2 {
  @apply font-bold
}

h2 {
  @apply text-2xl
}

.btn {
  @apply text-sm font-thin antialiased text-white px-4 py-3 no-underline rounded mx-1 bg-blue-300;

  &:hover,
  &:focus {
    @apply bg-blue-400
  }
}

.btn.is-secondary {
  @apply bg-grey-500;

  &:hover,
  &:focus {
    @apply bg-grey-600
  }
}

.tag {
  @apply text-2xs uppercase py-1 px-2 rounded border border-grey-400 bg-white mr-2 mb-2
}

.tag.is-type {
  @apply bg-blue-100 border-blue-100 text-white
}

@tailwind utilities;
</style>
