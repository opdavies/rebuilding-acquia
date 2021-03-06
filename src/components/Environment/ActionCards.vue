<template>
  <div>
    <ul class="flex flex-wrap md:hidden -mx-1 mb-5">
      <li class="px-1 w-1/3"><button type="button" class="py-3 w-full text-sm text-white rounded" :class="[ active == 'code' ? 'bg-blue-400' : 'bg-blue-300' ]" @click="active = 'code'">Code</button></li>
      <li class="px-1 w-1/3"><button type="button" class="py-3 w-full text-sm text-white rounded" :class="[ active == 'databases' ? 'bg-blue-400' : 'bg-blue-300' ]" @click="active = 'databases'">Databases</button></li>
      <li class="px-1 w-1/3"><button type="button" class="py-3 w-full text-sm text-white rounded" :class="[ active == 'files' ? 'bg-blue-400' : 'bg-blue-300' ]" @click="active = 'files'">Files</button></li>
    </ul>

    <div class="-mx-4 flex flex-wrap">
      <div class="px-4 w-full md:w-1/3 md:block" :class="[ active == 'code' ? 'block' : 'hidden' ]">
        <action-card title="Code" :description="`${ environment.name }: ${environment.label}`">
          <svg slot="icon" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__code"></use></svg>

          <ul slot="buttons" class="-ml-px flex">
            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Deploy">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__fork"></use></svg>
              </action-card-button>
            </li>

            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Switch">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__switch"></use></svg>
              </action-card-button>
            </li>
          </ul>
        </action-card>
      </div>

      <div class="px-4 w-full md:block md:w-1/3" :class="[ active == 'databases' ? 'block' : 'hidden' ]">
        <action-card title="Databases" :description="environment.name">
          <svg slot="icon" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__database"></use></svg>

          <ul slot="buttons" class="-ml-px flex">
            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Copy">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
              </action-card-button>
            </li>

            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Back up">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__backup"></use></svg>
              </action-card-button>
            </li>

            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Restore" :disabled="isProduction" :class="{
                'text-blue-300': !isProduction,
                'text-gray-500 cursor-not-allowed': isProduction
              }">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__restore"></use></svg>
              </action-card-button>
            </li>
          </ul>
        </action-card>
      </div>

      <div class="px-4 w-full md:block md:w-1/3" :class="[ active == 'files' ? 'block' : 'hidden' ]">
        <action-card title="Files" :description="environment.name">
          <svg slot="icon" class="h-8 w-8 fill-current text-teal" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__environment"></use></svg>

          <ul slot="buttons" class="-ml-px flex">
            <li class="w-1/2 flex-1 text-center border-l border-gray-400">
              <action-card-button label="Copy">
                <svg role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__copy"></use></svg>
              </action-card-button>
            </li>
          </ul>
        </action-card>
      </div>
    </div>
  </div>
</template>

<script>
import ActionCard from '@/components/Environment/ActionCard'
import ActionCardButton from '@/components/Environment/ActionCardButton'

export default {
  components: {
    ActionCard,
    ActionCardButton
  },

  props: {
    environment: Object,
    isProduction: Boolean
  },

  data () {
    return {
      active: 'code'
    }
  }
}
</script>
