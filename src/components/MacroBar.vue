<template>
  <div class="wrapper">
    <div class="name">
      {{ name }}
    </div>
    <div class="macro-progress-bar">
      <div class="macro-progress-bar-wrapper">
        <div
          class="macro-progress-bar-inner"
          :style="{ width: percentage + '%', backgroundColor: color }"
        ></div>
        <div
          class="macro-progress-bar-inner extra"
          :style="{ width: extraPercentage + '%' }"
        ></div>
      </div>
    </div>
    <span class="subtitle">
     <span class="current-value" :class="{extra: extraPercentage > 0}"> {{ currentValue }}</span> / {{ $meta[name.toLowerCase()] }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'MacroBar',
  props: {
    name: { type: String },
    referenceValue: { type: Number },
    currentValue: { type: Number }
    
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    color () {
      const yellowGoogle = '#ffc107'
      const greenGoogle = '#4caf50'
      const blueGoogle = '#2196f3'
      const purpleGoodle = '#673ab7'
      const colorByMacro = {
        calories: purpleGoodle,
        protein: yellowGoogle,
        carbs: blueGoogle,
        fat: greenGoogle
      }
      return colorByMacro[this.name.toLowerCase()]
    },
    percentage: function () {
      return this.currentValue / this.$meta[this.name.toLowerCase()] * 100
    },
    extraPercentage: function () {
      const referenceValue = this.$meta[this.name.toLowerCase()]
      if (this.currentValue > referenceValue) {
        return (this.currentValue - referenceValue) / referenceValue * 100
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.name{
  margin-bottom: 4px;
  font-size: 18px;
}
.subtitle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -4px;
  font-size: 12px;
}
.macro-progress-bar {
  width: 100%;
  min-height: 4px;
  background-color: #e6e6e6;
  border-radius: 2px;
  margin-bottom: 10px;
  position: relative;
}
.macro-progress-bar-wrapper {
  width: 100%;
  height: 4px;
  display: flex;
  justify-content: flex;
  align-items: center;
  overflow: hidden;
}
.macro-progress-bar-inner {
  width: 0;
  height: 100%;
  max-width: 100%;
  background-color: #ffa000;
  border-radius: 2px;
  transition: width 0.2s ease-in-out;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  &.extra {
    z-index: 11;
    background-color: red;
  }
}
.current-value{
  width: 100px;
  display: contents;

  &.extra{
    color: red;
  }
}
</style>
