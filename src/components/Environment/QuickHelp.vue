<template>
  <div class="bg-white border-t-10 border-purple mb-6" :class="[hidden ? 'hidden' : 'block lg:flex']">
    <div class="flex-none py-3 pl-3 pr-8 border-b lg:border-r border-gray-200">
      <div class="flex items-center">
        <svg class="mr-1 h-6 w-6 text-purple fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#actions__info"></use></svg>
        Quick help
      </div>
    </div>

    <div class="p-4">
      <div class="-mb-5 block leading-normal lg:hidden">
        <div v-for="item in items" :key="item.subject">
          <p class="mb-3 text-sm font-bold">{{ item.subject }}</p>
          <p class="mb-5 text-sm">{{ item.text }}</p>
        </div>
      </div>

      <div class="hidden lg:block">
        <div class="mb-6 w-full lg:w-auto lg:flex">
          <button
            v-for="(item, i) in items"
            :key="item.subject"
            type="button"
            class="hover:underline focus:underline mr-6 focus:outline-none"
            :class="[ i === selected ? 'text-gray-700' : 'text-blue-300' ]"
            @click="selected = i"
          >{{ item.subject }}</button>
        </div>

        <div class="leading-normal">
          <p class="text-sm text-gray-600">
            {{ items[selected].text }}
            <a href="#0" class="text-blue-300 no-underline hover:underline focus:underline">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hidden: Boolean
  },

  data () {
    return {
      selected: 0,
      items: [
        {
          subject: 'Deploying code',
          text: 'Drag a code element from one environment to another environment, which creates a new tag for the HEAD of that branch and then deploys the tag.'
        },
        {
          subject: 'Copying files',
          text: 'Drag a file element from one environment to another environment, which writes new files, overwrites existing files, and ignores files already in place.'
        },
        {
          subject: 'Copying database',
          text: 'Drag a database element from one environment to another environment, which overwrites the target database(s). Dragging database elements with more than one database displays a dialog box that allows you to select the databases to deploy'
        },
        {
          subject: 'Task Log',
          text: 'The Task Log is displayed below your Acquia Cloud environments and contains information on all of the actions taken against your application, including code deployments, configuration updates and environment specific changes.'
        }
      ]
    }
  }
}
</script>
