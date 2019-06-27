<template>
  <div>
    <div class="pb-4 pt-6 px-4 bg-gray-300">
      <h2 class="font-normal text-lg">Task Log</h2>
    </div>
    <div>
      <ul class="list-reset bg-white">
        <li v-for="task in reversedTasks" :key="task.text">
          <task-log-item :task="task"></task-log-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import reverse from 'lodash/reverse'
import TaskLogItem from '@/components/Environment/TaskLog/TaskLogItem'

export default {
  components: {
    TaskLogItem
  },

  props: {
    tasks: Array
  },

  computed: {
    reversedTasks: function () {
      let tasks = this.tasks

      return reverse(tasks)
    }
  }
}
</script>
