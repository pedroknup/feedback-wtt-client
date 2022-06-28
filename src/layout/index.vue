<template>
  <div id="app">
    <!-- <AppHeader></AppHeader> -->
    <div class="wrapper">
      <transition name="fade">
        <router-view v-if="$currentUser"></router-view>
        <LoginView v-else></LoginView>
      </transition>
    </div>
    <!-- <AppFooter></AppFooter> -->
  </div>
</template>

<script>
import LoginView from '../pages/Login.vue'

export default {
  name: 'AppLayout',
  components: { LoginView },
  mounted () {
    this.$store.dispatch('user/loadCurrentUser')
    this.error = null
  }
}
</script>
