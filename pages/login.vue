<template>
  <div class="px-10 h-screen  flex flex-col  justify-center items-center">
    <div class="text-3xl">
      Login
    </div>
    <br>
    <form class="block border flex flex-row justify-around items-center p-5 w-full" @submit.prevent="login">
      <div>
        <div class="my-10">
          <p>Usuario</p>
          <input v-model="user" type="text" required class="border block">
        </div>
        <div class="my-10">
          <p>Contraseña</p>
          <input v-model="password" type="password" required class="border block">
        </div>
      </div>
      <button type="submit" class="block h-10 border border p-1">
        Ingresar
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageLogin',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user === 'test01' && this.password === 'test01') {
        this.$store.commit('user/setIsAuthenticated', true)
        this.$router.push('/tasks')
      }
    }
  }
})
</script>

<style scoped>

</style>
