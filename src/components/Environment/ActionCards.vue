<template>
  <div>
    <ul class="list-reset flex flex-wrap md:hidden -mx-1 mb-5">
      <li class="w-1/3 px-1"><button type="button" class="text-sm text-white w-full py-3" :class="[active == 'code' ? 'bg-blue-darker' : 'bg-blue-dark']" @click="active = 'code'">Code</button></li>
      <li class="w-1/3 px-1"><button type="button" class="text-sm text-white w-full py-3" :class="[active == 'databases' ? 'bg-blue-darker' : 'bg-blue-dark']" @click="active = 'databases'">Databases</button></li>
      <li class="w-1/3 px-1"><button type="button" class="text-sm text-white w-full py-3" :class="[active == 'files' ? 'bg-blue-darker' : 'bg-blue-dark']" @click="active = 'files'">Files</button></li>
    </ul>

    <div class="flex flex-wrap -mx-4 -mb-4">
      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'code' ? 'block' : 'hidden' ]">
        <div class="border border-grey rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-dark">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-darker text-base mb-1">Code</h2>
                    <div class="text-xs text-grey-darker">{{ environment.name }}: {{ environment.label }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__code"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="list-reset flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__fork"></use></svg>
                    <span class="block">Deploy</span>
                  </button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
                    <span class="block">Switch</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'databases' ? 'block' : 'hidden' ]">
        <div class="border border-grey rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-dark">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-darker text-base mb-1">Databases</h2>
                    <div class="text-xs text-grey-darker">{{ environment.name }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__database"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="list-reset flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                    <span class="block">Copy</span>
                  </button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
                    <span class="block">Back up</span>
                  </button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button
                    type="button"
                    class="w-full py-3 text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block"
                    :class="{
                      'text-blue-dark': !isProduction,
                      'text-grey-dark cursor-not-allowed': isProduction
                    }"
                    :disabled="isProduction"
                  >
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__restore"></use></svg>
                    <span class="block">Restore</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'files' ? 'block' : 'hidden' ]">
        <div class="border border-grey rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-dark">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-darker text-base mb-1">Files</h2>
                    <div class="text-xs text-grey-darker">{{ environment.name }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__environment"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="list-reset flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-dark">
                  <button type="button" class="w-full py-3 text-blue-dark text-xs font-bold no-underline hover:underline focus:underline hover:bg-grey-lighter focus:bg-grey-lighter focus:outline-none block">
                    <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                    <span class="block">Copy</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    environment: Object,
    isProduction: Boolean
  },

  data() {
    return {
      active: 'code',
    }
  },
}
</script>
