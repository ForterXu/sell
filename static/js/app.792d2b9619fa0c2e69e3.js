webpackJsonp([0],{0:function(t,s){},"25GQ":function(t,s){},"44ps":function(t,s){},"5jYY":function(t,s){},"7gSa":function(t,s){},D58G:function(t,s){},HgD1:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starSize:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1,i=Math.floor(s),a=0;a<i;a++)t.push("on");return e&&t.push("hafl"),t.length<5&&t.push("off"),t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starSize},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var o=e("VU/8")(a,n,!1,function(t){e("PyBi")},"data-v-2063d0a5",null).exports,c={name:"detial",props:["seller","iconMap"],components:{star:o},methods:{close:function(){this.$emit("closeDetial")}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detial"},[e("div",{staticClass:"detial-wrapper"},[e("div",{staticClass:"main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"supports-wrapper"},t._l(t.seller.supports,function(s,i){return t.seller.supports?e("div",{key:i,staticClass:"support"},[e("span",{staticClass:"icon",class:t.iconMap[s.type]}),t._v(" "),e("span",{staticClass:"support-text"},[t._v(t._s(s.description))])]):t._e()})),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"close icon-close",on:{click:function(s){t.close()}}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("h1",{staticClass:"title-text"},[this._v("优惠信息")]),this._v(" "),s("div",{staticClass:"line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),this._v(" "),s("h1",{staticClass:"title-text"},[this._v("商家公告")]),this._v(" "),s("div",{staticClass:"line"})])}]};var l={name:"appHeader",components:{detial:e("VU/8")(c,r,!1,function(t){e("meSJ")},"data-v-6eb9f0b6",null).exports},props:{seller:{type:Object}},data:function(){return{isShowDetial:!1}},methods:{showDetial:function(){this.isShowDetial=!this.isShowDetial},closeDetial:function(){this.isShowDetial=!1}},created:function(){this.iconMap=["decrease_1","discount_1","special_1","invoice_1","guarantee_1"]}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app-header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:"商家图标"}})]),t._v(" "),e("div",{staticClass:"introdution"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.iconMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports-count",on:{click:function(s){t.showDetial()}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin"},[e("span",{staticClass:"bulletin-logo"}),t._v(" "),e("span",{staticClass:"bulletin-content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("span",{staticClass:"more icon-keyboard_arrow_right",on:{click:function(s){t.showDetial()}}})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"scale"}},[e("detial",{directives:[{name:"show",rawName:"v-show",value:t.isShowDetial,expression:"isShowDetial"}],attrs:{seller:t.seller,iconMap:t.iconMap},on:{closeDetial:function(s){t.closeDetial()}}})],1)],1)},staticRenderFns:[]};var p=e("VU/8")(l,v,!1,function(t){e("7gSa")},"data-v-9a1df6f0",null).exports,d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tab-wrapper"},[s("router-link",{attrs:{to:{path:"/goods"}}},[this._v("商品")]),this._v(" "),s("router-link",{attrs:{to:{path:"/ratings"}}},[this._v("评论")]),this._v(" "),s("router-link",{attrs:{to:{path:"/seller"}}},[this._v("商家")])],1)},staticRenderFns:[]};var u=e("VU/8")({name:"appTab"},d,!1,function(t){e("5jYY")},"data-v-52ee3b28",null).exports,h=e("GQaK"),_={name:"cartControl",props:{item:{type:Object,default:{}}},methods:{addFood:function(t){t._constructed&&(this.item.count?this.item.count++:i.a.set(this.item,"count",1))},removeFood:function(t){t._constructed&&this.item.count--}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-control"},[e("transition",{attrs:{name:"showremovebtn"}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.item.count,expression:"item.count"}],staticClass:"remove icon-remove_circle_outline",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.removeFood(s)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.item.count,expression:"item.count"}],staticClass:"count"},[t._v(t._s(t.item.count))]),t._v(" "),e("i",{staticClass:"add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFood(s)}}})],1)},staticRenderFns:[]};var C=e("VU/8")(_,f,!1,function(t){e("V0tf")},"data-v-135c5752",null).exports,m={name:"shopcart",data:function(){return{showDetail:!0}},components:{cartControl:C},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},countNum:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},currentMinPrice:function(){var t=this.minPrice-this.totalPrice;return 0===this.totalPrice?"￥"+this.minPrice+"起送":t>0?"还差￥"+t+"起送":"去结算"},isDetail:function(){var t=this;if(!this.countNum)return this.showDetail=!0,!1;var s=!this.showDetail;return s&&(this.scroll?this.scroll.refresh():this.$nextTick(function(){t.scroll=new h.a(t.$refs.contentWrapperHook,{click:!0})})),s}},methods:{clearAll:function(){this.selectFoods.forEach(function(t){return t.count=0})},listShow:function(){this.showDetail=!this.showDetail},pay:function(){this.totalPrice>this.minPrice&&window.alert("您需要支付"+this.totalPrice+"元")}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo"},[e("span",{staticClass:"shop-icon",class:{"has-food":t.totalPrice},on:{click:function(s){t.listShow()}}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.countNum,expression:"countNum"}],staticClass:"num"},[t._v(t._s(t.countNum))])]),t._v(" "),e("span",{staticClass:"count"},[t._v("￥"+t._s(t.totalPrice))]),e("span",{staticClass:"text"},[t._v("另需￥"+t._s(t.deliveryPrice)+"元配送费")])]),t._v(" "),e("div",{staticClass:"content-right",class:{"can-pay":"去结算"===t.currentMinPrice},on:{click:function(s){t.pay()}}},[e("span",{staticClass:"pay"},[t._v(t._s(t.currentMinPrice))])])]),t._v(" "),e("transition",{attrs:{name:"fade-up"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetail,expression:"isDetail"}],staticClass:"cart-detail"},[e("div",{staticClass:"cart-content"},[e("div",{staticClass:"top"},[e("h1",{staticClass:"top-name"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"clear",on:{click:function(s){t.clearAll()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"contentWrapperHook",staticClass:"content-wrapper"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food-item"},[e("span",{staticClass:"food-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"food-price"},[t._v("￥"+t._s(s.price*s.count))]),t._v(" "),e("div",{staticClass:"control"},[e("cart-control",{attrs:{item:s}})],1)])}))])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetail,expression:"isDetail"}],staticClass:"bg",class:{showBG:t.isDetail},on:{click:function(s){t.listShow()}}})],1)},staticRenderFns:[]};var w=e("VU/8")(m,g,!1,function(t){e("44ps")},"data-v-5ea26e66",null).exports,y={name:"App",data:function(){return{seller:{},selectFoods:[]}},components:{appHeader:p,appTab:u,cartControl:w},methods:{chageSelectFoods:function(t){this.selectFoods=t}},created:function(){var t=this;this.$http.get("/static/data.json").then(function(s){0==(s=s.body).errno&&(t.seller=s.data.seller)})}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("app-header",{attrs:{seller:t.seller}}),t._v(" "),e("app-tab"),t._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"scale"}},[e("keep-alive",[e("router-view",{attrs:{seller:t.seller},on:{foodList:t.chageSelectFoods}})],1)],1)],1),t._v(" "),e("cart-control",{attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}})],1)},staticRenderFns:[]};var x=e("VU/8")(y,k,!1,function(t){e("25GQ")},null,null).exports,T=e("/ocq"),b={name:"seller",props:{seller:{type:Object,default:{}}},components:{star:o},data:function(){return{isFacorite:!0,iconMap:[]}},methods:{toLike:function(){this.isFacorite=!this.isFacorite}},watch:{seller:function(){var t=this;if(this.scroll?this.scroll.refresh():his.$nextTick(function(){t.scroll=new h.a(t.$refs.sellerWrapper,{click:!0})}),this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.picScroll=new h.a(this.$refs.picWrapper,{scrollX:!0,stopPropagation:!0})}}},created:function(){var t=this;this.iconMap=["decrease_1","discount_1","special_1","invoice_1","guarantee_1"],this.$nextTick(function(){t.scroll=new h.a(t.$refs.sellerWrapper,{click:!0})})}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller"},[e("div",[e("div",{staticClass:"seller-info"},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count count"},[t._v("月销售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"right"},[e("i",{staticClass:"icon-favorite",class:{"is-favorite":t.isFacorite},on:{click:function(s){t.toLike()}}}),t._v(" "),t.isFacorite?e("span",{staticClass:"des"},[t._v("已收藏")]):e("span",{staticClass:"des"},[t._v("请收藏")])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"info"},[e("span",{staticClass:"title"},[t._v("起送价")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.seller.minPrice)),e("span",{staticClass:"text"},[t._v("元")])])]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"title"},[t._v("商家配送")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.seller.deliveryPrice)),e("span",{staticClass:"text"},[t._v("元")])])]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"title"},[t._v("平均配送时间")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.seller.deliveryTime)),e("span",{staticClass:"text"},[t._v("分钟")])])])])]),t._v(" "),e("div",{staticClass:"seller-bulletin"},[e("div",{staticClass:"content"},[e("span",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support"},[e("span",{staticClass:"icon",class:t.iconMap[s.type]}),t._v(" "),e("span",{staticClass:"des"},[t._v(t._s(s.description))])])})],2),t._v(" "),e("div",{staticClass:"seller-pic"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("div",{staticClass:"seller-des"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info"},[t._v(t._s(s))])})],2)])])},staticRenderFns:[]};var D=e("VU/8")(b,S,!1,function(t){e("mTkH")},"data-v-1ce4dba9",null).exports,$={name:"ratingSelect",props:{ratings:{type:Array,default:function(){return[]}},onlyContent:{type:Boolean,default:!1},selectType:{type:Number,default:2},des:{type:Object,default:function(){return{all:"全部",negative:"不满意",positive:"满意"}}}},data:function(){return{innerOnlyContent:this.onlyContent,innerSelectType:this.selectType}},computed:{positiveRating:function(){return this.ratings.filter(function(t){return 0==t.rateType})},negativeRating:function(){return this.ratings.filter(function(t){return 1==t.rateType})}},methods:{swich:function(t){this.innerSelectType=t,this.$emit("swichType",t)},showContent:function(){this.innerOnlyContent=!this.innerOnlyContent,this.$emit("onlyContent",this.innerOnlyContent)}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"rating-info"},[e("div",{staticClass:"choose-rating"},[e("span",{staticClass:"choose",class:{on:2==t.innerSelectType},on:{click:function(s){t.swich(2)}}},[t._v(t._s(t.des.all)),e("span",{staticClass:"num"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"choose",class:{on:1==t.innerSelectType},on:{click:function(s){t.swich(1)}}},[t._v(t._s(t.des.positive)),e("span",{staticClass:"num"},[t._v(t._s(t.positiveRating.length))])]),t._v(" "),e("span",{staticClass:"choose",class:{negativeOn:0==t.innerSelectType},on:{click:function(s){t.swich(0)}}},[t._v(t._s(t.des.negative)),e("span",{staticClass:"num"},[t._v(t._s(t.negativeRating.length))])])]),t._v(" "),e("span",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"has-content"},[e("span",{staticClass:"icon",class:{iconOn:t.innerOnlyContent},on:{click:function(s){t.showContent()}}},[e("i",{staticClass:"icon-check_circle"})]),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])])},staticRenderFns:[]};var P=e("VU/8")($,F,!1,function(t){e("HgD1")},"data-v-862b982a",null).exports,R={name:"goodDetail",props:{good:{type:Object,default:{}}},data:function(){return{selectType:2,onlyContent:!1}},components:{cartControl:C,ratingSelect:P},methods:{add:function(){i.a.set(this.good,"count",1)},closeGoodDetail:function(){this.$emit("close")},needShow:function(t){return!(this.onlyContent&&!t)},chageType:function(t){this.selectType=t},chageContent:function(t){this.onlyContent=!this.onlyContent}},computed:{positiveRating:function(){return this.good.ratings.filter(function(t){return 0==t.rateType})},negativeRating:function(){return this.good.ratings.filter(function(t){return 1==t.rateType})},selectRatings:function(){return 2==this.selectType?this.good.ratings:1==this.selectType?this.positiveRating:0==this.selectType?this.negativeRating:void 0}},created:function(){var t=this;this.$nextTick(function(){t.scroll=new h.a(t.$refs.goodWrapper,{click:!0})})}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"goodWrapper",staticClass:"good"},[e("div",[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.good.image,width:"100%",height:"375"}}),t._v(" "),e("div",{staticClass:"close",on:{click:function(s){t.closeGoodDetail()}}},[e("span",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"good-detail"},[e("span",{staticClass:"good-name"},[t._v(t._s(t.good.name))]),t._v(" "),e("div",{staticClass:"ratings"},[e("span",{staticClass:"sell-count"},[t._v("月销售"+t._s(t.good.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.good.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"current-price"},[t._v("￥"+t._s(t.good.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.good.oldPrice,expression:"good.oldPrice"}],staticClass:"old-price"},[t._v("￥"+t._s(t.good.oldPrice))])]),t._v(" "),t.good.count>=1?e("cart-control",{staticClass:"add-good",attrs:{item:t.good}}):e("div",{staticClass:"add-to-cart",on:{click:function(s){t.add()}}},[t._v("加入购物车")])],1),t._v(" "),e("div",{staticClass:"good-info"},[e("span",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.good.info))])]),t._v(" "),e("div",{staticClass:"good-ratings"},[e("span",{staticClass:"title"},[t._v("商品评论")]),t._v(" "),e("rating-select",{attrs:{ratings:t.good.ratings,des:{all:"全部",negative:"吐槽",positive:"推荐"}},on:{swichType:t.chageType,onlyContent:t.chageContent}}),t._v(" "),t._l(t.selectRatings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.text),expression:"needShow(rating.text)"}],key:i,staticClass:"rating"},[e("div",{staticClass:"rating-top"},[e("span",{staticClass:"time"},[t._v(t._s(s.rateTime))]),t._v(" "),e("div",{staticClass:"rater"},[e("span",{staticClass:"username"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{staticClass:"avatar-img",attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"icon-thumb",class:[0==s.rateType?"icon-thumb_up":"icon-thumb_down"]})]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])})],2)])])},staticRenderFns:[]};var E=e("VU/8")(R,N,!1,function(t){e("D58G")},"data-v-9bf1bffa",null).exports,M={name:"goods",props:{seller:{type:Object}},components:{shopcart:w,cartControl:C,goodDetail:E},data:function(){return{goods:[],heightList:[],scrollY:0,selectGood:{},showGoodDetail:!1}},created:function(){var t=this;this.iconMap=["decrease_1","discount_1","special_1","invoice_1","guarantee_1"],this.$http.get("/static/data.json").then(function(s){0==(s=s.body).errno&&(t.goods=s.data.goods,t.$nextTick(function(){t.initScroll(),t.computeHeight()}))})},methods:{selectMenu:function(t){var s=this.$el.children[1].getElementsByClassName("foods-list-hook")[t];this.foodsScroll.scrollToElement(s,300)},initScroll:function(){var t=this;this.menuScroll=new h.a(this.$el.children[0],{click:!0}),this.foodsScroll=new h.a(this.$el.children[1],{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=-Math.floor(s.y)})},computeHeight:function(){var t=0,s=this.$el.children[1].getElementsByClassName("foods-list-hook");this.heightList.push(t);for(var e=0;e<s.length;e++){t+=s[e].clientHeight,this.heightList.push(t-5)}},gotoGoodDetail:function(t){this.showGoodDetail=!0,this.selectGood=t},closeDetail:function(){this.showGoodDetail=!1},hasSelect:function(){this.$emit("foodList",this.selectFoods)}},computed:{currentIndex:function(){for(var t=0;t<this.heightList.length;t++){var s=this.heightList[t],e=this.heightList[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},watch:{selectFoods:function(){this.hasSelect()}}},G={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"content"},[s.type>0?e("span",{staticClass:"icon",class:t.iconMap[s.type]}):t._e(),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.name))])])])}))]),t._v(" "),e("div",{staticClass:"foods-warpper"},[e("div",t._l(t.goods,function(s){return e("div",{key:s.name,staticClass:"content-wrapper foods-list-hook"},[e("div",{staticClass:"food-name"},[t._v(t._s(s.name))]),t._v(" "),t._l(s.foods,function(s,i){return e("div",{key:i,staticClass:"food",on:{click:function(e){t.gotoGoodDetail(s)}}},[e("div",{staticClass:"left-wrapper"},[e("img",{staticClass:"img",attrs:{src:s.icon}})]),t._v(" "),e("div",{staticClass:"right-wrapper"},[e("h1",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),s.description?e("div",{staticClass:"description"},[t._v(t._s(s.description))]):t._e(),t._v(" "),e("div",{staticClass:"introdution"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price-wrapper"},[e("span",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),t._v(" "),s.oldPrice?e("span",{staticClass:"old-price"},[t._v("￥"+t._s(s.oldPrice))]):t._e()])]),t._v(" "),e("div",{staticClass:"choose"},[e("cart-control",{attrs:{item:s}})],1)])})],2)}))]),t._v(" "),e("transition",{attrs:{name:"scale"}},[e("good-detail",{directives:[{name:"show",rawName:"v-show",value:t.showGoodDetail,expression:"showGoodDetail"}],attrs:{good:t.selectGood},on:{close:function(s){t.closeDetail()}}})],1)],1)},staticRenderFns:[]};var O=e("VU/8")(M,G,!1,function(t){e("fCUk")},"data-v-29a5e863",null).exports,U={name:"ratings",props:{seller:{type:Object,default:{}}},data:function(){return{selectType:2,onlyContent:!1,ratings:[]}},components:{shopCart:w,star:o,ratingSelect:P},methods:{needShow:function(t){return!(this.onlyContent&&!t)},chageType:function(t){this.selectType=t},chageContent:function(t){this.onlyContent=!this.onlyContent}},computed:{positiveRating:function(){return this.ratings.filter(function(t){return 0==t.rateType})},negativeRating:function(){return this.ratings.filter(function(t){return 1==t.rateType})},selectRatings:function(){return 2==this.selectType?this.ratings:1==this.selectType?this.positiveRating:0==this.selectType?this.negativeRating:void 0}},created:function(){var t=this;this.$http.get("/static/data.json").then(function(s){0==(s=s.body).errno&&(t.ratings=s.data.ratings,t.$nextTick(function(){t.scroll=new h.a(t.$refs.ratingWrapper,{click:!0})}))})}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingWrapper",staticClass:"ratings"},[e("div",[e("div",{staticClass:"overview"},[e("div",{staticClass:"left"},[e("span",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("span",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("span",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"text"},[t._v("服务态度\n          "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"text"},[t._v("商品得分\n          "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"text"},[t._v("送达时间"),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("rating-select",{attrs:{ratings:t.ratings},on:{swichType:t.chageType,onlyContent:t.chageContent}}),t._v(" "),t._l(t.selectRatings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.text),expression:"needShow(rating.text)"}],key:i,staticClass:"rating"},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[e("span",{staticClass:"avatar"},[e("img",{staticClass:"icon",attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"userdes-wrapper"},[e("span",{staticClass:"username"},[t._v(t._s(s.username))]),t._v(" "),e("star",{staticClass:"star",attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"time"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1)]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(s.rateTime))])]),t._v(" "),e("div",{staticClass:"bottom"},[e("span",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"commend"},[e("i",{staticClass:"icon-thumb",class:[0==s.rateType?"icon-thumb_up":"icon-thumb_down"]}),t._v(" "),t._l(s.recommend,function(s,i){return e("li",{key:i,staticClass:"recommend"},[t._v(t._s(s))])})],2)])])})],2)])])},staticRenderFns:[]};var j=e("VU/8")(U,V,!1,function(t){e("emKN")},"data-v-81960454",null).exports;i.a.use(T.a);var H=new T.a({mode:"history",routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:O},{path:"/goods",component:O},{path:"/seller",component:D},{path:"/ratings",component:j}]}),L=e("8+8L");i.a.config.productionTip=!1,i.a.config.devtools=!0,i.a.use(L.a),new i.a({el:"#app",router:H,components:{App:x},template:"<App/>"})},PyBi:function(t,s){},V0tf:function(t,s){},emKN:function(t,s){},fCUk:function(t,s){},mTkH:function(t,s){},meSJ:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.792d2b9619fa0c2e69e3.js.map