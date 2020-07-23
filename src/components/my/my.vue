<template id="my">
    <div class="my">
        <header class="v-header">
            <router-link to="/" class="back"><img src="../../assets/img/login/back.png"></router-link>
             <span class="txt">我的当当</span>
            <span class="more"><img src="../../assets/img/login/more.png"></span>  
        </header>
        <main >
            <div class="warp-img">
                <img src="../../assets/img/login/user-bg.jpg">
                <div class="login">
                    <router-link to="/login" >登陆/注册</router-link>
                </div>                
            </div>
            <ul class="warp-li">
                <li>
                    <router-link to="/">
                        <P>0</P>
                        <P>收藏的商品</P>
                    </router-link>
                </li>
                <li class="li-border">
                    <router-link to="/">
                        <P>0</P>
                        <P>关注的店铺</P>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <P>0</P>
                        <P>我的足迹</P>
                    </router-link>
                </li>
            </ul> 
            <div class="warp-order">
                <router-link to="/order" class="order">我的订单</router-link>     
                <router-link to="/order" class="store">查看全部购买商品</router-link>
            </div>                      
            <div class="warp-money">
                <router-link to="/order">
                    <img src="../../assets/img/login/pay.png">
                    <p>待付款</p>
                </router-link>
                <router-link to="/order">
                    <img src="../../assets/img/login/shouhuo.png">
                    <p>待收货</p>
                </router-link>
                <router-link to="/order">
                    <img src="../../assets/img/login/return.png">
                    <p>退换货</p>
                </router-link>
            </div>        
        </main>
        <section>
            <div class="warp-list">
                <div v-for="(item,index) in list" :key=index class="list-item">
                    <router-link to="/order" class="items">
                        <span class="txt-left">
                            <img :src="item.src">
                            <span>{{item.txt}}</span>
                        </span>
                        <span class="txt-rig">
                            <img src="../../assets/img/login/right.png">
                        </span>
                    </router-link>
                </div>
            </div>   
            <p class="warp-line">
                <span class="line"></span>
                <span class="txt-line">根据您的偏好，猜你可能喜欢111111</span>
                <span class="line"></span>
            </p>
            <div class="warp-book">
                <router-link to="/bookdetial" v-for="(item,index) in book" :key=index>
                    <img :src="item.src" >
                    <p class="txt-top">{{item.title}}</p>
                    <p class="txt-center">
                        <span>当当自营</span>
                        <span>满减</span>
                        <span>包邮</span>
                    </p>
                    <p class="txt-buttom">{{item.price}}</p>
                </router-link>
            </div>  
        </section>
        <footer>
            <div class="warp-footer">
                <div class="warp-space"></div>
                <div class="footer-login">
                    <span class="warp-register">
                        <router-link to="/">登陆</router-link>
                        <router-link to="/">注册</router-link>
                    </span>
                    <span class="top">Top</span>
                </div>
                <div class="footer-txt">
                    <p>
                        <router-link to="/">提建议</router-link>
                        <router-link to="/">电脑版</router-link>
                        <router-link to="/">帮助</router-link>
                    </p>
                    <p>Copyright @ 2020 北京当当有限技术公司</p>
                </div>
            </div> 
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {src:require("../../assets/img/login/1.png"),txt:"会员中心"},
                {src:require("../../assets/img/login/2.png"),txt:"我的礼券"},
                {src:require("../../assets/img/login/3.png"),txt:"积分兑换"},
                {src:require("../../assets/img/login/4.png"),txt:"我的电子书"},
                {src:require("../../assets/img/login/5.png"),txt:"我的礼品卡"},
                {src:require("../../assets/img/login/6.png"),txt:"收货地址"},
                {src:require("../../assets/img/login/7.png"),txt:"客服反馈"}
            ],
            book:""
        }
    },
    mounted(){
        this.$http.get('./data/login/book.json')
        .then((response)=>{
            this.book = response.data.book;
        })
        .catch(function(err){
            console.log(err);
        })
    }
}
</script>
<style scoped>
@import '../../assets/css/index/my/my.css';
</style>