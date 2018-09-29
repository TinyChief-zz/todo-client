<template>
  <div class="toolbar">
    <div class="btn--action" @click="$emit('left-icon-clicked')">
      <!-- <i :class="[leftIcon]"></i> -->
      <img :src="require('../../assets/' + leftIcon + '.png')" alt="" width="25px">
    </div>
    <span class="title" v-if="title">{{ title }}</span>
    <div class="btn--action" v-if="rightIcon" @click="$emit('right-icon-clicked')">
      <img 
        :src="require('../../assets/' + rightIcon + '.png')" 
        :class="[rightIcon == leftIcon ? 'invisible' : '']"
        alt="" 
        width="25px"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toolbar',
  props: ["leftIcon", "rightIcon", "title"],
  data() {
    return {
      // leftIcon: "fas fa-arrow-left"
    };
  }
};
</script>

<style scoped lang="scss">
.toolbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  min-height: 48px;
}

.btn--action {
  cursor: pointer;
  z-index: 999;  
}

.invisible {
  opacity: 0;
}
.title {
  font-size: 22px;
}
</style>
