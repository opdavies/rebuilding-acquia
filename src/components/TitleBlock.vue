<template>
  <div class="bg-grey-lighter px-4 lg:px-6 py-5 border-b-2 border-grey flex justify-between items-center">
    <div class="w-full md:w-auto flex flex-col">
      <slot name="left"></slot>
    </div>

    <slot name="right"></slot>
  </div>
</template>
