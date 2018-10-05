<template>
  <div
    :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']"
  >
    <Toolbar leftIcon="fal fa-bars" title="" @left-icon-clicked="leftAction">
    </Toolbar>
    <div class="date">
      <h1 class="week--day large-text">{{ time.weekDay }}</h1>
      <p class="month-day">{{ time.date }}</p>
      <div class="time">
        <div class="hours">{{ setValue(time.time[0]) }}</div>
        <div class="minutes">{{ time.time[1] }}</div>
      </div>
    </div>
    <div class="blocks blocks-tasks">
      <div v-for="(hero, index) in todayTasks" v-bind:key="index" class="block-item">
        <Icon :iconClass="hero.icon"></Icon>
        <div class="block-item__content">
          <p class="block-item__title">
            {{ hero.title }}
            <span>{{hero.time}}</span>
          </p>
          <p class="block-item__type">{{hero.type}}</p>
        </div>
      </div>
    </div>
    <add-task></add-task>
  </div>
</template>

<script>
import AddTask from '@/components/reusable/AddTask.vue';

export default {
  name: 'Home',
  components: {
    AddTask,
  },
  data() {
    return {
      time: {},
      tasks: [],
    };
  },
  computed: {
    todayTasks() {
      return this.$store.getters.todayTasks;
    },
    newTask() {
      return this.$store.getters.openNewTask;
    },
  },
  methods: {
    closeMenu: function() {
      if (!this.$store.getters.menuStatus) {
        console.log('click')
      }
    },
    leftAction: function() {
      this.$store.dispatch('toggleMenu');
    },
    getTime: function() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      const date = new Date().toLocaleDateString('ru-RU', options).split(',');
      return {
        weekDay: date[0][0].toUpperCase() + date[0].slice(1, date[0].length),
        date: date[1],
        time: date[2].split(':'),
      };
    },
    setValue: function(i) {
      return i <= 9 ? '0' + i : i;
    },
  },
  beforeMount: async function() {
    if (!this.$store.getters.getTodayDate) {
      this.$store.dispatch('setDate')
    }
    this.time = this.getTime();
  },
  mounted: function() {
    // UPDATE TIME EVERY 30 SECONDS
    setInterval(() => {
      this.time = this.getTime();
    }, 30000);
  },
};
</script>

<style scoped lang="scss">
.block-item__title {
  font-size: 16px;
}

.large-text {
  font-weight: 200;
  font-size: 36px;
  margin-bottom: 10px;
}

.month-day {
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-size: 14px;
}

.time {
  margin: 35px auto 12px auto;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hours {
  margin-top: 8px;
  font-size: 46px;
  letter-spacing: 0px;
}

.minutes {
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.blocks {
  overflow-y: scroll;
}
</style>
