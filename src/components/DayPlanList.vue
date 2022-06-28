<template>
  <div class="main-wrappder">
    <div class="meal-wrapper">
      <div class="title-wrapper">
        <div class="title">{{ formattedType }}</div>
        <div class="button-wrapper">
          <button @click="addClickHandler('breakfast')" class="add">
            <span class="text"> add </span>
          </button>
          <div ref="background" class="background-button"></div>
        </div>
      </div>
      <div v-if="plan && plan.length > 0" class="meals-wrapper">
        <swipe-list
          ref="list"
          class="card"
          :items="plan"
          item-key="id"
          @swipeout:click="itemClick"
        >
          <template v-slot="{ item }">
            <MealBox
              show-macros
              :meal="item"
              :key="item.id"
              :show-details="viewingMealDetailsId === item.id"
              @click="mealBoxClickHandler"
              :done="isMealDone(item)"
            />
          </template>
          <template v-slot:right="{ item }">
            <div class="swipeout-action action-buttons-wrapper">
              <button
                v-if="item.notes"
                @click="viewButtonClickHandler(item)"
                class="action-button"
              >
                <UiBaseIcon class="ok" width="18px" :iconName="viewingMealDetailsId === item.id ? 'eyeClosed' : 'viewIcon'" />
              </button>
              <button
                @click="deleteButtonClickHandler(item)"
                class="action-button delete"
              >
                <UiBaseIcon class="ok" width="14px" iconName="deleteIcon" />
              </button>
            </div>
          </template>
        </swipe-list>
      </div>
      <div v-else>
        <div class="no-meals">No meals</div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap/all'
import MealBox from './MealBox.vue'
import { SwipeList } from 'vue-swipe-actions'
import UiBaseIcon from './icons/UiBaseIcon.vue'

export default {
  name: 'DayPlanList',

  props: {
    type: { type: String },
    plan: { type: Array }
  },
  data () {
    return {
      show: false,
      background: null,
      viewingMealDetailsId: null
    }
  },
  components: {
    MealBox,
    SwipeList,
    UiBaseIcon
  },
  computed: {
    formattedType () {
      if (this.type.includes('snack')) {
        return 'snack'
      }
      return this.type
    }
  },
  methods: {
    isMealDone (meal) {
      return !!this.$finishedMeals.find((_meal) => _meal === meal.id)
    },
    itemClick () {
      this.viewingMealDetailsId = null
      this.$refs.list.closeActions()
    },
    addClickHandler () {
      this.$emit('add-click', this.type)
      this.expandButtonBackground(this.type)
    },
    viewButtonClickHandler (item) {
      if (this.viewingMealDetailsId) {
        this.viewingMealDetailsId = null
        this.$refs.list.closeActions()
      } else this.viewingMealDetailsId = item.id
    },
    deleteButtonClickHandler (item) {
      this.$emit('delete', { id: item.id, type: this.type })
    },
    expandButtonBackground () {
      this.background = this.$refs.background
      gsap.fromTo(
        this.background,
        {
          backgroundColor: '#ffa000'
        },
        {
          duration: 0.5,
          scale: 400,
          zIndex: 100,
          backgroundColor: '#ffa000',
          ease: 'power2.out'
        }
      )
    },
    collapseButtonBackground () {
      gsap.fromTo(
        this.background,
        { position: 'absolute' },
        {
          duration: 0.5,
          scale: 1,
          zIndex: 0,
          position: 'absolute',
          ease: 'power2.out'
        }
      )
      setTimeout(() => {
        gsap.set(this.background, {
          backgroundColor: 'transparent'
        })
      }, 500)
    },
    mealBoxClickHandler (mealId) {
      // check if meal is done
      const isDone = this.$finishedMeals.includes(mealId)
      if (isDone) {
        this.$store.dispatch('weekPlan/removeFinishedMeal', mealId)
      } else {
        this.$store.dispatch('weekPlan/finishMeal', mealId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.action-buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
}
.action-button {
  width: 50px;
  height: 50px;
  $avocado-green: #66bc24;

  background-color: $avocado-green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: white;
  margin-left: 8px;
  height: 100%;
  width: 46px;

  &.delete {
    background-color: #ff3d00;
    margin-right: 18px;
  }
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  margin-bottom: -1px;
  background: #f5f5f5;
  button {
    background: #ffa000;
    margin: 4px;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 12px;
    color: #333;
    cursor: pointer;
    position: relative;
    z-index: 2;
    user-select: none;

    .text {
      transition: opacity 0.3s ease;
      text-transform: uppercase;
      font-size: 8px;
      z-index: 10;
      color: white;
      user-select: none;
    }
  }
  .background-button {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #ffa000;
    width: 10px;
    height: 10px;
    z-index: 1;
    border-radius: 50%;
  }
}
.button-wrapper {
  position: relative;
}
.no-meals {
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  opacity: 0.5;
}
.wrapper-day-plan {
  background-color: white;
  $margin-top: 64px;
  height: calc(100vh - 64px - 240px);
  overflow: scroll;
  z-index: 2;
  position: fixed;
  top: $margin-top;
  bottom: 200px;
  left: -10px;
  right: -10px;
  transition: all 0.2s ease-in-out;
  transition-delay: 0s;
  padding: 10px;
  overflow: scroll;

  &.show {
    opacity: 1;
  }
  &.add-meal {
    height: 100vh;
    top: 0;
    bottom: 0px;
    transition: top 0.2s ease-in-out;
  }

  .meals-wrapper {
    // > div:not(:first-child):not(:last-child) {
    > div:not(:first-child) {
      margin-top: 1px;
      border-top: 1px solid #f5f5f5;
    }
  }
}
</style>
