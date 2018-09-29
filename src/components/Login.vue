<template>
  <div class="outter-wrapper">
    <div class="wrapper">
  
      <div class="logo-wrapper">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
        </div>
      </div>
      <div class="blocks">
        <div class="block-item">
          <img src="../assets/email.png" alt="email">
          <div class="block-item__content">
            <p class="block-item__title">Email</p>
            <input type="email" name="email" placeholder="Enter your email" v-model="email" />
          </div>
        </div>
        <div class="block-item">
          <img src="../assets/password.png" alt="password">
          <div class="block-item__content">
            <p class="block-item__title">Password</p>
            <input type="password" name="Password" placeholder="Enter password" v-model="password" />
          </div>
        </div>
      </div>
      <large-button text="Sign In" @btn-clicked="login"></large-button>
      <already-have firstText="DON’T HAVE AN ACCOUNT?" secondText="SIGN UP" to="Register"></already-have>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from "@/services/AuthenticationService";
  import LargeButton from "@/components/reusable/LargeButton.vue";
  import AlreadyHave from "@/components/reusable/AlreadyHave.vue";
  import iziToast from 'izitoast'
  import 'izitoast/dist/css/iziToast.css';
  
  export default {
    components: {
      LargeButton,
      AlreadyHave,
    },
    data() {
      return {
        email: null,
        password: null,
        // email: 'vadim2@gmail.com',
        // password: '123456',
        name: null,
        error: null
      };
    },
    methods: {
      async login() {
        await this.$store.dispatch('signUserIn', {
          email: this.email,
          password: this.password,
        })
        await this.$store.dispatch('getUserTasks')
        this.$store.dispatch('getTodayTasks')
      }
    }
  };
</script>


<style scoped lang="scss">
  @import "@/style/_vars.scss";
  .wrapper {
    justify-content: flex-end
  }
  
  .logo {
    width: 140px;
    height: 140px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }
  
  .logo-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
