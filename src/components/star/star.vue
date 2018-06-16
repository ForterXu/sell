<template>
  <div class="star" :class="starSize">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const LENGTH = 5,
  STAR_ON = 'on',
  STAR_HALF = 'hafl',
  STAR_OFF = 'off';

  export default {
    name: 'star',
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starSize() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [],
            score = Math.floor(this.score * 2) / 2,
            hasHafl = score % 1,
            hasOn = Math.floor(score);
        for(let i = 0;i < hasOn; i++){
          result.push(STAR_ON);
        }
        if(hasHafl){
          result.push(STAR_HALF);
        } 
        if(result.length < LENGTH){
          result.push(STAR_OFF);
        }
        return result;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/common.scss';
  .star {
    font-size: 0;
    .star-item {
      display: inline-block;
    }
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg(star48_on);
        }
        &.half {
          @include bg(star48_half);
        }
        &.off {
          @include bg(star48_off);
        }
      }
    }
    &.star-36 {
      .star-item {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg(star36_on);
        }
        &.half {
          @include bg(star36_half);
        }
        &.off {
          @include bg(star36_off);
        }
      }
    }
    &.star-24 {
      .star-item {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg(star24_on);
        }
        &.half {
          @include bg(star24_half);
        }
        &.off {
          @include bg(star24_off);
        }
      }
    }
  }
</style>
