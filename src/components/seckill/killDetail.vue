<template>
    <div class="warp-all">
        <div class="kill" v-show="'kill'==item">
            <nav>
                <p @click="goBack()"><img src="../../assets/img/login/back.png"></p>
                <p>秒杀</p>
                <p></p>
            </nav>
            <div class="kill-item">
                <ul>
                    <li :class="{'active':indexTop == index}" v-for="(item,index) in tab" :key=index @click="indexTop = index">
                        <p>{{item.timer}}</p>
                        <p>{{item.desc}}</p>
                    </li>
                </ul>
                <div class="kill-con" v-show="0==indexTop" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <router-link to="/" v-for="(item,index) in seckill" :key=index>
                        <img v-lazy="item.src" >
                        <div>
                            <p class="title">{{item.title}}</p>
                            <div class="warp-txt">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="disPrice">{{item.disPrice}}</span><br>
                                    <span class="num">{{item.num}}</span>
                                </p>
                                <p class="grab">马上抢</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="kill-con" v-show="1==indexTop">
                    <router-link to="/" v-for="(item,index) in seckill" :key=index>
                        <img v-lazy="item.src" >
                        <div>
                            <p class="title">{{item.title}}</p>
                            <div class="warp-txt">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="disPrice">{{item.disPrice}}</span><br>
                                    <span class="num">{{item.num}}</span>
                                </p>
                                <p class="grab">马上抢</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="kill-con" v-show="2==indexTop">
                    <router-link to="/" v-for="(item,index) in seckill" :key=index>
                        <img v-lazy="item.src" >
                        <div>
                            <p class="title">{{item.title}}</p>
                            <div class="warp-txt">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="disPrice">{{item.disPrice}}</span><br>
                                    <span class="num">{{item.num}}</span>
                                </p>
                                <p class="grab">马上抢</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="kill-con" v-show="3==indexTop">
                    <router-link to="/" v-for="(item,index) in seckill" :key=index>
                        <img v-lazy="item.src" >
                        <div>
                            <p class="title">{{item.title}}</p>
                            <div class="warp-txt">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="disPrice">{{item.disPrice}}</span><br>
                                    <span class="num">{{item.num}}</span>
                                </p>
                                <p class="grab">马上抢</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="kill-con" v-show="4==indexTop">
                    <router-link to="/" v-for="(item,index) in seckill" :key=index>
                        <img v-lazy="item.src" >
                        <div>
                            <p class="title">{{item.title}}</p>
                            <div class="warp-txt">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="disPrice">{{item.disPrice}}</span><br>
                                    <span class="num">{{item.num}}</span>
                                </p>
                                <p class="grab">马上抢</p>
                            </div>
                        </div>
                    </router-link>
                </div>                
            </div>
        </div> 

        <div class="brand" v-show="'brand'==item">
            <nav>
                <p @click="goBack()"><img src="../../assets/img/login/back.png"></p>
                <p>我是{{item}}</p>
                <p></p>
            </nav>
        </div>  

        <div class="team" v-show="'team'==item">
            <nav>
                <p @click="goBack()"><img src="../../assets/img/login/back.png"></p>
                <p>我是{{item}}</p>
                <p></p>
            </nav>
        </div>   
    </div>
</template>

<script>
import item from './killItem'
import item1 from './killItem1'
export default {
    components:{
        "kill-Item":item,
        "kill-Item1":item1
    },
    data(){
        return{
            item:"",
            list:["kill","brand","team"],
            tab:[
                {timer:"00:00",desc:'已开抢'},
                {timer:"11:00",desc:'已开抢'},
                {timer:"16:00",desc:'正在开抢'},
                {timer:"明天00:00",desc:'即将开抢'},
                {timer:"明天11:00",desc:'即将开抢'}
            ],
            indexTop:0,
            seckill:"",
            bala:""
        }
    },
    watch:{
        $route(){
            this.item = this.$route.params.item
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        loadMore() {
        this.loading = true;
        setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
            }
            this.loading = false;
        }, 2500);
        }
    },
    mounted:function(){
        this.$http.get('./data/seckill/seckill.json')
        .then((response)=>{
            this.seckill = response.data.zero;
            this.bala = response.data.bala;
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
   
}
</script>
<style lang="less">
@import '../../assets/css/seckill/killdetails.less';

</style>