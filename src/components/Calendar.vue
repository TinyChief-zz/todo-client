<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar leftIcon="menu" title="" @left-icon-clicked="leftAction">
    </Toolbar>
    <vue-calendar @show-all="showAll" @day-clicked="dayClicked" @event-clicked="eventClicked" @month-changed="monthChanged">
    </vue-calendar>
    <div class="blocks">
      <div v-for="(hero, index) in tasksDisplay" v-bind:key="index" class="block-item">
        <!-- <img :src="'../assets/'+ hero.icon +'.png'" alt="email"> -->
        <!-- <img :src="require('../assets/'+ hero.icon +'.png')" :alt="hero.icon"> -->
        <img :src="require('../assets/people.png')" :alt="hero.type">
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
  import Toolbar from "@/components/reusable/Toolbar.vue";
  import AddTask from "@/components/reusable/AddTask.vue";
  
  export default {
    name: "Home",
    components: {
      Toolbar,
      AddTask
    },
    data() {
      return {
        toggleMenu: false,
        tasksDisplay: [],
        tasksFiltered: [],
        tasks: [],
        // tasks: [{
        //     title: "Brian’s Birthday",
        //     type: "",
        //     time: "10am",
        //     icon: "birthday",
        //     date: new Date(2018, 5, 11)
        //   },
        //   {
        //     title: "Lunch with Diane",
        //     type: "Restaurant",
        //     time: "12am",
        //     icon: "food",
        //     date: new Date(2018, 6, 5)
        //   },
        //   {
        //     title: "Design Meeting",
        //     type: "Hangouts",
        //     time: "2pm",
        //     icon: "chat",
        //     date: new Date(2018, 7, 10)
        //   },
        //   {
        //     title: "Revise Wireframes",
        //     type: "Mobile App",
        //     time: "12am",
        //     icon: "mouse",
        //     date: new Date(2018, 5, 16)
        //   }
        // ]
      };
    },
    methods: {
      leftAction: function() {
        this.$store.dispatch('toggleMenu')
      },
      showAll: function(events) {
        // Do something...
      },
      dayClicked: function(day) {
        // When day pressed display tasks belonging to this day
        this.tasksDisplay = [];
        this.tasksFiltered.map(el => {
          if ((el.date.getMonth() === day.date.getMonth()) && (el.date.getDate() === day.date.getDate())) {
            this.tasksDisplay.push(el);
          }
        });
      },
      eventClicked: function(event) {
        // Do something...
      },
      monthChanged: function(start, end) {
        // When mount changed filter task belonging to this month
        this.removeHighlights(this.tasksFiltered);
        this.tasksFiltered = [];
        this.tasksDisplay = [];
        const month = end.toLocaleString("en-us", {
          month: "long"
        });
        const year = end.getFullYear()
        this.tasks.map(el => {
          // Make from date string JS DATE instanse
          el.date = new Date(el.date)
          const elMonth = el.date.toLocaleString("en-us", {
            month: "long"
          });
          const elYear = el.date.getFullYear()
          if ((elMonth == month) && (elYear == year)) {
            this.tasksFiltered.push(el);
          }
        });
        this.$nextTick(() => {
          this.setHighlights(this.tasksFiltered);
        });
      },
      filterTasksByMonthAndYear: function() {
        this.tasksFiltered = [];
        const month = document
          .querySelector(".title")
          .childNodes[0].nodeValue.trim()
          .split(" ")[0];
        const year = document
          .querySelector(".title")
          .childNodes[0].nodeValue.trim()
          .split(" ")[1];
        this.tasks.map(el => {
          // Make from date string JS DATE instanse
          el.date = new Date(el.date)
          const elMonth = el.date.toLocaleString("en-us", {
            month: "long"
          });
          const elYear = el.date.getFullYear()
          if ((elMonth == month) && (elYear == year)) {
            this.tasksFiltered.push(el);
          }
        });
      },
      setHighlights: function(tasks) {
        const days = document.querySelectorAll(".week-day");
        for (let i = 0; i < days.length; i++) {
          const day = days[i].childNodes[0].childNodes[0].nodeValue.trim();
          if (i >= day) {
            tasks.map(el => {
              if (day == el.date.getDate()) {
                days[i].classList.add("highlighted");
              }
            });
          }
        }
      },
      removeHighlights: function(tasks) {
        const days = document.querySelectorAll(".week-day");
        for (let i = 0; i < days.length; i++) {
          const day = days[i].childNodes[0].childNodes[0].nodeValue.trim();
          if (i >= day) {
            tasks.map(el => {
              if (day == el.date.getDate()) {
                days[i].classList.remove("highlighted");
              }
            });
          }
        }
      }
    },
    mounted: function() {
      
    },
    beforeMount: async function() {
      await this.$store.dispatch('getUserTasks')
      this.tasks = this.$store.getters.loadedTasks

      this.$nextTick(() => {
        this.filterTasksByMonthAndYear();
        this.setHighlights(this.tasksFiltered);
      });
    }
  };
</script>

<style scoped lang="scss">
  .wrapper {
    position: relative;
  }
  
  .blocks {
    overflow-y: scroll;
    max-height: 250px;
  }
</style>
