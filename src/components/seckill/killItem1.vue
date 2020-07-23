<template slot="two">
    <div class="kill-con">
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
</template>

<script>
export default {
    data(){
        return{
            seckill:""
        }
    },
    mounted:function(){
        this.$http.get('./data/seckill/seckill.json')
        .then((response)=>{
            console.log(response);
            this.seckill = response.data.one;
            console.log(this.seckill);
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
}
</script>