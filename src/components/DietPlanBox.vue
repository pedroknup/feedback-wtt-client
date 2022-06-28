<template>
  <div class="outer-wrapper">
    <div
      class="pointer"
      :class="{ expanded: isExpanded, hovered: isHovered }"
      v-if="isCurrentDay"
    ></div>
    <div ref="wrapper" class="diet-plan-box-wrapper">
      <div
        @click="onClickHandler"
        class="diet-plan-box"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :class="{ expanded: isExpanded, 'adding-meal': isAddingMeal }"
      >
        <div class="name-wrapper">
          <span>{{ name }}</span>
        </div>
        <div class="macros">
          <span class="calories">
            {{ caloriesProgress > 0 ? caloriesProgress : ""
            }}{{ caloriesProgress > 0 ? "/" : "" }}{{ calories }}
            <span class="measure"> kcal</span>
          </span>
          <div v-if="showProteins" class="macro">
            <span class="macro-title">Proteins (g)</span>
            <span class="macro-value">{{ proteins }} </span>
          </div>
          <div v-if="showCarbs" class="macro">
            <span class="macro-title">Carb (g)</span>
            <span class="macro-value">{{ carbs }} </span>
          </div>
          <div v-if="showFats" class="macro">
            <span class="macro-title">Fats (g)</span>
            <span class="macro-value">{{ fats }} </span>
          </div>
        </div>
      </div>
      <template v-if="isExpanded">
        <DayPlan @isAddingMeal="isAddingMealHandler" :name="name" />
      </template>
      <div
        @click="onClickHandler"
        class="progress-background extra"
        :class="{ open: isExpanded, 'adding-meal': isAddingMeal }"
        :style="`width: ${progress > 100 ? progress - 100 : 0}%`"
      >
        <div class="extra-gradient"></div>
      </div>
      <div
        @click="onClickHandler"
        class="progress-background"
        :class="{ open: isExpanded, 'adding-meal': isAddingMeal }"
        :style="`width: ${progress}%`"
      >
        <div
          :style="`transform: translateX(-${
            (progress > 100 ? 100 : progress) * 10
          }px)`"
          class="gradient"
        ></div>
      </div>
    </div>
    <div
      class="background"
      :class="{ expanded: isExpanded, hovered: isHovered }"
      ref="background"
    ></div>
  </div>
</template>

<script>
import gsap from 'gsap'
import DayPlan from './DayPlan.vue'
export default {
  name: 'DietPlanBox',

  props: {
    name: { type: String, required: true },
    calories: { type: Number },
    caloriesProgress: { type: Number },
    proteins: { type: Number },
    fats: { type: Number },
    carbs: { type: Number },
    notes: { type: String },
    showProteins: { type: Boolean },
    showCarbs: { type: Boolean },
    showFats: { type: Boolean }
  },
  data () {
    return {
      isExpanded: false,
      isAddingMeal: false,
      isHovered: false
    }
  },
  components: {
    DayPlan
  },
  watch: {
    isExpanded (isExpanded) {
      this.$emit('expand', isExpanded)
    }
  },
  methods: {
    expand () {
      this.isExpanded = true
      const wrapperTop = this.$refs.wrapper.getBoundingClientRect().top
      gsap.fromTo(
        this.$refs.wrapper,
        {
          opacity: 1,
          zIndex: 11,
          maxHeight: '64px',
          translateY: 0
        },
        {
          translateY: -wrapperTop,
          // scaleY: 10,
          duration: 0.5,
          maxHeight: '100vh',
          padding: 0,
          ease: 'power2.inOut'
        }
      )
      gsap.fromTo(
        this.$refs.background,
        {
          scale: 1,
          opacity: 1,
          zIndex: 10,
          translateY: 0
        },
        {
          scale: 100,
          duration: 1.2,
          padding: 0,

          ease: 'power2.inOut'
        }
      )
    },
    collapse () {
      gsap.to(this.$refs.wrapper, {
        translateY: 0,
        duration: 0.5,
        maxHeight: '78px',
        padding: 0,
        ease: 'power2.inOut',
        zIndex: 4
      })
      gsap.to(this.$refs.background, {
        scale: 1,
        duration: 0.5,
        padding: 0,
        zIndex: 2,
        ease: 'power2.inOut'
      })
      setTimeout(() => {
        this.isExpanded = false
      }, 500)
    },
    getRandomInt () {
      const min = 1
      const max = 1000000000
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    onClickHandler () {
      if (!this.type) {
        this.isExpanded ? this.collapse() : this.expand()
      }
    },
    isAddingMealHandler (isAddingMeal) {
      this.isAddingMeal = isAddingMeal
    }
  },

  mounted () {
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
    return dayNames[day] === this.name.toLowerCase()
  },

  computed: {
    progress () {
      return this.$weekProgress[this.name.toLowerCase()]
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
.outer-wrapper {
  position: relative;
}
.diet-plan-box-wrapper {
  position: relative;
  overflow: hidden;
}
.progress-background {
  background: linear-gradient(
    to right,
    rgba(255, 193, 7, 0.5),
    rgba(255, 193, 7, 0.5)
  );
  position: absolute;
  top: 8px;
  left: 10px;
  right: 10px;
  bottom: 8px;
  max-width: calc(100% - 20px);
  z-index: 2;
  border-radius: 5px;
  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;

  &.open {
    height: 54px;
  }
  &.extra {
    z-index: 3;
  }
  opacity: 1;
  &.adding-meal {
    transform: translateY(-100px);
  }
  overflow: hidden;

  .gradient {
    $google-red: #ef3939;
    $google-yellow: #ffc107;
    $google-green: #20e326;
    width: 1500px;
    background: linear-gradient(
      90deg,
      $google-red,
      $google-yellow,
      $google-green
    );
    height: 100%;
    z-index: 1;
    transition: transform 0.2s ease-in-out;
    opacity: 1;
    &.adding-meal {
      transform: translateY(-100px);
    }
  }
  .extra-gradient {
    $google-red: #ef3939;
    $google-red-lighter: rgb(218, 105, 105);
    background: linear-gradient(90deg, $google-red-lighter, $google-red);
    height: 100%;
    z-index: 1;
    transition: transform 0.2s ease-in-out;
    &.adding-meal {
      transform: translateY(-100px);
    }
  }
}
.background {
  background-color: white;
  position: absolute;
  top: 8px;
  left: 10px;
  bottom: 8px;
  right: 10px;
  border-radius: 5px;
  z-index: 1;
  &.expanded {
    height: 100%;
  }
  &.hovered {
  }
}
.pointer {
  position: absolute;
  top: 14px;
  left: 0px;
  width: 0;
  height: 0;
  z-index: 5;
  $border-size: 20px;
  $border-color: #ffa000;
  border-left: $border-size solid $border-color;
  border-right: $border-size solid transparent;
  border-bottom: $border-size solid transparent;
  border-top: $border-size solid transparent;
  transition: transform 0.5s ease;

  &.expanded {
    transform: translateX(-80px);
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
    color: black;
    margin-bottom: 2px;
    user-select: none;
  }
  &-value {
    user-select: none;

    .measure {
      margin-left: 0;
    }
  }
}

.name {
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
  text-transform: capitalize;
  transition: font-size 0.2s ease-in-out;
  user-select: none;
}

.macros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  transition: width 0.2s ease-in-out;
  transition-delay: 0.5s;
}

.calories {
  user-select: none;
  font-size: 20px;
}

.diet-plan-box {
  z-index: 4;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px;
  margin: 8px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &.adding-meal {
    transform: translateY(-100px);
  }

  &.expanded {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0);

    .macros {
      margin-left: 20px;
    }
  }
}

.name-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.measure {
  font-size: 14px;
  font-weight: normal;
  margin-left: 4px;
  margin-top: 8px;
}
</style>
