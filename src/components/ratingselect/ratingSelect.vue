<template>
  <div>
    <div class="rating-info">
      <div class="choose-rating">
        <span class="choose" @click="swich(2)" :class="{'on':innerSelectType == 2}">{{des.all}}<span class="num">{{ratings.length}}</span></span>
        <span class="choose" @click="swich(1)" :class="{'on':innerSelectType == 1}">{{des.positive}}<span class="num">{{positiveRating.length}}</span></span>
        <span class="choose" @click="swich(0)" :class="{'negativeOn':innerSelectType == 0}">{{des.negative}}<span class="num">{{negativeRating.length}}</span></span>
      </div>
      <span class="line"></span>
      <div class="has-content">
        <span class="icon" @click="showContent()" :class="{'iconOn':innerOnlyContent}">
            <i class="icon-check_circle"></i>
          </span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>

<script>
  const ALL = 2,
    NEGATIVE = 1,
    POSITIVE = 0;
  export default {
    name: 'ratingSelect',
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      selectType: {
        type: Number,
        default: ALL
      },
      des: {
        type: Object,
        default () {
          return {
            all: '全部',
            negative: '不满意',
            positive: '满意'
          }
        }
      }
    },
    data() {
      return {
        innerOnlyContent: this.onlyContent,
        innerSelectType: this.selectType
      }
    },
    computed: {
      positiveRating() {
        return this.ratings.filter((rating) => rating.rateType == 0);
      },
      negativeRating() {
        return this.ratings.filter((rating) => rating.rateType == 1);
      }
    },
    methods: {
      swich(type) {
        this.innerSelectType = type;
        this.$emit('swichType', type);
      },
      showContent() {
        this.innerOnlyContent = !this.innerOnlyContent;
        this.$emit('onlyContent',this.innerOnlyContent);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rating-info {
    padding: 0 18px 0 18px;
    border-bottom: 1px solid rgba( 7, 17, 27, .1);
    .choose-rating {
      padding: 12px 0 18px 0;
      .choose {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        border-radius: 2px;
        font-size: 12px;
        color: #fff;
        line-height: 16px;
        &:nth-child(1),
        &:nth-child(2) {
          color: rgb( 77, 85, 93);
          background: rgba( 0, 160, 220, .2);
        }
        &:nth-child(3) {
          color: rgb( 77, 85, 93);
          background: rgba( 77, 85, 93, .2);
        }
        &.on {
          color: #fff;
          background: rgb( 0, 160, 220);
        }
        &.negativeOn {
          background: rgba( 77, 85, 93, .6);
        }
        .num {
          font-size: 8px;
          line-height: 16px;
          margin-left: 4px;
        }
      }
    }
    .line {
      display: block;
      height: 1px;
      width: 100%;
      background: rgba( 7, 17, 27, .1);
    }
    .has-content {
      padding: 12px 0;
      font-size: 0;
      .icon {
        display: inline-block;
        margin-right: 4px;
        color: rgb( 147, 153, 159);
        .icon-check_circle {
          font-size: 24px;
          line-height: 24px;
        }
        &.iconOn {
          color: #00b43c;
        }
      }
      .text {
        display: inline-block;
        font-size: 12px;
        color: rgb( 147, 153, 159);
        line-height: 24px;
        vertical-align: top;
      }
    }
  }
</style>
