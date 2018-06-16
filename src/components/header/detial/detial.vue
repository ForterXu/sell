<template>
  <div class="detial">
    <div class="detial-wrapper">
      <div class="main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <h1 class="title-text">优惠信息</h1>
          <div class="line"></div>
        </div>
        <div class="supports-wrapper">
          <div v-if="seller.supports" v-for="(item,index) in seller.supports" class="support" :key="index">
            <span class="icon" :class="iconMap[item.type]"></span>
            <span class="support-text">{{item.description}}</span>
          </div>
        </div>
        <div class="title">
          <div class="line"></div>
          <h1 class="title-text">商家公告</h1>
          <div class="line"></div>
        </div>
        <div class="bulletin-wrapper">{{seller.bulletin}}</div>
      </div>
    </div>
    <div class="close icon-close" @click="close()"></div>
  </div>
</template>

<script>
  import star from '../../star/star'
  export default {
    name: 'detial',
    props: ['seller', 'iconMap'],
    components: {
      star
    },
    methods: {
      close() {
        this.$emit('closeDetial');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/common.scss';
  .detial {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: rgba( 7, 17, 27, .8); 
    -webkit-backdrop-filter: blur(10px);
    .detial-wrapper {
      min-height: 100%;
      .main {
        margin-bottom: 64px;
        padding: 64px 32px 0;
        .name {
          font-size: 16px;
          font-weight: 700;
          color: rgb(255, 255, 255);
          line-height: 16px;
          text-align: center;
          margin-bottom: 16px;
        }
        .star-wrapper {
          text-align: center;
          padding: 2px 0;
          margin-bottom: 28px;
        }
        .title {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          .line {
            flex-grow: 1;
            height: 1px;
            background: rgba( 255, 255, 255, .2);
          }
          .title-text {
            font-size: 14px;
            color: rgb(255, 255, 255);
            font-weight: 700;
            line-height: 14px;
            margin: 0 12px;
          }
        }
        .supports-wrapper {
          padding: 0 12px;
          margin-bottom: 28px;
          .support {
            margin-bottom: 12px;
            display: flex;
            .icon {
              display: inline-block;
              margin-right: 6px;
              width: 18px;
              height: 18px;
              &.decrease_1 {
                @include bg(decrease_2);
              }
              &.discount_1 {
                @include bg(discount_2);
              }
              &.special_1 {
                @include bg(special_2);
              }
              &.invoice_1 {
                @include bg(invoice_2);
              }
              &.guarantee_1 {
                @include bg(guarantee_2);
              }
            }
            .support-text {
              align-self: center;
              font-size: 12px;
              font-weight: 200;
              color: rgb(255, 255, 255);
              line-height: 12px;
            }
          }
        }
        .bulletin-wrapper{
          padding: 0 12px;
          font-size: 12px;
          color: rgb(255, 255, 255);
          font-weight: 200;
          line-height: 24px;
        }
      }
    }
    .close {
      position: absolute;
      left: 50%;
      bottom: 32px;
      transform: translateX(-50%);  
      font-size: 32px;
      color: rgba( 255, 255, 255, .5)
    }
  }
</style>
