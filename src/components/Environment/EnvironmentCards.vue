<template>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <div v-for="(environment, key) in application.environments" :key="key">
      <div class="border border-gray-400 rounded overflow-hidden shadow">
         <div class="bg-white">
          <div class="border-t-4 border-teal p-3">
            <router-link :to="{ name: 'environment', params: { environmentName: key, id: id }}" class="flex items-baseline no-underline hover:underline focus:underline text-gray-600 hover:text-blue-300 focus:text-blue-300 focus:outline-none mb-1">
              <h2>{{ environment.name }}</h2>
              <svg class="w-4 h-4 fill-current text-inherit ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/></svg>
            </router-link>

            <div class="mb-2">
              <a href="#0" class="no-underline hover:underline focus:underline text-gray-600 hover:text-blue-300 focus:text-blue-300 focus:outline-none">
                {{ environment.url }}
              </a>
            </div>

            <div class="text-gray-600">{{ environment.label }}</div>
          </div>
        </div>

        <div>
          <button type="button" class="flex items-center justify-between text-white pl-1 bg-blue-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:underline text-sm w-full text-left py-1">
            <svg class="h-6 w-5 text-white mr-2 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
            <span class="flex-1">Code</span>
            <span class="border-l border-gray-400 p-2">
              <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
            </span>
          </button>

          <button type="button" class="flex items-center justify-between text-white pl-1 bg-blue-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:underline text-sm w-full text-left py-1 border-t border-gray-400">
            <svg class="h-6 w-5 text-white mr-2 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
            <span class="flex-1">Databases</span>
            <span class="border-l border-gray-400 p-2">
              <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
            </span>
          </button>

          <button type="button" class="px-1 py-3 w-full flex items-center text-white bg-blue-200 text-sm text-left border-t border-gray-400 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:underline">
            <svg class="mr-2 h-6 w-5 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
            Files
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    application: Object,
    id: String
  }
}
</script>
