<template>
  <div>
    <div class="bg-grey-light pb-4 pt-6 px-4">
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
import _ from 'lodash'
import TaskLogItem from '@/components/Environment/TaskLog/TaskLogItem'

export default {
  components: {
    TaskLogItem,
  },

  props: {
    tasks: Array,
  },

  computed: {
    reversedTasks: function () {
      let tasks = this.tasks

      return _.reverse(tasks)
    }
  }
}
</script>
