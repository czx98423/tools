<template>
  <div class='edit-panel' >
    <div :style="{top,right}" class="edit-btn">
      <a-button  type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </div>
    <div>
      <a-button>
        <a-icon type="switcher" />
      </a-button>  
      <a-button>
        <a-icon type="bulb" />
      </a-button>     
    </div>
    <transition name="slide-fade">
      <div class="edit-content" >

      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      top:"10px",
      right:"10px",
      collapsed:false
    }
  },
  mounted(){

  },
  methods:{
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  }
}
</script>
<style lang="scss" scoped>
.edit-panel{
  .edit-btn,.edit-content{
    position: absolute;
  }
  .edit-content{
    top: 60px;
    right: 60px;
    min-height: 500px;
    min-width: 250px;
    background-color: #00111Fee;
  }
  .slide-fade-enter-active {
  transition: all 0.5s ease-in;
  }
  .slide-fade-leave-active {
    transition: all 0.5s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-fade-enter-to, .slide-fade-leave
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
