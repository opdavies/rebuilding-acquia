<template>
  <div class="w-auto lg:w-56 bg-gray-300 text-gray-400 antialiased fixed left-0 h-full overflow-y-scroll z-30">
    <div>
      <ul class="list-reset">
        <li v-for="link in links" :key="link.title">
          <a
            href="#0"
            class="flex items-center no-underline focus:underline px-4 py-2 text-sm"
            :class="{
              'bg-gray-600 text-white hover:text-white': link.active,
              'border-transparent hover:bg-gray-400': !link.active,
              'text-gray-500 cursor-not-allowed': link.disabled,
              'text-gray-600 hover:text-blue-300': !link.disabled && !link.active,
            }"
          >
            <svg class="h-6 w-6 fill-current" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#${link.icon}`"></use></svg>
            <span class="hidden lg:block lg:ml-4">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  }
}
</script>
