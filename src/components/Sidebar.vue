<template>
  <div class="w-auto lg:w-64 bg-grey-darkest text-white antialiased fixed pin-l h-full">
    <div>
      <ul class="list-reset">
        <li v-for="link in links" :key="link.title">
          <a
            href="#0"
            class="flex items-center no-underline hover:underline focus:underline border-l-6 px-4 py-5"
            :class="{
              'border-blue bg-grey-darker': link.active,
              'border-transparent': !link.active,
              'text-grey cursor-not-allowed': link.disabled,
              'text-white': !link.disabled,
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
