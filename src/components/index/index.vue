<template id="index">
    <div>
        <router-view></router-view> 
        <div class="warp-link">
            <router-link to='/home'>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yemian-copy-copy"></use>
                    </svg>
                </span>
                <p>首页</p>
            </router-link>
            <router-link to='/type'>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-leimupinleifenleileibie1"></use>
                    </svg>
                </span>
                <p>分类</p>
            </router-link>
            <router-link to='/buy'>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-baobao"></use>
                    </svg>
                </span>
                <p>值得买</p>
            </router-link>
            <router-link to='/cart'>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-goumai"></use>
                    </svg>
                </span>
                <p>购物车</p>
            </router-link>
            <router-link to='/my'>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wode"></use>
                    </svg>
                </span>
                <p>我的当当</p>
            </router-link>
        </div>     
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }

}

</script>
<style scoped>
@import '../../assets/css/index/index.css';
</style>