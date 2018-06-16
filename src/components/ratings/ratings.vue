<template>
  <div class="ratings" ref="ratingWrapper">
    <div>
      <div class="overview">
        <div class="left">
          <span class="score">{{seller.score}}</span>
          <span class="title">综合评分</span>
          <span class="rankRate">高于周边商家{{seller.rankRate}}%</span>
        </div>
        <div class="right">
          <div class="text">服务态度
            <star class="star" :size="36" :score="seller.serviceScore" /><span class="score">{{seller.serviceScore}}</span></div>
          <div class="text">商品得分
            <star class="star" :size="36" :score="seller.foodScore" /><span class="score">{{seller.foodScore}}</span></div>
          <div class="text">送达时间<span class="time">{{seller.deliveryTime}}分钟</span></div>
        </div>
      </div>
      <div class="rating-wrapper">
        <rating-select :ratings="ratings" @swichType="chageType" @onlyContent="chageContent" />
        <li v-for="(rating,index) in selectRatings" :key="index" class="rating" v-show="needShow(rating.text)">
          <div class="top">
            <div class="left">
              <span class="avatar">
                  <img class="icon" :src="rating.avatar" width="28" height="28"/>
                </span>
              <div class="userdes-wrapper">
                <span class="username">{{rating.username}}</span>
                <star class="star" :size="24" :score="rating.score" />
                <span class="time" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
            </div>
            <div class="right">{{rating.rateTime}}</div>
          </div>
          <div class="bottom">
            <span class="text">{{rating.text}}</span>
            <div class="commend">
              <i class="icon-thumb" :class="[rating.rateType == 0 ? 'icon-thumb_up' : 'icon-thumb_down']"></i>
              <li v-for="(item, index) in rating.recommend" :key="index" class="recommend">{{item}}</li>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import shopCart from '../shopcart/shopcart'
  import star from '../star/star'
  import ratingSelect from '../ratingselect/ratingSelect'
  const ERO_OK = 0;
  export default {
    name: 'ratings',
    props: {
      seller: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        selectType: 2,
        onlyContent: false,
        ratings: []
      }
    },
    components: {
      shopCart,
      star,
      ratingSelect
    },
    methods: {
      needShow(text) {
        if (this.onlyContent && !text) return false;
        return true;
      },
      chageType(type) {
        this.selectType = type;
      },
      chageContent(bool) {
        this.onlyContent = !this.onlyContent;
      },
    },
    computed: {
      positiveRating() {
        return this.ratings.filter((rating) => rating.rateType == 0);
      },
      negativeRating() {
        return this.ratings.filter((rating) => rating.rateType == 1);
      },
      selectRatings() {
        if (this.selectType == 2) return this.ratings;
        if (this.selectType == 1) return this.positiveRating;
        if (this.selectType == 0) return this.negativeRating;
      }
    },
    created() {
      this.$http.get('/api/ratings').then((res) => {
        res = res.body;
        if (res.errno == ERO_OK) {
          this.ratings = res.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratingWrapper, {
              click: true
            })
          });
        }
      });
    },
  }
</script>

<style lang="scss" scoped>
  .ratings {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    background: #f3f5f7;
    .overview {
      display: flex;
      padding: 18px 24px 18px 0;
      margin-bottom: 18px;
      border-top: 1px solid rgba( 7, 17, 27, .1);
      border-bottom: 1px solid rgba( 7, 17, 27, .1);
      background: #fff;
      .left {
        width: 137.5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid rgba( 7, 17, 27, .1);
        .score {
          font-size: 24px;
          color: rgb( 255, 153, 0);
          line-height: 28px;
          margin-bottom: 6px;
        }
        .title {
          font-size: 12px;
          color: rgb( 7, 17, 27);
          line-height: 12px;
          margin-bottom: 8px;
        }
        .rankRate {
          font-size: 10px;
          color: rgba( 7, 17, 27, .5);
          line-height: 10px;
          margin-bottom: 6px;
        }
      }
      .right {
        flex: 1;
        padding-left: 24px;
        font-size: 0;
        .text {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: rgb( 7, 17, 27);
          height: 18px;
          margin-bottom: 8px;
          .star {
            display: inline-block;
            margin: 0 12px;
          }
          .score {
            font-size: 12px;
            color: rgb( 255, 153, 0);
            line-height: 18px;
          }
          .time {
            font-size: 12px;
            color: rgb( 147, 153, 159);
            line-height: 18px;
            margin-left: 12px;
          }
          &:last-child {
            margin-bottom: 0 !important;
          }
        }
      }
    }
    .rating-wrapper {
      border-top: 1px solid rgba( 7, 17, 27, .1);
      background: #fff;
      padding-top: 6px;
      .rating {
        margin: 0 18px;
        padding: 18px 0;
        border-bottom: 1px solid rgba( 7, 17, 27, .1);
        .top {
          margin-bottom: 6px;
          .left {
            display: inline-block;
            .avatar {
              display: inline-block;
              .icon {
                border-radius: 50%;
              }
            }
            .userdes-wrapper {
              display: inline-block;
              height: 28px;
              margin-left: 12px;
              font-size: 0;
              vertical-align: top;
              .username {
                display: block;
                font-size: 10px;
                color: rgb( 7, 17, 27);
                line-height: 12px;
                margin-bottom: 4px;
              }
              .star {
                display: inline-block;
                margin-right: 6px;
                vertical-align: top;
              }
              .time {
                font-size: 10px;
                font-weight: 200;
                color: rgb( 147, 153, 159);
                line-height: 12px;
                vertical-align: top;
              }
            }
          }
          .right {
            float: right;
            font-size: 10px;
            font-weight: 200;
            color: rgb( 147, 153, 159);
            line-height: 12px;
          }
        }
        .bottom{
          padding-left: 40px;
          .text{
            font-size: 12px;
            color: rgb( 7, 17, 27);
            line-height: 18px;
            margin-bottom: 8px;
          }
          .commend{
            margin-top: 8px;
            height: 16px;
            overflow: hidden;
            .icon-thumb {
              font-size: 12px;
              line-height: 16px;
              &.icon-thumb_up {
                color: rgb( 0, 160, 220);
              }
              &.icon-thumb_down {
                color: rgb( 147, 153, 159);
              }
            }
            .recommend{
              display: inline-block;
              padding: 0 6px;
              margin-left: 8px;
              font-size: 9px;
              color: rgb( 147, 153, 159);
              line-height: 16px;
              border-radius: 2px;
              border: 1px solid rgba( 7, 17, 27,.1);
            }
          }
        }
      }
    }
  }
</style>
