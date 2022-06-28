<template>
  <div ref="wrapper" class="wrapper-wp">
    <div class="pointer" v-if="isCurrentDay"></div>
    <div
      @click="onClickHandler"
      class="diet-plan-box"
      :class="{ borderless: !border, expanded: isExpanded, done, selected }"
    >
      <template v-if="!showDetails">
        <div class="name-wrapper">
          <UiBaseIcon v-if="done" class="ok" width="14px" iconName="done" />
          <span class="name" :class="{ 'tall-line': meal.quantity !== 1 }">
            <span v-if="quantity !== null && selected" class="quantity float">
              {{ quantity }}
            </span>
            <span v-if="meal.quantity !== 1" class="quantity">
              {{ meal.quantity }} </span
            >{{ meal.name }}</span
          >
        </div>
        <div class="macros">
          <span class="calories">
            {{ calculatedMacrosByQuantity.calories }}
            <span class="measure"> kcal</span>
          </span>
          <div class="macros-wrapper">
            <div class="macro">
              <span v-if="showMacros" class="macro-title">Proteins</span>
              <span class="macro-value"
                >{{ calculatedMacrosByQuantity.proteins }}
              </span>
            </div>
            <div class="macro">
              <span v-if="showMacros" class="macro-title">Carbs</span>
              <span class="macro-value"
                >{{ calculatedMacrosByQuantity.carbs }}
              </span>
            </div>
            <div class="macro">
              <span v-if="showMacros" class="macro-title">Fats</span>
              <span class="macro-value"
                >{{ calculatedMacrosByQuantity.fat }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <div class="notes" v-else>
        <span >{{ meal.notes }}</span>
      </div>
      <div class="background" ref="background"></div>
    </div>
    <div v-if="isExpanded">
      <DayPlan />
    </div>
  </div>
</template>

<script>
import DayPlan from './DayPlan.vue'
import UiBaseIcon from '../components/icons/UiBaseIcon'
export default {
  name: 'MealBox',

  props: {
    meal: { type: Object, required: true },
    border: { type: Boolean },
    done: { type: Boolean },
    selected: { type: Boolean },
    showMacros: { type: Boolean },
    showDetails: { type: Boolean, default: false },
    quantity: { type: Number, default: null }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  components: {
    DayPlan,
    UiBaseIcon
  },
  methods: {
    expand () {
      this.isExpanded = true
    },
    markAsDone () {
      this.$store.dispatch('weekPlan/finishMeal', this.meal.id)
    },
    markAsUndone () {
      this.$store.dispatch('weekPlan/removeFinishedMeal', this.meal.id)
    },
    onClickHandler () {
      this.$emit('click', this.meal.id)
    }
  },

  computed: {
    calculatedMacrosByQuantity () {
      return {
        calories:
          this.meal.calories *
          (this.quantity !== null ? this.quantity : this.meal.quantity),
        proteins:
          this.meal.proteins *
          (this.quantity !== null ? this.quantity : this.meal.quantity),
        carbs:
          this.meal.carbs *
          (this.quantity !== null ? this.quantity : this.meal.quantity),
        fat:
          this.meal.fat *
          (this.quantity !== null ? this.quantity : this.meal.quantity)
      }
    },
    isCurrentDay () {
      const today = new Date()
      const day = today.getDay()
      const dayNames = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ]
      return dayNames[day] === this.name
    },
    labelId () {
      return `inputId${this.getRandomInt()}`
    },
    listeners () {
      return {
        ...this.$listeners,
        change: (event) => this.$emit('change', event.target.checked)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-wp {
  position: relative;
  &.done {
    border: 1px solid red;
  }
}
.background {
  position: absolute;
  left: 0;
  top: -8px;
  bottom: -8px;
  width: 100%;
  z-index: 0;
}
.quantity {
  background-color: white;
  padding: 2px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 4px;
  padding-left: 5px;
  margin-bottom: 4px;

  &.float {
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
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
    text-align: center;
    width: 20px;
    .measure {
      margin-left: 0;
    }
  }
}

.name {
  font-size: 12px;
  font-weight: normal;
  vertical-align: middle;
  margin-left: 10px;
  text-transform: capitalize;
  transition: font-size 0.2s ease-in-out;
  max-width: 150px;

  z-index: 1;
  user-select: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &.tall-line {
    line-height: 18px;
  }
}

.macros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: width 0.2s ease-in-out;
  transition-delay: 0.5s;
  font-size: 18px;
  z-index: 1;
  &-wrapper {
    width: 100px;
    margin-left: 12px;
    display: flex;
    justify-content: space-between;
    margin-right: -5px;
  }
}
.calories {
  margin-left: 5px;
}
.diet-plan-box {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;

  &.done {
    color: grey;
    .name {
      text-decoration: line-through;
    }
  }

  &.borderless {
    border: none;
  }

  &.expanded {
    .name {
      font-size: 22px;
    }

    .macros {
      opacity: 0;
    }
  }

  &.selected {
    > .background {
      background-color: #ffa000;

      .macro-title {
        color: rgb(62, 62, 62);
      }
    }
  }
}

.name-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.measure {
  font-size: 10px;
  font-weight: normal;
}

.notes {
  height: 32px;
  margin-left: 138px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center
}
</style>
