<template>
  <section class="home page" :class="{ overflow: isHomePage }">
    <OnlineBadge v-if="showOnlineBadge" />
    <UiToastList />
    <Logo />
    <MetaStats />
    <template v-if="!$currentWeekPlan">
      <span> "No plan for this week" </span>
    </template>
    <div v-else>
      <DietPlanBox
        v-if="$currentWeekPlan.monday.meals.length"
        name="monday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.monday.calories"
        :caloriesProgress="$caloriesProgress.monday"
        :proteins="$currentWeekPlan.monday.proteins"
        :fats="$currentWeekPlan.monday.fat"
        :carbs="$currentWeekPlan.monday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.tuesday.meals.length"
        name="tuesday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.tuesday.calories"
        :proteins="$currentWeekPlan.tuesday.proteins"
        :caloriesProgress="$caloriesProgress.tuesday"
        :fats="$currentWeekPlan.tuesday.fat"
        :carbs="$currentWeekPlan.tuesday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.wednesday.meals.length"
        name="wednesday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.wednesday.calories"
        :proteins="$currentWeekPlan.wednesday.proteins"
        :caloriesProgress="$caloriesProgress.wednesday"
        :fats="$currentWeekPlan.wednesday.fat"
        :carbs="$currentWeekPlan.wednesday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.thursday.meals.length"
        name="thursday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.thursday.calories"
        :proteins="$currentWeekPlan.thursday.proteins"
        :caloriesProgress="$caloriesProgress.thursday"
        :fats="$currentWeekPlan.thursday.fat"
        :carbs="$currentWeekPlan.thursday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.friday.meals.length"
        name="friday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.friday.calories"
        :proteins="$currentWeekPlan.friday.proteins"
        :caloriesProgress="$caloriesProgress.friday"
        :fats="$currentWeekPlan.friday.fat"
        :carbs="$currentWeekPlan.friday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.saturday.meals.length"
        name="saturday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.saturday.calories"
        :proteins="$currentWeekPlan.saturday.proteins"
        :caloriesProgress="$caloriesProgress.saturday"
        :fats="$currentWeekPlan.saturday.fat"
        :carbs="$currentWeekPlan.saturday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
      <DietPlanBox
        v-if="$currentWeekPlan.sunday.meals.length"
        name="sunday"
        @expand="onExpandHandler"
        :calories="$currentWeekPlan.sunday.calories"
        :proteins="$currentWeekPlan.sunday.proteins"
        :caloriesProgress="$caloriesProgress.sunday"
        :fats="$currentWeekPlan.sunday.fat"
        :carbs="$currentWeekPlan.sunday.carbs"
        :show-proteins="false"
        :show-carbs="false"
        :show-fats="false"
      />
    </div>
    <footer>
      <div class="user-info">
        Not {{ userName }}? Click <a href="#" @click="logout">here</a>
      </div>
      <a
        class="sheets-button"
        target="_blank"
        :href="`https://docs.google.com/spreadsheets/d/${this.$currentUser}`"
        ><UiBaseIcon height="32" width="50" iconName="sheets"
      /></a>
    </footer>
  </section>
</template>

<script>
import DietPlanBox from '@/components/DietPlanBox.vue'
import MetaStats from '@/components/MetaStats.vue'
import UiToastList from '../components/UiToastList.vue'
import Logo from '../components/Logo.vue'
import OnlineBadge from '../components/OnlineBadge.vue'
import UiBaseIcon from '../components/icons/UiBaseIcon.vue'

export default {
  name: 'IndexPage',

  components: {
    DietPlanBox,
    MetaStats,
    UiToastList,
    Logo,
    OnlineBadge,
    UiBaseIcon
  },

  data () {
    return {
      showOnlineBadge: false,
      isHomePage: true,
      pagination: {
        limit: 20,
        offset: 0,
        total: 60
      }
    }
  },
  async mounted () {
    this.initialize()
  },
  computed: {
    userName () {
      return this.$meta.user?.name
    }
  },

  methods: {
    onExpandHandler (isExpanded) {
      this.isHomePage = !isExpanded
    },
    logout () {
      this.$store.commit('user/SET_CURRENT_USER', null)
      localStorage.removeItem('user')
      localStorage.removeItem('meta')
    },
    async initialize () {
      this.$store.dispatch('weekPlan/loadFinishedMeals')
      this.$store.dispatch('weekPlan/loadCurrentWeekPlan')
      await this.$store.dispatch(
        'weekPlan/getUpdatedMeta',
        this.$currentUser
      )
      await this.$store.dispatch('weekPlan/calculateProgress')
      await this.$store.dispatch('weekPlan/getUpdatedMeals', this.$currentUser)
    },
    onBlur () {
      console.log('onBlur!!!')
    },
    onEnter () {
      console.log('onEnter!!!')
    },
    onEsc () {
      console.log('onEsc!!!')
    },
    onClickIcon () {
      console.log('onClickIcon!!!!')
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 0.9rem;
    color: #999;
    margin: 2rem 10px;
  }

  a {
    cursor: pointer;
  }
}

.home.page {
  height: 100vh;
  max-height: $max-height;
  overflow: hidden;
  padding-bottom: 40px;

  &.overflow {
    overflow: scroll;
  }
}
</style>
