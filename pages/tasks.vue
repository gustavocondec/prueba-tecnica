<template>
  <div class="px-10 h-screen  flex flex-col  justify-center items-center">
    <div class="border p-5 flex flex-col  justify-center items-center ">
      <p class="text-3xl">
        LISTA DE TAREAS
      </p>
      <br>
      <form @submit.prevent="addTask">
        <span>Tarea: </span>
        <input v-model="newTaskName" type="text" required class="border">
        <button class="border" type="submit">
          Agregar
        </button>
      </form>
      <div class="border mt-5 w-full">
        <item-task v-for="(task,index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ItemTask from '~/components/tasks/itemTask.vue'

export default Vue.extend({
  name: 'PageTasks',
  components: { ItemTask },
  data () {
    return {
      newTaskName: ''
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks.tasks
    }
  },
  methods: {
    addTask () {
      const newTask = {
        id: new Date().getTime(),
        isActive: false,
        name: this.newTaskName
      }
      this.$store.commit('tasks/addTask', newTask)
      this.newTaskName = ''
    }
  }
})
</script>

<style scoped>

</style>
