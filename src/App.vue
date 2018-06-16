<template>
  <div id="app">
    <app-header :seller="seller" />
    <app-tab/>
    <div class="content">
      <transition name="scale">
        <keep-alive>
          <router-view @foodList="chageSelectFoods" :seller="seller" />
        </keep-alive>
      </transition>
    </div>
    <cart-control :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></cart-control>
  </div>
</template>

<script>
  import appHeader from './components/header/appHeader'
  import appTab from './components/tab/appTab'
    import cartControl from './components/shopcart/shopcart.vue'
  let ERO_OK = 0;
  export default {
    name: 'App',
    data() {
      return {
        seller: {},
        selectFoods: []
      }
    },
    components: {
      appHeader,
      appTab,
      cartControl
    },
    methods: {
      chageSelectFoods(list) {
        this.selectFoods = list;   
      }
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.errno == ERO_OK) {
          this.seller = res.data;
        }
      });
    }
  }
</script>

<style <style lang="scss">
  @import "./assets/sass/index.scss"
</style>
