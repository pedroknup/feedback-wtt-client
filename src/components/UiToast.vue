<template>
  <div class="ui-toast component" :class="classList" @click="remove">
    {{ item.message }}
  </div>
</template>

<script>
export default {
  name: 'UiToast',
  props: {
    item: {
      type: Object
    }
  },

  methods: {
    remove () {
      this.$emit('remove', this.item.id)
    }
  },

  computed: {
    classList () {
      return {
        default: this.item.type === 'default',
        success: this.item.type === 'success',
        info: this.item.type === 'info',
        warning: this.item.type === 'warning',
        error: this.item.type === 'error'
      }
    }
  },

  mounted () {
    if (this.item.duration) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        this.remove()
      }, this.item.duration)
    }
  }
}
</script>

<style lang="scss">
.ui-toast.component {
  cursor: pointer;
  padding: 20px;
  background-color: $color-white;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  max-width: 500px;
  margin: auto;
  margin-bottom: 20px;
  
  &.default {
    border-left: 5px solid $color-line;
  }
  &.success {
    border-left: 5px solid green;
    color: white;
    background-color: rgb(76, 207, 76);
  }
  &.info {
    border-left: 5px solid blue;
  }
  &.warning {
    border-left: 5px solid orange;
  }
  &.error {
    border-left: 5px solid rgb(175, 10, 10);
    color: white;
    background-color: rgb(207, 87, 76);
  }
}
</style>
