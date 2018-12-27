<template>
  <div class="mb-6">
    <div class="flex flex-wrap -mx-4 -mb-6">
      <div v-for="(environment, key) in environments" class="w-full md:w-1/2 xl:w-1/3 px-4 mb-6" :key="key">
        <div class="border border-grey rounded overflow-hidden">
           <div class="bg-white">
            <div class="border-t-4 border-teal p-3">
              <router-link :to="{ name: 'environment', params: { environmentName: key, id: id }}" class="flex items-baseline no-underline hover:underline focus:underline text-grey-darkest hover:text-blue-dark focus:text-blue-dark focus:outline-none">
                <h2 class="mb-1">{{ environment.name }}</h2>
                <svg class="w-4 h-4 fill-current text-inherit ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/></svg>
              </router-link>

              <div class="text-grey-darker mb-2">
                <a href="#0" class="no-underline hover:underline focus:underline text-grey-darkest hover:text-blue-dark focus:text-blue-dark focus:outline-none">
                  {{ environment.url }}
                </a>
              </div>

              <div class="text-grey-darker">{{ environment.label }}</div>
            </div>
          </div>

          <div>
            <button type="button" class="flex items-center justify-between text-white pl-1 bg-blue-light hover:bg-blue-dark focus:bg-blue-dark focus:outline-none focus:underline text-sm w-full text-left">
              <svg class="h-6 w-5 text-white mr-2 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              <span class="flex-1">Code</span>
              <span class="border-l border-grey p-2">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
              </span>
            </button>

            <button type="button" class="flex items-center justify-between text-white pl-1 bg-blue-light hover:bg-blue-dark focus:bg-blue-dark focus:outline-none focus:underline text-sm w-full text-left border-t border-grey">
              <svg class="h-6 w-5 text-white mr-2 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              <span class="flex-1">Databases</span>
              <span class="border-l border-grey p-2">
                <svg class="h-6 w-6 text-white fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
              </span>
            </button>

            <button type="button" class="flex items-center text-white bg-blue-light hover:bg-blue-dark focus:bg-blue-dark focus:outline-none focus:underline px-1 py-3 text-sm w-full text-left border-t border-grey">
              <svg class="h-6 w-5 text-white mr-2 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__grip-handle"></use></svg>
              Files
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
    id: String,
  },
}
</script>
