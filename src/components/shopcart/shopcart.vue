<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo">
          <span class="shop-icon" :class="{'has-food':totalPrice}" @click="listShow()">
              <i class="icon-shopping_cart"></i>
          </span>
          <div class="num" v-show="countNum">{{countNum}}</div>
        </div>
        <span class="count">￥{{totalPrice}}</span><span class="text">另需￥{{deliveryPrice}}元配送费</span>
      </div>
      <div class="content-right" :class="{'can-pay':currentMinPrice === '去结算'}" @click="pay()">
        <span class="pay">{{currentMinPrice}}</span>
      </div>
    </div>
    <transition name="fade-up">
      <div v-show="isDetail" class="cart-detail">
        <div class="cart-content">
          <div class="top">
            <h1 class="top-name">购物车</h1>
            <span class="clear" @click="clearAll()">清空</span>
          </div>
          <div class="content-wrapper" ref="contentWrapperHook">
            <ul>
              <li class="food-item" v-for="(food,index) in selectFoods" :key="index">
                <span class="food-name">{{food.name}}</span>
                <span class="food-price">￥{{food.price * food.count}}</span>
                <div class="control">
                  <cart-control :item="food" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <div class="bg" :class="{'showBG':isDetail}" @click="listShow()" v-show="isDetail"></div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  import cartControl from '../cartcontrol/cartControl'
  export default {
    name: 'shopcart',
    data() {
      return {
        showDetail: true
      }
    },
    components: {
      cartControl
    },
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach(food => {
          total += food.price * food.count;
        });
        return total;
      },
      countNum() {
        let num = 0;
        this.selectFoods.forEach(food => {
          num += food.count;
        });
        return num;
      },
      currentMinPrice() {
        let current = this.minPrice - this.totalPrice;
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}起送`;
        } else if (current > 0) {
          return `还差￥${current}起送`;
        }
        return '去结算';
      },
      isDetail() {
        if(!this.countNum){
          this.showDetail = true;
          return false;
        }
        let show = !this.showDetail
        if(show){
          if(!this.scroll){
            this.$nextTick( () => {
              this.scroll = new Bscroll(this.$refs.contentWrapperHook,{
                click: true
              });
            });   
          }else{
            this.scroll.refresh();
          }
        }
        return show;
      }
    },
    methods: {
      clearAll() {
        this.selectFoods.forEach(food => food.count = 0);
      },
      listShow() {
        this.showDetail = !this.showDetail;
      },
      pay() {
        if(this.totalPrice > this.minPrice){
          window.alert(`您需要支付${this.totalPrice}元`);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-up-enter,
  .fade-up-leave-to {
    transform: translateY(295px);
  }
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all .4s ease-out;
  }
  .shopcart {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    .content {
      display: flex;
      height: 48px;
      color: rgba( 255, 255, 255, .4);
      .content-left {
        flex: 1;
        background: #141d27;
        font-size: 0;
        padding: 0 12px 0 12px;
        z-index: 5;
        .logo {
          display: inline-block;
          width: 56px;
          height: 56px;
          background: #141d27;
          position: relative;
          margin-top: -10px;
          padding: 6px;
          box-sizing: border-box;
          border-radius: 50%;
          vertical-align: top;
          z-index: 6;
          .shop-icon {
            display: block;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            margin-right: 15px;
            background: #2b343c;
            text-align: center;
            &.has-food {
              background: rgb( 0, 160, 220);
              .icon-shopping_cart {
                color: #fff;
              }
            }
            .icon-shopping_cart {
              font-size: 24px;
              line-height: 44px;
            }
          }
          .num {
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #fff;
            background: rgb( 240, 20, 20);
            box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, .4);
          }
        }
        .count {
          font-size: 16px;
          font-weight: 700;
          line-height: 48px;
          color: #fff;
          margin-right: 12px;
        }
        .text {
          border-left: 1px solid rgba( 255, 255, 255, .1);
          padding-left: 12px;
          font-size: 12px;
          font-weight: normal;
          line-height: 24px;
        }
      }
      .content-right {
        width: 105px;
        background: #2b343c;
        text-align: center;
        z-index: 5;
        .pay {
          font-size: 12px;
          line-height: 48px;
          color: rgba( 255, 255, 255, .6);
          font-weight: 700;
        }
        &.can-pay {
          background: #00b43c;
          .pay {
            color: #fff;
          }
        }
      }
    }
    .cart-detail {
      position: fixed;
      max-height: 259.5px;
      bottom: 46px;
      width: 100%;
      z-index: 4;
      .cart-content {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
        overflow: hidden;
        .top {
          height: 40px;
          padding: 0 18px;
          background: #f3f5f7;
          border-bottom: 1px solid rgba( 7, 17, 27, .1);
          .top-name {
            float: left;
            font-size: 14px;
            font-weight: 200;
            color: rgb( 7, 17, 27);
            line-height: 40px;
          }
          .clear {
            float: right;
            font-size: 12px;
            color: rgb(0, 160, 220);
            line-height: 40px;
            cursor: pointer;
          }
        }
        .content-wrapper {
          max-height: 219.5px;
          overflow: hidden;
          .food-item {
            position: relative;
            display: block;
            height: 48px;
            margin: 0 18px;
            padding: 12px 0;
            box-sizing: border-box;
            border-bottom: 1px solid rgba( 7, 17, 27, .1);
            text-align: right;
            .food-name {
              float: left;
              font-size: 14px;
              line-height: 24px;
              color: rgb( 7, 17, 27);
            }
            .food-price {
              margin-right: 90px;
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              color: rgb( 240, 20, 20);
            }
            .control {
              position: absolute;
              right: 0;
              bottom: 11px;
            }
          }
        }
      }
    }
    .bg{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 3;
      opacity: 0;
      background: rgba( 7, 17, 27, 0);
      -webkit-backdrop-filter: blur(10px);
      &.showBG{
        transition: all .4s;
        opacity: 1;
        background: rgba( 7, 17, 27, .6);
      }
    }
  }
</style>
