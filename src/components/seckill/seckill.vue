<template>
    <div class="seckill">
        <main>
            <router-view></router-view>
        </main>
        <div class="tabbar">
            <router-link v-for="(item,index) in killList" :key=index :to="'/killDetail/'+item.name" class="top">
                <img :src="item.src">
                <p>{{item.title}}</p>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/seckill/seckill.css';
</style>

<script>
export default {
    data(){
        return{
            killList:[
                {name:'kill',title:"秒杀",src:require("../../assets/img/seckill/one.png")},
                {name:'brand',title:"品牌秒杀",src:require("../../assets/img/seckill/two.png")},
                {name:'team',title:"团购",src:require("../../assets/img/seckill/three.png")}
                ]
        }
    },
}
</script>
