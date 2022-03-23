<template>
  <div class="w-full">
    <input v-model="localIsActive" type="checkbox">
    <span>{{ task.name }}</span>
    <button v-show="!task.isActive" class="border rounded p-0.5 bg-red-700 font-light" @click="removeTask">
      x
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ITask } from '~/store/tasks'
export default Vue.extend({
  name: 'ItemTask',
  props: {
    task: {
      type: Object as ()=>ITask,
      required: true
    }
  },
  data () {
    return {
      localIsActive: this.task.isActive
    }
  },
  watch: {
    localIsActive: {
      immediate: false,
      handler (newVal) {
        this.changeIsActive(newVal)
      }
    }
  },
  methods: {
    removeTask () {
      this.$store.commit('tasks/removeTask', this.task.id)
    },
    changeIsActive (newVal:boolean) {
      this.$store.commit('tasks/setIsActiveToTask', { id: this.task.id, isActive: newVal })
    }
  }
})
</script>

<style scoped>

</style>
