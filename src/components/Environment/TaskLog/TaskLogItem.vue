<template>
  <div>
    <div class="px-3 py-4 border-b border-gray-300 flex" :class="{'bg-yellow-lightest': open}">
      <div class="flex-none mr-3">
        <svg v-if="task.loading" class="h-5 w-5 text-gray-500 fill-current rotates" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__loading"></use></svg>
        <svg v-if="!task.loading && task.success" class="h-5 w-5 text-green fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__success-circle"></use></svg>
        <svg v-if="!task.loading && !task.success" class="h-5 w-5 text-red fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__warning"></use></svg>
      </div>

      <div class="flex-1">
        <div class="text-sm font-bold mb-2">{{ task.text }}</div>
        <div class="text-gray-600 text-2xs">{{ task.times.display }}</div>
      </div>

      <div>
        <button type="button" @click="open = !open">
          <svg v-if="!open" class="h-5 w-5 text-gray-600 fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__chevron"></use></svg>
          <svg v-else class="h-5 w-5 text-gray-600 fill-current" style="transform: rotate(180deg)" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__chevron"></use></svg>
        </button>
      </div>
    </div>

    <div class="p-4 bg-gray-600 text-white antialiased" v-show="open">
      <div class="lg:flex lg:flex-wrap -mx-4 -mb-4">
        <div class="px-4 mb-4">
          <div class="text-xs uppercase mb-1">Task ID</div>
          <div class="text-sm font-bold">12345678</div>
        </div>

        <div class="px-4 mb-4 lg:w-1/6 lg:flex-none">
          <div class="text-xs uppercase mb-1">User</div>
          <div class="text-sm font-bold truncate">{{ task.user }}</div>
        </div>

        <div class="px-4 mb-4 lg:w-1/4 lg:flex-none">
          <div class="text-xs uppercase mb-1">Started</div>
          <div class="text-sm font-bold truncate">{{ task.times.started }}</div>
        </div>

        <div class="px-4 mb-4 lg:w-1/4 lg:flex-none">
          <div class="text-xs uppercase mb-1">Completed</div>
          <div class="text-sm font-bold truncate">{{ task.times.completed }}</div>
        </div>

        <div class="px-4 mb-4">
          <div class="text-xs uppercase mb-1">Status</div>
          <div class="text-sm font-bold">{{ status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },

  data () {
    return {
      open: false
    }
  },

  computed: {
    status: function () {
      if (this.task.loading) {
        return 'In progress'
      }

      if (!this.task.success) {
        return 'Failed'
      }

      return 'Completed'
    }
  }
}
</script>

<style scoped>
.rotates {
  animation: rotation 1s infinite linear
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(-359deg)
  }
}
</style>
