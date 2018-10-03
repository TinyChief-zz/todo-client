<template>
  <div class="toolbar">
    <!-- 
      Works next way
      If parent component provide data, for example,
      for right icon, then this renders right icon.
     -->
    <div class="btn--action" v-if="leftIcon" @click="$emit('left-icon-clicked')">
      <i :class=[leftIcon]></i>
    </div>
    <span class="title" v-if="title">{{ title }}</span>
    <div
      :class="[!rightIcon ? 'invisible' : '', 'btn--action']"
      @click="$emit('right-icon-clicked')"
    >
      <i :class=[rightIcon]></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toolbar',
  props: ["leftIcon", "rightIcon", "title"],
  data() {
    return {}
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
i {
  font-size: 28px;
}
</style>
