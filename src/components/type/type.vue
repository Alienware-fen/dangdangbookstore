<template>
    <div class="type">
        <div class="warp-nav">
            <img src="../../assets/img/login/back.png" @click="goBack()">
            <router-link to="/search" class="warp-search">
                <svg class="icon icon-position" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <input type="text" placeholder="搜索商品/店铺/种类">
            </router-link>
            <router-link to="/type" class="warp-type">
                <img src="../../assets/img/login/more.png" >
            </router-link>
        </div>
        <div class="warp-all">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in title" :key=index :class="{'active':Index==index}" @click="Index=index">
                        <router-link :to="'/typeItem/'+item.id">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../../assets/css/index/type/type.less';
</style>
<script>
export default {
    data(){
        return{
            title:[
                {name:"图书",id:"1"},{name:"童书",id:"2"},{name:"旧书/拍卖",id:"3"},{name:"女装",id:"4"},{name:"手机数码",id:"5"},
                {name:"创意文具",id:"6"},{name:"电子书",id:"7"},{name:"电脑办公",id:"8"},{name:"童装童鞋",id:"9"},{name:"男女鞋",id:"10"},
                {name:"食品生鲜",id:"11"},{name:"运动户外",id:"12"},{name:"男装",id:"13"},{name:"母婴玩具",id:"14"},{name:"手表眼镜",id:"15"},
                {name:"美妆个护",id:"16"},{name:"家用电器",id:"17"},{name:"网络文学",id:"18"},{name:"箱包皮具",id:"19"},{name:"内衣配饰",id:"20"},
                {name:"营养保健",id:"21"},{name:"汽车用品",id:"22"},{name:"珠宝饰品",id:"23"},{name:"厨房用品",id:"24"},{name:"家居家装",id:"25"},
                {name:"听书",id:"26"},{name:"家居家纺",id:"27"},{name:"当当优课",id:"28"},{name:"当当礼品券",id:"29"},{name:"猜你喜欢",id:"30"},
                ],
                Index:0
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
 
}
</script>
