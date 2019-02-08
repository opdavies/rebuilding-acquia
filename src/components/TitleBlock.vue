<template>
  <div class="border-b-3 border-grey-light">
    <div class="bg-white px-4 lg:px-6 py-5 border-t border-grey-lighter flex justify-between items-center">
      <div class="w-full md:w-auto flex flex-col">
        <slot name="left"></slot>
      </div>

      <slot name="right"></slot>
    </div>
  </div>
</template>
