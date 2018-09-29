<template>
  <div :class="[this.$store.getters.menuStatus ? 'opened' : 'closed', 'menu']">
    <div class="profile">
      <div class="photo">
        <img src="../../assets/photo.png" alt="" width="70px">
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
          <img :src="require('../../assets/' + item.icon + '.png')" :alt="item.icon">
          <p>{{ item.name }}</p>
          <span>{{ item.number }}</span>
        </li>
      </ul>
    </nav>
    <div>
      <ul>
        <li @click="handleSettings">
          <img :src="require('../../assets/settings.png')" alt="settings">
          <p>Settings</p>
        </li>
        <li @click="handleLogout">
          <img :src="require('../../assets/logout.png')" alt="settings">
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
          icon: 'home',
          number: ''
        },
        {
          name: 'Calendar',
          icon: 'calendar',
          number: '',
        },
        {
          name: 'Overview',
          icon: 'overview',
          number: '5'
        },
        {
          name: 'Groups',
          icon: 'groups',
          number: ''
        },
        {
          name: 'Lists',
          icon: 'lists',
          number: '4'
        },
        {
          name: 'Profile',
          icon: 'profile',
          number: ''
        },
        {
          name: 'Timeline',
          icon: 'timeline',
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
  align-items: center;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 5px;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url('../../assets/divider1.png') center;
    background-size: contain;
  }
  h1 {
    font-size: 30px;
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
    background: url('../../assets/divider1.png') center;
    background-size: contain;
  }
}
</style>
