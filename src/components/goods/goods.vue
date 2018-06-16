<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in goods" :key="index" :class="{'current':currentIndex===index}" @click="selectMenu(index)">
          <span class="content">
            <span v-if="item.type > 0" class="icon" :class="iconMap[item.type]"></span>
            <span class="text">{{item.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-warpper">
      <div>
        <div class="content-wrapper foods-list-hook" v-for="items in goods" :key="items.name">
          <div class="food-name">{{items.name}}</div>
          <div class="food" v-for="(item,index) in items.foods" :key="index" @click="gotoGoodDetail(item)">
            <div class="left-wrapper">
              <img class="img" :src="item.icon" />
            </div>
            <div class="right-wrapper">
              <h1 class="name">{{item.name}}</h1>
              <div v-if="item.description" class="description">{{item.description}}</div>
              <div class="introdution">
                <span class="sell-count">月售{{item.sellCount}}份</span>
                <span class="rating">好评率{{item.rating}}%</span>
              </div>
              <div class="price-wrapper">
                <span class="price">￥{{item.price}}</span>
                <span v-if="item.oldPrice" class="old-price">￥{{item.oldPrice}}</span>
              </div>
            </div>
            <div class="choose">
              <cart-control :item="item"></cart-control>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="scale">
      <good-detail :good="selectGood" v-show="showGoodDetail" @close="closeDetail()"/>
    </transition>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  import shopcart from '../shopcart/shopcart'
  import cartControl from '../cartcontrol/cartControl'
  import goodDetail from './gooddetail/goodDetail'
  const ERO_OK = 0;
  export default {
    name: 'goods',
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      shopcart,
      cartControl,
      goodDetail
    },
    data() {
      return {
        goods: [],
        heightList: [],
        scrollY: 0,
        selectGood: {},
        showGoodDetail: false
      }
    },
    created() {
      this.iconMap = ['decrease_1', 'discount_1', 'special_1', 'invoice_1', 'guarantee_1'];
      this.$http.get('/api/goods').then((res) => {
        res = res.body;
        if (res.errno == ERO_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this.initScroll();
            this.computeHeight();
          });          
        }
      });
    },
    methods: {
      selectMenu(index) {           
        let foodList = this.$el.children[1].getElementsByClassName('foods-list-hook'),
            el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      initScroll() {
        this.menuScroll = new Bscroll(this.$el.children[0], {
          click: true
        });
        this.foodsScroll = new Bscroll(this.$el.children[1], {
          probeType: 3,
          click: true
        });
        this.foodsScroll.on('scroll',(pos) => {
          this.scrollY = -Math.floor(pos.y);
        })
      },
      computeHeight() {
        let height = 0,
            foodList = this.$el.children[1].getElementsByClassName('foods-list-hook'); 
        this.heightList.push(height);
        for(let i =0; i < foodList.length; i++){
          let item = foodList[i];
          height += item.clientHeight;
          this.heightList.push(height - 5);
        }
      },
      gotoGoodDetail(good) {
        this.showGoodDetail = true;
        this.selectGood = good;
      },
      closeDetail() {
        this.showGoodDetail = false;
      },
      hasSelect() {
        this.$emit('foodList',this.selectFoods);
      }
    },
    computed: {
      currentIndex() {      
        for(let i=0; i<this.heightList.length; i++){
          let top = this.heightList[i],
              bottom = this.heightList[i+1];
          if(!bottom || this.scrollY >= top && this.scrollY < bottom) return i;
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if(food.count){
              foods.push(food);
            }
          })
        });
        return foods;
      }
    },
    watch: {
      selectFoods: function() {
        this.hasSelect();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/common.scss';
  .goods {
    display: flex;
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper {
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        display: table;
        height: 54px;
        padding: 0 12px;
        &.current{
          position: relative;
          margin-top: -2px;
          background: #fff;
          .content{
            border: 0;
            .text{
            font-weight: 700 !important;
            }
          }
        }
        .content {
          display: table-cell;
          vertical-align: middle;
          width: 56px;
          border-bottom: 1px solid rgba( 7, 17, 27, .2);
          font-size: 0;
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            &.decrease_1 {
              @include bg(decrease_3);
            }
            &.discount_1 {
              @include bg(discount_3);
            }
            &.special_1 {
              @include bg(special_3);
            }
            &.invoice_1 {
              @include bg(invoice_3);
            }
            &.guarantee_1 {
              @include bg(guarantee_3);
            }
          }
          .text {
            vertical-align: top;
            font-size: 12px;
            font-weight: 200;
            line-height: 14px; // color: rgb( 240, 20, 20);
          }
        }
      }
    }
    .foods-warpper {
      flex: 1;
      .content-wrapper {
        .food-name {
          height: 26px;
          background: #f3f5f7;
          border-left: 2px solid #d9dde1;
          padding-left: 12px;
          font-size: 12px;
          line-height: 26px;
          color: rgb( 147, 153, 159);
        }
        .food {
          position: relative;
          display: flex;
          padding: 18px 0;
          margin: 0 18px;
          border-bottom: 1px solid rgba( 7, 17, 27, .1);
          &:last-child {
            border-bottom: 0;
          }
          .left-wrapper {
            margin-right: 10px;
            .img {
              width: 60px;
              height: 60px;
              border-radius: 2px;
            }
          }
          .right-wrapper {
            padding-top: 2px;
            .name {
              font-size: 14px;
              line-height: 14px;
              color: rgb( 7, 17, 27);
              margin-bottom: 8px;
            }
            .description {
              margin-bottom: 8px;
              font-size: 10px;
              line-height: 10px;
              color: rgb( 147, 153, 159);
            }
            .introdution {
              font-size: 10px;
              line-height: 10px;
              color: rgb( 147, 153, 159);
              .sell-count {
                margin-right: 12px;
              }
            }
            .price-wrapper {
              font-size: 0;
              .price {
                font-size: 14px;
                color: rgb( 240, 20, 20);
                font-weight: 700;
                line-height: 24px;
                margin-right: 8px;
              }
              .old-price {
                font-size: 10px;
                color: rgb( 147, 153, 159);
                font-weight: 700;
                line-height: 24px;
                vertical-align: top;
                text-decoration: line-through;
              }
            }
          }
          .choose {
            position: absolute;
            bottom: 18px;
            right: 0;
          }
        }
      }
    }
  }
</style>
