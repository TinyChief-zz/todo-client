<template>
  <div class="outter-wrapper">
  
    <div class="wrapper">
      <Toolbar leftIcon="back" rightIcon="back" title="Sign Up" @left-icon-clicked="leftAction">
      </Toolbar>
      <div class="photo-wrapper">
        <div 
          class="photo"
          v-bind:style="{backgroundImage : 'url(' + require('../assets/images/photo.png') + ')' }"  
        ></div>
      </div>
      <div class="blocks">
        <div class="block-item">
          <img src="../assets/images/profile.png" alt="email">
          <div class="block-item__content">
            <p class="block-item__title">Name</p>
            <input type="name" name="name" placeholder="Enter name" v-model="name"/>
          </div>
        </div>
        <div class="block-item">
          <img src="../assets/images/email.png" alt="email">
          <div class="block-item__content">
            <p class="block-item__title">Email</p>
            <input type="email" name="email" placeholder="Enter email" v-model="email" />
          </div>
        </div>
        <div class="block-item">
          <img src="../assets/images/password.png" alt="password">
          <div class="block-item__content">
            <p class="block-item__title">Password</p>
            <input type="password" name="Password" placeholder="Enter password" v-model="password" />
          </div>
        </div>
        <div class="block-item">
          <img src="../assets/images/phone.png" alt="phone">
          <div class="block-item__content">
            <p class="block-item__title">Phone</p>
            <input type="text" name="Phone" placeholder="Your phone number" v-model="phone"/>
          </div>
        </div>
      </div>
      <large-button text="Sign Up" @btn-clicked="register"></large-button>
      <already-have firstText="ALREADY HAVE AN ACCOUNT?" secondText="SIGN IN" to="Login"></already-have>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from "@/services/AuthenticationService";
  import LargeButton from "@/components/reusable/LargeButton.vue";
  import AlreadyHave from "@/components/reusable/AlreadyHave.vue";
  import Toolbar from "@/components/reusable/Toolbar.vue";
  import iziToast from 'izitoast'
  

  export default {
    components: {
      LargeButton,
      AlreadyHave,
      Toolbar
    },
    data() {
      return {
        email: null,
        password: null,
        error: null,
        name: null,
        phone: null,
        email: 'ruslan@gmail.com',
        password: '131313',
        name: 'Руслан Юлдашбаев',
        phone: '89051495235'
      };
    },
    methods: {  
      async register() {
        this.$store.dispatch('signUserUp', {
          email: this.email,
          password: this.password,
          phone: this.phone,
          name: this.name,
          tasks: ' '
        })
      },
      leftAction: function() {
        return this.$router.push({
          name: 'Login'
        })
      }
    }
  };
</script>


<style scoped lang="scss">
  .wrapper {
    justify-content: flex-end
  }
</style>
