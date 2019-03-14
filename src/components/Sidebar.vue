<template>
  <div class="w-auto lg:w-56 bg-grey-light text-grey-darker antialiased fixed pin-l h-full overflow-y-scroll z-30 -mt-2px">
    <div>
      <ul class="list-reset">
        <li v-for="link in links" :key="link.title">
          <a
            href="#0"
            class="flex items-center no-underline focus:underline px-4 py-2 text-sm"
            :class="{
              'bg-grey-darker text-white hover:text-white': link.active,
              'border-transparent hover:bg-grey': !link.active,
              'text-grey-dark cursor-not-allowed hover:text-grey-dark_': link.disabled,
              'text-grey-darker hover:text-blue-dark': !link.disabled && !link.active,
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
    links: Array,
  },
}
</script>
