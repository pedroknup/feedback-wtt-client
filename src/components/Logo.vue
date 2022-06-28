<template>
  <header>
    <img :src="logo" alt="logo" />
    <div class="title-wrapper">
      <h1>
        <span>Avocado</span>
        <span>FTW</span>
      </h1>
      <span>Clearly another meal planner app</span>
    </div>
  </header>
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
header {
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: center;
}

img {
  width: 100px;
}

.title-wrapper {
  h1 {
    margin-bottom: 4px;

    span {
      font-size: 30px;
      font-weight: bold;
      color: rgb(69, 69, 69);

      &:first-child {
        color: #ffa500;
        margin-right: 6px;
      }
    }
  }
  
  span {
    font-size: 14px;
    margin-top: 4px;
    color: #999;
  }
}
</style>
