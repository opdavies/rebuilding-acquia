<template>
  <div class="mb-6">
    <div class="flex flex-wrap -mx-4 -mb-6">
      <div v-for="(environment, key) in environments" class="w-full md:w-1/2 xl:w-1/3 px-4 mb-6" :key="key">
        <div class="border border-grey-400 rounded overflow-hidden shadow">
           <div class="bg-white">
            <div class="border-t-4 border-teal p-3">
              <router-link :to="{ name: 'environment', params: { environmentName: key, id: id }}" class="flex items-baseline no-underline hover:underline focus:underline text-grey-600 hover:text-blue-300 focus:text-blue-300 focus:outline-none mb-1">
                <h2>{{ environment.name }}</h2>
                <svg class="w-4 h-4 fill-current text-inherit ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/></svg>
              </router-link>

              <div class="mb-2">
                <a href="#0" class="no-underline hover:underline focus:underline text-grey-600 hover:text-blue-300 focus:text-blue-300 focus:outline-none">
                  {{ environment.url }}
                </a>
              </div>

              <div class="text-grey-600">{{ environment.label }}</div>
            </div>
          </div>

          <div>
            <button type="button" class="card-button py-1">
              <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              <span class="flex-1">Code</span>
              <span class="border-l border-grey-400 p-2">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
              </span>
            </button>

            <button type="button" class="card-button py-1 border-t border-grey-400">
              <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              <span class="flex-1">Databases</span>
              <span class="border-l border-grey-400 p-2">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
              </span>
            </button>

            <button type="button" class="card-button border-t border-grey-400 py-3 block">
              <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              <span class="flex-1">Files</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    environments: Object,
    id: String
  }
}
</script>

<style type="postcss" scoped>
.card-button {
  @apply flex items-center justify-between text-white pl-1 bg-blue-200 text-sm w-full text-left;

  &:hover {
    @apply bg-blue-400
  }

  &:focus {
    @apply bg-blue-400 outline-none underline
  }
}

.card-button > svg {
  @apply h-6 w-5 text-white mr-2 fill-current
}

.card-button span svg {
  @apply h-6 w-6 text-white fill-current
}
</style>
