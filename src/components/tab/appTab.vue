<template>
  <div class="tab-wrapper">
    <router-link :to="{path:'/goods'}">商品</router-link>
    <router-link :to="{path:'/ratings'}">评论</router-link>
    <router-link :to="{path: '/seller'}">商家</router-link>
  </div>
</template>

<script>
  export default {
    name: 'appTab'
  }
</script>

<style lang="scss" scoped>
  .tab-wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background: #fff;
    border-bottom: solid 1px rgba( 7, 17, 27, 0.2);
    a{
      font-size: 14px;
      color: rgb(77,85,93); 
    }
    .router-link-active{
        color: rgb(240,20,20);
    }
  }
</style>
