<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>
    <div class="title-wrapper">
      <div class="title">
        <span class="avocado">Avocado</span>
        <span> FTW</span>
      </div>
      <div class="subtitle">Clearly another meal planner app</div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'Logo',
  computed: {
    logo () {
      return logo
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
}
div.logo img {
  width: 100px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: rgb(69, 69, 69);
  .avocado {
    color: #ffa500;
  }
  &-wrapper {
    margin-left: 24px;
  }
}
.subtitle {
  font-size: 14px;
  margin-top: 4px;
  color: #999;
}
</style>
