export default {
  computed: {
    $currentUser () {
      return this.$store.state.user.currentUser
    },
    $isLoadingUser () {
      return this.$store.state.user.isLoading
    },
    $loginError () {
      return this.$store.state.user.loginError
    }
  }
}
