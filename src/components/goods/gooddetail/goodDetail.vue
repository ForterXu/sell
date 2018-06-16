<template>
  <div class="good" ref="goodWrapper">
    <div>
      <div class="image">
        <img :src="good.image" width="100%" height="375" />
        <div class="close" @click="closeGoodDetail()">
          <span class="icon-arrow_lift"></span>
        </div>
      </div>
      <div class="good-detail">
        <span class="good-name">{{good.name}}</span>
        <div class="ratings">
          <span class="sell-count">月销售{{good.sellCount}}份</span>
          <span class="rating">好评率{{good.rating}}%</span>
        </div>
        <div class="price">
          <span class="current-price">￥{{good.price}}</span>
          <span v-show="good.oldPrice" class="old-price">￥{{good.oldPrice}}</span>
        </div>
        <cart-control v-if="good.count >= 1" class="add-good" :item="good"></cart-control>
        <div v-else class="add-to-cart" @click="add()">加入购物车</div>
      </div>
      <div class="good-info">
        <span class="title">商品介绍</span>
        <span class="text">{{good.info}}</span>
      </div>
      <div class="good-ratings">
        <span class="title">商品评论</span>
        <rating-select :ratings="good.ratings" :des="{all: '全部',negative: '吐槽',positive: '推荐'}" 
          @swichType="chageType" @onlyContent="chageContent"
        />
          <li v-for="(rating,index) in selectRatings" :key="index" class="rating" v-show="needShow(rating.text)">
            <div class="rating-top">
              <span class="time">{{rating.rateTime}}</span>
              <div class="rater">
                <span class="username">{{rating.username}}</span>
                <span class="avatar">
                      <img :src="rating.avatar" width="12" height="12" class="avatar-img" />
                    </span>
              </div>
            </div>
            <div class="content">
              <span class="icon">
                    <i class="icon-thumb" :class="[rating.rateType == 0 ? 'icon-thumb_up' : 'icon-thumb_down']"></i>
                  </span>
              <span class="text">{{rating.text}}</span>
            </div>
          </li>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import cartControl from '../../cartcontrol/cartControl'
  import ratingSelect from '../../ratingselect/ratingSelect'
  import Vue from 'vue';
  export default {
    name: 'goodDetail',
    props: {
      good: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        selectType: 2,
        onlyContent: false
      }
    },
    components: {
      cartControl,
      ratingSelect
    },
    methods: {
      add() {
        Vue.set(this.good, 'count', 1);
      },
      closeGoodDetail() {
        this.$emit('close');
      },
      needShow(text) {
        if (this.onlyContent && !text) return false;
        return true;
      },
      chageType(type) {
        this.selectType = type;
      },
      chageContent(bool) {
        this.onlyContent = !this.onlyContent;
      }
    },
    computed: {
      positiveRating() {
        return this.good.ratings.filter((rating) => rating.rateType == 0);
      },
      negativeRating() {
        return this.good.ratings.filter((rating) => rating.rateType == 1);
      },
      selectRatings() {
        if (this.selectType == 2) return this.good.ratings;
        if (this.selectType == 1) return this.positiveRating;
        if (this.selectType == 0) return this.negativeRating;
      }
    },
    created() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.goodWrapper, {
          click: true
        })
      });
    }
  }
</script>

<style lang="scss" scoped>
  .good {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 46px;
    width: 100%;
    z-index: 2;
    background: #f3f5f7;
    .image {
      position: relative;
      .close {
        position: absolute;
        left: 10px;
        top: 14px;
        .icon-arrow_lift {
          font-size: 20px;
          color: rgb( 255, 255, 255);
        }
      }
    }
    .good-detail {
      position: relative;
      padding: 18px;
      background: #fff;
      border-bottom: 1px solid rgba( 7, 17, 27, .1);
      .good-name {
        font-size: 14px;
        font-weight: 700;
        color: rgb( 7, 17, 27);
        line-height: 14px;
      }
      .ratings {
        margin: 8px 0 18px 0;
        font-size: 0;
        color: rgb( 147, 153, 159);
        .sell-count {
          font-size: 10px;
          line-height: 10px;
          margin-right: 12px;
        }
        .rating {
          font-size: 10px;
          line-height: 10px;
        }
      }
      .price {
        font-size: 0;
        font-weight: 700;
        .current-price {
          font-size: 14px;
          color: rgb( 240, 20, 20);
          margin-right: 12px;
          line-height: 24px;
        }
        .old-price {
          vertical-align: top;
          font-size: 10px;
          color: rgb( 147, 153, 159);
          line-height: 24px;
          text-decoration: line-through;
        }
      }
      .add-good {
        position: absolute;
        bottom: 15px;
        right: 18px;
      }
      .add-to-cart {
        position: absolute;
        bottom: 15px;
        right: 18px;
        height: 24px;
        width: 74px;
        border-radius: 12px;
        background: rgb( 0, 160, 220);
        font-size: 10px;
        color: rgb( 255, 255, 255);
        line-height: 24px;
        text-align: center;
        cursor: pointer;
      }
    }
    .good-info {
      padding: 18px;
      margin-top: 16px;
      background: #fff;
      border-top: 1px solid rgba( 7, 17, 27, .1);
      border-bottom: 1px solid rgba( 7, 17, 27, .1);
      .title {
        display: block;
        font-size: 14px;
        color: #000;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .text {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(77, 85, 93);
        line-height: 24px;
      }
    }
    .good-ratings {
      margin-top: 16px;
      background: #fff;
      border-top: 1px solid rgba( 7, 17, 27, .1);
      .title {
        display: block;
        font-size: 14px;
        color: #000;
        font-weight: 700;
        padding-bottom: 6px;
        margin: 18px 0 0 18px;
      }
      .rating {
      padding: 12px 18px;
      border-bottom: 1px solid rgba( 7, 17, 27, .1);
      .rating-top {
        margin-bottom: 6px;
        .time {
          display: inline-block;
          font-size: 10px;
          color: rgb( 147, 153, 159);
          line-height: 12px;
          vertical-align: top;
        }
        .rater {
          float: right;
          font-size: 0;
          .username {
            display: inline-block;
            font-size: 10px;
            color: rgb( 147, 153, 159);
            line-height: 12px;
            vertical-align: top;
            margin-right: 6px;
          }
          .avatar {
            display: inline-block;
            .avatar-img {
              border-radius: 50%;
            }
          }
        }
      }
      .content {
        font-size: 0;
        .icon {
          margin-right: 4px;
          .icon-thumb {
            font-size: 12px;
            line-height: 24px;
            &.icon-thumb_up {
              color: rgb( 0, 160, 220);
            }
            &.icon-thumb_down {
              color: rgb( 147, 153, 159);
            }
          }
        }
        .text {
          font-size: 12px;
          color: rgb( 7, 17, 27);
          line-height: 16px;
        }
      }
    }
    }
  }
</style>
