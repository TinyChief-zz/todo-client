<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      rightIcon="fal fa-search"   
      title="Settings"  
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
    <div class="header">
      <div class="photo-wrapper">
        <div class="add-photo" v-bind:style="{
                backgroundImage : 'url(' + require('../assets/images/camera.png') + ')',
                backgroundSize: '50%'
              }">
        </div>
        <div class="photo" v-bind:style="{
                backgroundImage : 'url(' + require('../assets/images/photo.png') + ')',
              }"></div>
        <div class="logout" v-bind:style="{
                backgroundImage : 'url(' + require('../assets/images/logout-w.png') + ')',
                backgroundSize: '40%'
              }" @click="$store.dispatch('logoutUser')"></div>
      </div>
    </div>
    <div class="blocks">
      <div class="block-item">
        <img src="../assets/images/profile.png" alt="profile">
        <div class="block-item__content">
          <p class="block-item__title">name</p>
          <input type="text" name="name" v-model="userData.name" />
        </div>
      </div>
      <div class="block-item">
        <img src="../assets/images/email.png" alt="email">
        <div class="block-item__content">
          <p class="block-item__title">email</p>
          <input type="text" name="email" v-model="userData.email" />
        </div>
      </div>
      <div class="block-item">
        <img src="../assets/images/password.png" alt="password">
        <div class="block-item__content">
          <p class="block-item__title">password</p>
          <input type="password" name="password" v-model="userData.password" />
        </div>
      </div>
      <div class="block-item">
        <img src="../assets/images/phone.png" alt="phone">
        <div class="block-item__content">
          <p class="block-item__title">phone</p>
          <input type="phone" name="phone" v-model="userData.phone" />
        </div>
      </div>
      <div class="block-item">
        <img src="../assets/images/address.png" alt="address">
        <div class="block-item__content">
          <p class="block-item__title">address</p>
          <input type="address" name="address" placeholder="MOSCOW" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Settings",
    data() {
      return {
        userData: null,
      };
    },
    methods: {
      leftAction: function() {
        this.$store.dispatch('toggleMenu')
      },
    },
    // computed: {
    //   userData () {
    //     return this.$store.getters.userData
    //   }
    // },
    beforeMount: function() {
      this.userData = this.$store.getters.userData
      console.log(this.userData)
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    margin-bottom: 0;
  }
  
  .photo-wrapper {
    justify-content: space-evenly;
    .add-photo,
    .logout {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      background-repeat: no-repeat;
      background-position: center, center;
    }
  }
  
  .block-item {
    .block-item__title {
      color: rgba(255, 255, 255, 0.5);
    }
    input {
      color: white;
      font-size: 18px;
      font-weight: normal;
      &::placeholder {
        font-weight: 400;
        color: white;
        opacity: 1;
      }
    }
  }
</style>
