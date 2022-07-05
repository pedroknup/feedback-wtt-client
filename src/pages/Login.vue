<template>
  <div class="login">
    <Logo />

    <span> Autenticacao requerida </span>

    <ui-input-text placeholder="Sheet id" :error="error" v-model="userId" />
    <span class="error">
      {{ error }}
    </span>
    <button :disabled="!userId || $isLoadingUser" @click="saveUserId">
      <div v-if="$isLoadingUser" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      Entrar
    </button>
    <br />
    <br />
    <br />
    <a
      href="#"
      @click="loginWithUserId('1vHBErn-WHMQT5vueo2XkzyO6zJVvy52rXvXzRyMlArM')"
      >Fill in PK</a
    >
    <br />
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import UiInputText from '../components/UiInputText.vue'

export default {
  name: 'LoginView',
  components: { Logo, UiInputText },
  data () {
    return {
      userId: '',
      error: null
    }
  },
  mounted () {
    this.$store.dispatch('user/loadCurrentUser')
    this.error = null
    const userRouteParam = this.$route.params.userId
    if (userRouteParam) {
      this.loginWithUserId(userRouteParam)
    }
  },
  methods: {
    async loginWithUserId (userId) {
      try {
        await this.$store.dispatch('user/login', userId)
      } catch (e) {
        this.error = e.statusMessage
      }
    },
    onKeyPressHandler (e) {
      if (e.keyCode === 13) {
        this.saveUserId()
      }
    },
    async saveUserId () {
      this.error = null

      this.loginWithUserId(this.userId)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  max-width: 300px;

  span {
    margin-bottom: -10px;
  }

  .error {
    color: red;
    margin: 10px 0 4px;
  }

  button {
    background-color: #00bcd4;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    margin: auto;
    margin-top: 12px;
    // width: 100px;
    display: flex;

    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
}

.loading-spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 20px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
