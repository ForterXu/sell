<template>
  <div class="seller" ref="sellerWrapper">
    <div>
      <div class="seller-info">
        <div class="top">
          <div class="left">
            <span class="name">{{seller.name}}</span>
            <star :size="36" :score="seller.score" class="star" />
            <span class="rate-count count">({{seller.ratingCount}})</span>
            <span class="sell-count count">月销售{{seller.sellCount}}单</span>
          </div>
          <div class="right">
            <i class="icon-favorite" :class="{'is-favorite':isFacorite}" @click="toLike()"></i>
            <span v-if="isFacorite" class="des">已收藏</span>
            <span v-else class="des">请收藏</span>
          </div>
        </div>
        <div class="bottom">
          <div class="info">
            <span class="title">起送价</span>
            <span class="content">{{seller.minPrice}}<span class="text">元</span></span>
          </div>
          <div class="info">
            <span class="title">商家配送</span>
            <span class="content">{{seller.deliveryPrice}}<span class="text">元</span></span>
          </div>
          <div class="info">
            <span class="title">平均配送时间</span>
            <span class="content">{{seller.deliveryTime}}<span class="text">分钟</span></span>
          </div>
        </div>

      </div>
      <div class="seller-bulletin">
        <div class="content">
          <span class="title">公告与活动</span>
          <span class="text">{{seller.bulletin}}</span>
        </div>
        <li v-for="(item,index) in seller.supports" :key="index" class="support">
          <span class="icon" :class="iconMap[item.type]"></span>
          <span class="des">{{item.description}}</span>
        </li>
      </div>
      <div class="seller-pic">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li v-for="(item, index) in seller.pics" :key="index" class="pic">
              <img :src="item" width="120" height="90"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="seller-des">
        <h1 class="title">商家信息</h1>
        <li v-for="(item, index) in seller.infos" :key="index" class="info">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
import BScroll from 'better-scroll'
export default {
  name: 'seller',
  props: {
    seller: {
      type: Object,
      default: {}
    }
  },
  components: {
    star
  },
  data() {
    return {
      isFacorite: true,
      iconMap: []
    }
  },
  methods: {
    toLike() {
      this.isFacorite = !this.isFacorite;
    }
  },
  watch: {
    'seller'() {
      if(!this.scroll){
        his.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.sellerWrapper,{
              click: true
            })
          });          
      }else{
        this.scroll.refresh();
      }
      if(this.seller.pics){
            let picW = 120,
                margin = 6;
            let w = (picW + margin)*this.seller.pics.length - margin;
            this.$refs.picList.style.width = w + 'px';

            this.picScroll = new BScroll(this.$refs.picWrapper,{
              scrollX: true,
              stopPropagation: true
            })
          }
    }
  },
    created() {
      this.iconMap = ['decrease_1', 'discount_1', 'special_1', 'invoice_1', 'guarantee_1'];
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.sellerWrapper,{
              click: true
            })
          });          
          
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/index.scss';
.seller{
  position: absolute;
  width: 100%;
  top: 174px;
  bottom: 46px;
  overflow: hidden;
  background: #f3f5f7;
  border-bottom: 1px solid rgba( 7,17,27,.1);
  border-top: 1px solid rgba( 7,17,27,.1);
  .seller-info{
    padding: 18px;
    background: #fff;
    .top{
      padding-bottom: 18px;
      border-bottom: 1px solid rgba( 7,17,27,.1);
      .left{
        display: inline-block;
        font-size: 0;
        .name{
          display: block;
          font-size: 14px;
          color: rgb( 7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        .star{
          display: inline-block;
        }
        .count{
          font-size: 10px;
          color: rgb(77,85,93);
          line-height: 18px;
          vertical-align: top;
        }
        .rate-count{
          margin-left: 8px;
        }
        .sell-count{
          margin-left: 12px;
        }
      }
      .right{
        float: right;
        font-size: 0;
        text-align: center;
        .icon-favorite{
          display: block;
          font-size: 24px;
          color: rgba( 7,17,27,.5);
          line-height: 24px;
          margin-bottom: 4px;
          &.is-favorite{
            color: rgb( 240,20,20);
          }
        }
        .des{
          font-size: 10px;
          color: rgb(77,85,93);
          line-height: 10px;
        }
      }
    }
    .bottom{
      padding-top: 18px;
      display: flex;
      .info{
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba( 7,17,27,.5);
        .title{
          display: block;
          font-size: 10px;
          color: rgb(147,153,159);
          line-height: 10px;
          margin-bottom: 4px;
        }
        .content{
          display: block;
          font-size: 24px;
          font-weight: 500;
          color: rgb( 7,17,27);
          line-height: 24px;
          .text{
            font-size: 10px;
          }
        }
        &:last-child{
          border: 0;
        }
      }
    }
  }
  .seller-bulletin{
    padding: 18px 18px 0 18px;
    margin-top: 16px;
    background: #fff;
    border-bottom: 1px solid rgba( 7,17,27,.1);
    border-top: 1px solid rgba( 7,17,27,.1);
    .content{
      padding-bottom: 16px;
      border-bottom: 1.5px solid rgba( 7,17,27,.1);
      .title{
        display: block;
        display: block;
          font-size: 14px;
          color: rgb( 7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
      }
      .text{
        display: block;
        padding: 0 12px;
        font-size: 12px;
        font-weight: 200;
        color: rgb( 240,20,20);
        line-height: 24px;
      }
    }
    .support{
      display: block;
      padding: 16px 12px;
      border-bottom: 1px solid rgba( 7,17,27,.1);
      font-size: 0;
      .icon {
        display: inline-block;
        margin-right: 6px;
        width: 16px;
        height: 16px;
        &.decrease_1 {
          @include bg(decrease_4);
        }
        &.discount_1 {
          @include bg(discount_4);
        }
        &.special_1 {
          @include bg(special_4);
        }
        &.invoice_1 {
          @include bg(invoice_4);
        }
        &.guarantee_1 {
          @include bg(guarantee_4);
        }
      }
      .des{
        font-size: 12px;
        font-weight: 200;
        color: rgb( 7,17,27);
        line-height: 16px;
        vertical-align: top;
      }
    
    
    
    }
  }
  .seller-pic{
    margin-top: 16px;
    padding: 18px 0 18px 18px;
    border-bottom: 1.5px solid rgba( 7,17,27,.1);
    border-top: 1px solid rgba( 7,17,27,.1);
    background: #fff;
    .title{
      font-size: 14px;
      color: rgb( 7,17,27);
      line-height: 14px;
      margin-bottom: 12px;
    }
    .pic-wrapper{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .pic-list{
        height: 90px;
        font-size: 0;
        .pic{
          display: inline-block;
          margin-right: 6px;
        }
        &:last-child{
          margin: 0;
        }
      }
    }
  }
  .seller-des{
    margin-top: 16px;
    padding: 18px 18px 0 18px;
    border-bottom: 1px solid rgba( 7,17,27,.1);
    border-top: 1px solid rgba( 7,17,27,.1);
    background: #fff;
    .title{
      font-size: 14px;
      color: rgb( 7,17,27);
      line-height: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba( 7,17,27,.1);
    }
    .info{
      padding: 16px 12px;
      font-size: 12px;
      font-weight: 200;
      color: rgb( 7,17,27);
      line-height: 16px;
      vertical-align: top;
      border-bottom: 1px solid rgba( 7,17,27,.1);
    }
    &:last-child{
      border: 0;
    }
  }
}
</style>
