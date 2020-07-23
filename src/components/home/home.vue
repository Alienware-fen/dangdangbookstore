<template id="home">
    <div class="home">
        <nav>
            <img src="../../assets/img/home/touch_ios_banner.jpg" >
            <div class="warp-nav">
                <router-link to="/home">
                    <svg class="icon icon-size" aria-hidden="true">
                        <use xlink:href="#icon-dangdangwang"></use>
                    </svg>
                </router-link>
                <router-link to="/search" class="warp-search">
                    <svg class="icon icon-position" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <input type="text" placeholder="搜索商品/店铺/种类">
                </router-link>
                <router-link to="/type" class="warp-type">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-daohanglan"></use>
                    </svg>
                </router-link>
            </div>
        </nav>
        <main>
            <swiper :options="swiperOptionSwiper1" class="swiper-container swiper-pagination1"  ref="mySwiper">
                    <swiper-slide v-for="(item,index) in carousel" :key=index>
                        <img class="banner-img" :src="item" /> 
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <div class="home-book">
                <router-link to="/hotBook" v-for="(item,index) in menus" :key=index>
                    <img :src="item">
                </router-link>
            </div>
            <div class="home-second">
                <router-link to="/seckill">
                    <img src="../../assets/img/home/mao_title.jpg">
                </router-link>
                <p>
                    <span>{{khour}}</span>
                    <span>时</span>
                    <span>{{kmin}}</span>
                    <span>分</span>
                    <span>{{ksec}}</span>
                    <span>秒</span>           
                </p>
                <div class="package-pic">
                    <swiper class="swiper" :options="swiperOptionSwiper2">
                        <swiper-slide v-for="(item,index) in killsec" class="seckill" :key=index>
                            <router-link to="/seckill">
                                <img :src="item.src">
                                <p class="title">{{item.title}}</p>
                                <p class="price">{{item.price}}</p>
                                <p class="disprice">{{item.disprice}}</p>
                            </router-link>
                        </swiper-slide>
                    </swiper>            
                </div>
            </div>
            <div class="warp-English">
                <router-link to="/home">
                    <img src="../../assets/img/home/English.jpg">
                </router-link>
            </div>
            <div class="home-bookCity">
                <img src="../../assets/img/home/book-city.jpg">
                <p class="warp-txt">
                    <router-link to="/">当当书城<img src="../../assets/img/login/right.png" ></router-link>
                    <router-link to="/">电子书<img src="../../assets/img/login/right.png" class="img-center"></router-link>
                    <router-link to="/">网络文学<img src="../../assets/img/login/right.png" ></router-link>
                </p>
                <img src="../../assets/img/home/carousel01.jpg">
                <div class="bookItem">
                    <router-link to="/bookDetails" v-for="(item,index) in bookCity" :key=index>
                        <p class="txt-top">{{item.title}}</p>
                        <p class="txt-bottom">{{item.desc}}</p>
                        <img v-lazy="item.src">
                    </router-link>
                </div>
            </div>
            <div class="home-cloth">
                <img src="../../assets/img/home/cloth-top.jpg">
                <p class="warp-txt">
                    <router-link to="/">服装品牌榜单<img src="../../assets/img/login/right.png" class="img-top"></router-link>
                    <router-link to="/">服装上新<img src="../../assets/img/login/right.png"></router-link>
                    <router-link to="/">服装馆<img src="../../assets/img/login/right.png" class="img-bottom"></router-link>
                </p>
                <img src="../../assets/img/home/cloth.jpg">
                <div class="clothItem">
                    <div class="cloth-top">
                        <div class="top1">
                            <router-link to="/" v-for="(item,index) in cTop1" :key=index>
                                <p>
                                    <span class="txt-top">{{item.title}}</span><br>
                                    <span class="txt-bottom">{{item.desc}}</span>
                                </p>
                                <img v-lazy="item.src">
                            </router-link>
                        </div>
                        <div class="top2">
                            <router-link to="/" v-for="(item,index) in cTop2" :key=index>
                                <p>
                                    <span class="txt-top">{{item.title}}</span><br>
                                    <span class="txt-bottom">{{item.desc}}</span>
                                </p>
                                <img v-lazy="item.src">
                            </router-link>
                        </div>           
                    </div>
                    <div class="cloth-center">
                        <router-link to="/" v-for="(item,index) in cCenter" :key=index>
                            <p>
                                <span class="txt-top">{{item.title}}</span><br>
                                <span class="txt-bottom">{{item.desc}}</span>
                            </p>
                            <img v-lazy="item.src">
                        </router-link>
                    </div>
                    <div class="cloth-bottom">
                        <router-link to="/" v-for="(item,index) in cBottom" :key=index>
                            <p>
                                <span class="txt-top">{{item.title}}</span><br>
                                <span class="txt-bottom">{{item.desc}}</span>
                            </p>
                            <img v-lazy="item.src">
                        </router-link>
                    </div>     
                </div>
            </div>
            <div class="home-food">
                <img src="../../assets/img/home/food_title.jpg" >
                <p class="warp-txt">
                    <router-link to="/">食品馆<img src="../../assets/img/login/right.png" ></router-link>
                    <router-link to="/">休闲食品<img src="../../assets/img/login/right.png" class="img-top"></router-link>
                    <router-link to="/">粮油调味<img src="../../assets/img/login/right.png" class="img-top"></router-link>
                    <router-link to="/">夏日茶饮<img src="../../assets/img/login/right.png" class="img-top"></router-link>
                </p>
                <img src="../../assets/img/home/food.jpg">
                <div class="warp-food">
                    <div class="food-top">
                        <router-link to="/" v-for="(item,index) in foodTop" :key=index>
                            <p>
                                <span>{{item.title}}</span><br>
                                <span>{{item.desc}}</span>
                            </p>
                            <img :src="item.src" >
                        </router-link>
                    </div>
                    <div class="food-bottom">
                        <router-link to="/" v-for="(item,index) in foodBottom" :key=index>
                            <p>
                                <span>{{item.title}}</span><br>
                                <span>{{item.desc}}</span>
                            </p>
                            <img v-lazy="item.src" >
                        </router-link>
                    </div>
                </div>
            </div> 
            <div class="home-like">
                <p>根据您的偏好猜您可能喜欢</p>
                <div class="warp-like">
                    <router-link to="/" v-for="(item,index) in like" :key=index>
                        <img v-lazy="item.src" >
                        <p class="txt-top">{{item.title}}</p>
                        <p class="txt-center">
                            <span>当当自营</span>
                            <span>满减</span>
                            <span>包邮</span>
                        </p>
                        <p class="txt-bottom">{{item.price}}</p>
                    </router-link>
                </div>
            </div>      
        </main>
        <footer class="home-footer">
            <p>已经到底了，再拉裤子都要掉啦</p>
            <img src="../../assets/img/home/touch_ios_banner.jpg" >
            <div class="warp-txt">
                <p>
                    <span>登陆</span>
                    <span>注册</span>
                </p>
                <p>Top</p>
            </div>
            <div class="warp-footer">
                <p>
                    <span>提建议</span>
                    <span class="red">触屏版</span>
                    <span>电脑版</span>
                    <span>帮助</span>
                </p>
                <p>Copyright @ 2020 北京当当有限技术公司</p>
                <p>北京市朝阳区北三环东路8号,100028</p>
            </div>
        </footer>
        
    </div>
</template>
<script>
    require('../../assets/css/index/swiper.css')
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import '../../assets/css/index/swiper.css'
export default{
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            carousel:[
                require("../../assets/img/home/carousel01.jpg"),
                require("../../assets/img/home/carousel02.jpg"),
                require("../../assets/img/home/carousel03.jpg"),
                require("../../assets/img/home/carousel04.jpg"),
                require("../../assets/img/home/carousel05.jpg"),
                require("../../assets/img/home/carousel06.jpg"),
                require("../../assets/img/home/carousel07.jpg"),
                require("../../assets/img/home/carousel08.jpg")
                ],
            menus:[
                require("../../assets/img/home/menu01.png"),
                require("../../assets/img/home/menu02.png"),
                require("../../assets/img/home/menu03.png"),
                require("../../assets/img/home/menu04.png"),
                require("../../assets/img/home/menu05.png"),
                require("../../assets/img/home/menu06.png"),
                require("../../assets/img/home/menu07.png"),
                require("../../assets/img/home/menu08.png"),
                require("../../assets/img/home/menu09.png"),
                require("../../assets/img/home/menu10.png")               
            ],
            killsec:"",
            bookCity:"",
            cTop1:"",
            cTop2:"",
            cCenter:"",
            cBottom:"",
            foodTop:"",
            foodBottom:"",
            like:"",
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
            swiperOptionSwiper2: {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }   
            },
            khour:0,
            kmin:0,
            ksec:0
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    methods:{
        countDown:function(){
            const _this = this
            const endTime =Date.parse(new Date('2021-7-20 12:00:00'))
            const startTime = Date.parse(new Date())
            if(startTime > endTime){
                this.khour = 0
                this.kmin=0
                this.ksec=0
            }
            const timeValue = endTime - startTime
            let hr = parseInt(timeValue/1000/60/60%24)
            let min = parseInt(timeValue/1000/60%60)
            let sec = parseInt(timeValue/1000%60)

            this.khour=hr >9 ? hr:'0'+hr
            this.kmin=min >9 ? min:'0'+min
            this.ksec=sec >9 ? sec:'0'+sec

            setTimeout(function(){
                _this.countDown()
            },1000)
        }
    },
    mounted:function(){
        this.swiper.slideTo(0, 0, false);
        this.countDown();
        this.$http.get('./data/index/list.json')
        .then((response)=>{
            this.killsec = response.data.killsec;
            this.bookCity = response.data.bookCity;
            
            this.cTop1 =response.data.cloth.slice(0,1);
            this.cTop2 =response.data.cloth.slice(1,3);
            this.cCenter =response.data.cloth.slice(3,5);
            this.cBottom =response.data.cloth.slice(5,10);
            this.foodTop = response.data.food.slice(0,2);
            this.foodBottom = response.data.food.slice(2,6);
            this.like = response.data.like
        })
        .catch(function(err){
            console.log(err);
        })
    }
    
}
</script>

<style scoped>
@import '../../assets/css/index/home/home.css';
@import '../../assets/css/index/swiper.css';
</style>