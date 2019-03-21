<template>
  <div>
    <ul class="flex flex-wrap md:hidden -mx-1 mb-5">
      <li class="w-1/3 px-1"><button type="button" class="mobile-button" :class="{'is-active': active == 'code'}" @click="active = 'code'">Code</button></li>
      <li class="w-1/3 px-1"><button type="button" class="mobile-button" :class="{'is-active': active == 'databases'}" @click="active = 'databases'">Databases</button></li>
      <li class="w-1/3 px-1"><button type="button" class="mobile-button" :class="{'is-active': active == 'files'}" @click="active = 'files'">Files</button></li>
    </ul>

    <div class="flex flex-wrap -mx-4 -mb-4">
      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'code' ? 'block' : 'hidden' ]">
        <div class="border border-grey-400 rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-400">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-600 text-base mb-1">Code</h2>
                    <div class="text-xs text-grey-600">{{ environment.name }}: {{ environment.label }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__code"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Deploy">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__fork"></use></svg>
                  </action-card-button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Switch">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
                  </action-card-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'databases' ? 'block' : 'hidden' ]">
        <div class="border border-grey-400 rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-400">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-600 text-base mb-1">Databases</h2>
                    <div class="text-xs text-grey-600">{{ environment.name }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__database"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Copy">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                  </action-card-button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Back up">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
                  </action-card-button>
                </li>

                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Restore" :disabled="isProduction" :class="{
                    'text-blue-300': !isProduction,
                    'text-grey-500 cursor-not-allowed': isProduction
                  }">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__restore"></use></svg>
                  </action-card-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 md:block px-4 mb-4" :class="[ active == 'files' ? 'block' : 'hidden' ]">
        <div class="border border-grey-400 rounded shadow bg-white overflow-hidden">
          <div class="border-t-4 border-teal">
            <div class="border-b border-grey-400">
              <div class="px-3 py-4">
                <div class="flex flex-row-reverse">
                  <div class="flex-1">
                    <h2 class="text-grey-600 text-base mb-1">Files</h2>
                    <div class="text-xs text-grey-600">{{ environment.name }}</div>
                  </div>

                  <div class="mr-3">
                    <svg class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__environment"></use></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul class="flex -ml-px">
                <li class="w-1/2 flex-1 text-center border-l border-grey-400">
                  <action-card-button label="Copy">
                    <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
                  </action-card-button>
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
import ActionCardButton from '@/components/Environment/ActionCardButton'

export default {
  components: { ActionCardButton },

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

<style scoped>
.mobile-button {
  @apply text-sm text-white w-full py-3 rounded bg-blue-300
}
.mobile-button.is-active {
  @apply bg-blue-400
}
</style>
