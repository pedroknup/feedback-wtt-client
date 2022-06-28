<template>
  <div class="online-badge" :class="{ offline: !$isOnline }">
    {{ $isOnline ? "Online" : "Offline" }}
  </div>
</template>

<script>
export default {
  name: 'OnlineBadge'
}
</script>

<style lang="scss" scoped>
.online-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: green;
  font-family: 'Roboto', sans-serif;
  z-index: 100;
  &.offline {
    color: red;
  }
}

.pulsing-dot {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  animation: pulsing-dot 1.2s ease-in-out infinite;
}

</style>
