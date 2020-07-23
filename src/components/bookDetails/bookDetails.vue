<template>
    <div class="book">
        <nav>
            <img src="../../assets/img/login/back.png" @click="back()">
            <ul class="txt-link">
                <li v-for="(item,index) in list" :key=index>
                    {{item.name}}
                </li>
            </ul>
            <img src="../../assets/img/login/more.png">
        </nav>
        <main>
            <swiper :options="swiperOptionSwiper1" class="swiper-container swiper-pagination1"  ref="mySwiper">
                    <swiper-slide v-for="(item,index) in carousel" :key=index>
                        <img class="banner-img" :src="item" /> 
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <p class="free-read">免费在线读</p>
        </main>
        <section>
            <div class="warp-desc">
                <div class="top">
                    <span class="top-txt">盐（莫言、阎连科、韩少功、苏童、范小青力荐作品！）</span>
                    <p class="cen-txt">孙频继疼畅销十万册之后，再度出发，全新力作。</p>
                    <p class="bot-txt">读遍十方简，更多小说每满100减40>></p>
                </div>
                <div class="cen">
                    <p class="txt-left">
                        <span class="txt-top">
                            <span>￥37.40</span>
                            <span>(8.70折)</span>
                            <span>降价通知</span>
                        </span>
                        <span class="txt-bot">
                            <span>定价</span>
                            <span>￥43.00</span>
                        </span>
                    </p>
                    <p class="txt-rig">
                        <span class="line">电子书￥5.49</span>
                    </p>
                </div>
                <div class="rate">
                    <div class="score">
                           <p class="first">
                               <span>9.1</span>
                               <span>
                                    <el-rate v-model="value5" disabled show-score text-color="#FF8161"></el-rate>
                               </span>
                           </p>
                           <p class="second">
                               <span>49061人评分</span>
                               <span>精彩评分送积分</span>
                           </p>
                    </div>
                    <div class="talk">
                        <p>我要写评论</p>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="bottom-fix">
            <div class="warp-icon">
                <router-link to="/" v-for="(item,index) in icons" :key=index>
                    <img :src="item.src">
                    <p>{{item.name}}</p>
                </router-link>
            </div>
            <div class="warp-btn">
                <button class="buy">立即购买</button>
                <button @click="showToast" class="cart">加入购物车</button>
            </div>
        </div>
    </div>
</template>

<script>
require('../../assets/css/index/swiper.css')
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import '../../assets/css/index/swiper.css'

import Item from './bookItem.vue';
import Talk from './bookTalk.vue';

import { Toast } from 'mint-ui';
import '../../assets/js/index.js'
export default {
    data(){
        return{
            list:[
                {id:1,name:"商品"},{id:2,name:"详情"},{id:3,name:"评论"},{id:4,name:"推荐"}
            ],
            icons:[
                {src:require("../../assets/img/bookDetails/icon01.png"),name:"店铺"},
                {src:require("../../assets/img/bookDetails/icon02.png"),name:"收藏"},
                {src:require("../../assets/img/bookDetails/icon03.png"),name:"购物车"}
            ],
            carousel:[require("../../assets/img/bookDetails/book1.jpg"),require("../../assets/img/bookDetails/book2.jpg")],
            swiperOptionSwiper1: {
                pagination: '.swiper-pagination1',
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
                spaceBetween: 0,
                onSlideChangeEnd: swiper => {
                    this.page = swiper.realIndex+1;
                    this.index = swiper.realIndex;
                },
                autoplay:{
                    delay:2000,
                    disableOnInteraction:false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                loop:true
            },
            value5:4.5
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        showToast(){
            Toast({
                message: "加入购物车成功",
                position: 'center',
                duration: 1000
            })
        }
    },
    components:{
        Item:Item,
        Talk:Talk,
        swiper,
        swiperSlide
    },
    computed:{
        swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted:function(){
        this.swiper.slideTo(0, 0, false);
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/book/bookDetails.less';
@import '../../assets/css/book/style.css';  //swiper
@import '../../assets/css/book/index.css';  //mint-ui
</style>