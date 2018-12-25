<template>
  <div class="hidden md:block">
    <ul class="list-reset flex">
      <li v-for="(link, i) in links" :key="link.title" :class="{'ml-6': i !== 0}">
        <button
          type="button"
          class="text-xs no-underline hover:underline flex flex-col items-center justify-center"
          :class="{
            'text-grey cursor-not-allowed': link.disabled,
            'text-blue-dark': !link.disabled,
          }"
          :disabled="link.disabled"
        >
          <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use :xlink:href="`/img/icons.symbol.svg#${link.icon}`"></use></svg>
          {{ link.title }}
        </button>
      </li>

      <!-- <li class="ml-6">
        <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
          <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__info"></use></svg>
          Git Info
        </button>
      </li>

      <li class="ml-6">
        <button type="button" class="text-xs text-grey-dark no-underline flex flex-col items-center justify-center cursor-not-allowed" disabled>
          <svg class="h-6 w-6 fill-current text-grey-dark mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__edit"></use></svg>
          Rename
        </button>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
}
</script>
