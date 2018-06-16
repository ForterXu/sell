<template>
  <div class="cart-control">
    <transition name="showremovebtn">
    <i v-show="item.count" class="remove icon-remove_circle_outline" @click.stop.prevent="removeFood($event)"></i>
    </transition>
    <span v-show="item.count" class="count">{{item.count}}</span>
    <i class="add icon-add_circle" @click.stop.prevent="addFood($event)"></i>
    <!-- <div class="ball">
      <span class="out-ball">
        <span class="inner-ball"></span>
      </span>
    </div> -->
  </div>
</template>

<script> 
import Vue from 'vue';
  export default {
    name: 'cartControl',
    props: {
      item: {
        type: Object, 
        default: {}
      }
    },
    methods: {
      addFood(e) {
        if(!e._constructed) return;
        if(!this.item.count){
          Vue.set(this.item,'count',1);
        }else{
          this.item.count++;
        }
      },
      removeFood(e) {
        if(!e._constructed) return;
        this.item.count--;
      }
    }
  }
</script>

<style lang="scss" scoped>
.showremovebtn-enter,.showremovebtn-leave-to{
  opacity: 0;
  transform: translateX(24px) rotateZ(90deg);
}
.showremovebtn-enter-active,.showremovebtn-leave-active{
  transition: all .6s ease;
}
  .cart-control {
    position: relative;
    font-size: 0;
    .remove {
      display: inline-block;
      font-size: 24px;
      line-height: 24px;
      color: rgb( 0, 160, 220);
    }
    .count {
      display: inline-block;
      width: 24px;
      text-align: center;
      vertical-align: top;
      font-size: 10px;
      line-height: 24px;
      color: rgb( 147, 153, 159);
    }
    .add {
      font-size: 24px;
      line-height: 24px;
      color: rgb( 0, 160, 220);
    }
    // .ball{
    //   position: absolute;
    //   right: 4px;
    //   bottom: 2px;
    //   .out-ball{
    //     display: block;
    //     width: 16px;
    //     height: 16px;
    //     border-radius: 50%;
    //     background: rgb( 0, 160, 220);  
    //     transition: all .6s ease;   
    //     .inner-ball{
    //       display: block;
    //       width: 16px;
    //       height: 16px;
    //       border-radius: 50%;
    //       background: rgb( 0, 160, 220);  
    //       transition: all .6s ease;   
    //     }   
    //   }
    // }
  }
</style>
