<template>
  <div
    @click="clickHandler"
    class="wrapper-diet-day-stats"
    :class="{ open, 'is-ios': $isIOS, minimized }"
  >
    <div v-if="$meta && diet" class="macros">
      <span class="macro-bar">
        <MacroBar
          :referenceValue="diet.calories"
          :currentValue="macros.calories"
          name="Calories"
        />
      </span>
      <span class="macro-bar">
        <MacroBar
          :referenceValue="diet.proteins"
          :currentValue="macros.proteins"
          name="Proteins"
        />
      </span>
      <span class="macro-bar">
        <MacroBar
          :referenceValue="diet.carbs"
          :currentValue="macros.carbs"
          name="Carbs"
        />
      </span>
      <span class="macro-bar">
        <MacroBar
          :referenceValue="diet.fat"
          :currentValue="macros.fat"
          name="Fat"
        />
      </span>
    </div>
  </div>
</template>

<script>
import MacroBar from './MacroBar.vue'
import { calculateDayMacros } from '../utils/calculateDayMacros'
export default {
  name: 'DietDayStats',
  components: { MacroBar },
  props: {
    diet: { type: Object, required: true },
    open: { type: Boolean }
  },
  data: function () {
    return {
      minimized: true
    }
  },
  computed: {
    macros () {
      const macro = calculateDayMacros(this.diet)
      return macro
    }
  },
  methods: {
    clickHandler () {
      this.minimized = !this.minimized
    }
  }
}
</script>

<style lang="scss" scoped>
.name-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name {
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
  text-transform: capitalize;
}

.macro-bar {
  width: 100%;
  margin-top: 8px;
}

.measure {
  font-size: 18px;
  font-weight: normal;
  vertical-align: middle;
  margin-left: -2px;
}

.macros {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

.macro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &-title {
    font-size: 12px;
    font-weight: bold;
    color: #828282;
    margin-bottom: 2px;
  }
  &-value {
    .measure {
      margin-left: 0;
    }
  }
}
.wrapper-diet-day-stats {
  padding: 16px;
  position: fixed;
  bottom: 0px;
  height: 210px;
  background: white;
  border: 1px solid #e0e0e0;
  border-bottom: none;
  border-right: none;
  user-select: none;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 10;
  left: 0px;
  right: 0px;
  background-color: #f5f5f5;
  padding-bottom: 250px;
  cursor: pointer;

  &.is-ios {
    padding-bottom: 300px;
  }
  transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
  &.open {
    transform: translateY(0);
    opacity: 1;
    // transition-delay: 0.6s;
  }
  &.minimized {
    transition-delay: 0s;
    transform: translateY(calc(100% - 20px));
    &.is-ios {
      transform: translateY(calc(100% - 74px));
    }
  }
}
</style>
