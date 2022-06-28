<template>
  <div>
    <h1>404</h1> {{ currentRoute }}
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    currentRoute () {
      return this.$route.path
    }
  }
}
</script>
