<template>
  <section class="home page" :class="{ overflow: isHomePage }">
    <OnlineBadge v-if="showOnlineBadge" />
    <UiToastList />
    <Logo />
    <template v-if="!$currentQA">
      <span> "No plan for this week" </span>
    </template>
    <div v-else>
      <div v-for="item in $currentQA" :key="item._id">{{ item.question }}</div>
    </div>
    <footer>
      <div class="user-info">
        Not {{ $currentUser.name }}? Click <a href="#" @click="logout">here</a>
      </div>
    </footer>
  </section>
</template>

<script>
import UiToastList from '../components/UiToastList.vue'
import Logo from '../components/Logo.vue'
import OnlineBadge from '../components/OnlineBadge.vue'

export default {
  name: 'IndexPage',

  components: {
    UiToastList,
    Logo,
    OnlineBadge
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
  methods: {
    onExpandHandler (isExpanded) {
      this.isHomePage = !isExpanded
    },
    logout () {
      this.$store.commit('user/SET_CURRENT_USER', null)
      localStorage.removeItem('user')
      localStorage.removeItem('qa')
    },
    async initialize () {
      this.$store.dispatch('qa/loadCurrentQA')
      this.$store.dispatch('user/loadCurrentUser')
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
