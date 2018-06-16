<template>
  <div class="app-header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="商家图标" />
      </div>
      <div class="introdution">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="iconMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetial()">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin">
      <span class="bulletin-logo"></span>
      <span class="bulletin-content">{{seller.bulletin}}</span>
      <span class="more icon-keyboard_arrow_right" @click="showDetial()"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <transition name="scale">
      <detial v-show="isShowDetial" :seller="seller" :iconMap="iconMap" @closeDetial="closeDetial()"></detial>
    </transition>
  </div>
</template>

<script>
  import detial from './detial/detial.vue'
  export default {
    name: 'appHeader',
    components: {
      detial
    },
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        // seller: {},
        isShowDetial: false
      }
    },
    methods: {
      showDetial() {
        this.isShowDetial = !this.isShowDetial;
      },
      closeDetial() {
        this.isShowDetial = false;
      }
    },
    created() {
      this.iconMap = ['decrease_1', 'discount_1', 'special_1', 'invoice_1', 'guarantee_1'];
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/index.scss";
  .app-header {
    height: 134px;
    background: rgba(7, 17, 27, .5);
    position: relative;
    .content-wrapper {
      position: relative;
      height: 64px;
      font-size: 0;
      padding: 24px 12px 18px 24px;
      .avatar {
        display: inline-block;
        margin-right: 18px;
        img {
          border-radius: 4px;
        }
      }
      .introdution {
        display: inline-block;
        vertical-align: top;
        padding: 2px 0;
        .title {
          margin-bottom: 8px;
          font-size: 0;
          .brand {
            display: inline-block;
            width: 30px;
            height: 18px;
            margin-right: 6px;
            background: url('./brand@2x.png');
            background-size: cover;
          }
          .name {
            display: inline-block;
            vertical-align: top;
            font-size: 16px;
            color: rgb(255, 255, 255);
            font-weight: bold;
            line-height: 18px;
          }
        }
        .description {
          font-size: 12px;
          color: rgb(255, 255, 255);
          font-weight: 200;
          line-height: 12px;
          margin-bottom: 10px;
        }
        .supports {
          font-size: 0;
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            &.decrease_1 {
              @include bg(decrease_1);
            }
            &.discount_1 {
              @include bg(discount_1);
            }
            &.special_1 {
              @include bg(special_1);
            }
            &.invoice_1 {
              @include bg(invoice_1);
            }
            &.guarantee_1 {
              @include bg(guarantee_1);
            }
          }
          .text {
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
            color: rgb(255, 255, 255);
            font-weight: 200;
            line-height: 12px;
          }
        }
      }
      .supports-count {
        position: absolute;
        right: 12px;
        bottom: 12px;
        border-radius: 14px;
        padding: 6px 8px;
        background: rgba( 0, 0, 0, .2);
        display: flex;
        .count {
          font-size: 10px;
          color: rgb(255, 255, 255);
          font-weight: 200;
          line-height: 12px;
          margin-right: 2px;
        }
        i {
          align-self: center;
          font-size: 10px;
          color: rgb(255, 255, 255);
        }
      }
    }
    .bulletin {
      height: 28px;
      padding: 0 12px 0 12px;
      background: rgba(7, 17, 27, .2);
      display: flex;
      .bulletin-logo {
        flex-shrink: 0;
        width: 22px;
        height: 12px;
        margin: auto 4px auto 0;
        background: url('./bulletin@2x.png');
        background-size: 22px 12px;
      }
      .bulletin-content {
        font-size: 10px;
        color: rgb(255, 255, 255);
        font-weight: 200;
        line-height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .more {
        margin-left: 4px;
        font-size: 10px;
        color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
      }
    }
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
  }
</style>
