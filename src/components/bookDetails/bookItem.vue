<template>
    <div>
        <main>
            <swiper :options="swiperOptionSwiper1" class="swiper-container swiper-pagination1"  ref="mySwiper">
                    <swiper-slide v-for="(item,index) in carousel" :key=index>
                        <img class="banner-img" :src="item" /> 
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <p class="free-read">免费在线读</p>
        </main>
        
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
export default {
    data(){
        return{
            id:""
        }
    }
  
}
</script>