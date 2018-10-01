<template>
  <div :class="[this.$store.getters.menuStatus ? 'opened' : 'closed', 'menu']">
    <div class="profile">
      <div class="photo">
        <img src="../../assets/images/photo.png" alt="" width="70px">
      </div>
      <div class="text-information">
        <h1>{{userData.name}}</h1>
        <p>{{userData.email}}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li 
          v-for="(item, i) in navList" 
          :key="i"
          @click="handleRoute(item.name)"
        >
          <!-- <img :src="require('../../assets/images/' + item.icon + '.png')" :alt="item.icon"> -->
          <i :class="[item.icon]"></i>
          <p>{{ item.name }}</p>
          <span>{{ item.number }}</span>
        </li>
      </ul>
    </nav>
    <div>
      <ul>
        <li @click="handleSettings">
          <i class='fal fa-cog'></i>
          <p>Settings</p>
        </li>
        <li @click="handleLogout">
          <i class="fal fa-sign-out"></i>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      navList: [
        {
          name: 'Home',
          icon: 'fal fa-home',
          number: ''
        },
        {
          name: 'Calendar',
          icon: 'fal fa-calendar-alt',
          number: '',
        },
        {
          name: 'Overview',
          icon: 'fal fa-chart-pie',
          number: '5'
        },
        {
          name: 'Groups',
          icon: 'fal fa-align-left',
          number: ''
        },
        {
          name: 'Lists',
          icon: 'fal fa-list-ul',
          number: '4'
        },
        {
          name: 'Profile',
          icon: 'fal fa-user-circle',
          number: ''
        },
        {
          name: 'Timeline',
          icon: 'fal fa-undo fa-rotate-90',
          number: '2'
        }
      ]
    };
  },
  methods: {
    handleSettings: function () {
      this.$store.dispatch('toggleMenu')
      this.$router.push({name: 'Settings'})
    },
    handleLogout: function () {
      this.$store.dispatch('logoutUser')
    },
    handleRoute: function (name) {
      this.$store.dispatch('toggleMenu')
      this.$router.push({name: name})
    }
  },
  computed: {
    userData: function () {
      return this.$store.getters.userData
    }
  }
};
</script>

<style scoped lang="scss">
$textColor: #1d1d26;

.menu {
  position: absolute;
  height: 100%;
  width: 300px;
  padding: 20px 30px;
  display: block;
  flex-direction: column;
  top: 0;
  background-color: #fff;
  z-index: 100;
  color: $textColor;
  left: 0;
  transition: 0.3s transform ease-in-out
}
.closed {
  transform: translateX(-100%);
}
.opened {
  transform: translate(0)
}

.profile {
  display: flex;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 5px;
  text-align: left;
  padding-top: 10px;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url('../../assets/images/divider1.png') center;
    background-size: contain;
  }
  h1 {
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 8px;
  }
  p {
    opacity: 0.6;
  }
}
.photo {
  margin-right: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 22px 0 22px 60px;
  position: relative;
  font-size: 18px;
  cursor: pointer;
  img {
    position: absolute;
    left: 0;
    width: 30px;
    top: 50%;
    transform: translateY(-50%)
  }
  p {
    font-size: 16px;
  }
  i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    color: #cdcdcd;
    transition: all 0.2s ease-in;
  }
  &:hover i {
    color: #ff4f79;
    opacity: 0.8;
  }
}

nav {
  padding-bottom: 5px;
  position: relative;
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url('../../assets/images/divider1.png') center;
    background-size: contain;
  }
}
</style>
