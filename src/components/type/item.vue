<template slot="title">
    <div class="typeItem">
        <img src="../../assets/img/type/title.jpg">
        <div class="enter">
            <router-link to="/">
                <div>
                    <p>进入当当网上</p>
                    <p>特价低至1折起购</p>
                </div>
                <img src="../../assets/img/type/arrow.png">
            </router-link>
            <router-link to="/">
                <div>
                    <p>进入童书馆</p>
                    <p>竞选少儿读图书购</p>
                </div>
                <img src="../../assets/img/type/arrow.png">
            </router-link>
        </div>
        <div class="list">
            <p>榜单</p>
            <div class="warp-list">
                <router-link to="/" v-for="(item,index) in list" :key=index>
                    <img :src="item.src">
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
        <div class="literary">
            <div class="warp-title">
                <span>文学</span>
                <span>畅想榜</span>
            </div>
            <div class="warp-txt">
                <div class="txt">
                    <div v-if="2==showList.length%3" class="show">
                        <p v-for="(item,index) in showList" :key=index :class="{hiddenline:index==showList.length-1 || index==showList.length-2}" > 
                            <router-link to="/" >
                                {{item}}
                            </router-link>
                            <span class="line" :class="{hidden1:index%3==2}"></span> 
                        </p>
                        <p class="none-line">
                            <span @click="showAll = !showAll" class="show-more">
                                <b>{{word}}</b>
                            </span>
                        </p>
                    </div>
                    <div v-else class="show">
                        <p v-for="(item,index) in showList" :key=index :class="{hiddenline:index==showList.length-1}"> 
                            <router-link to="/" >
                                {{item}}
                            </router-link>
                            <span class="line" :class="{hidden1:index%3==2}"></span> 
                        </p>
                        <p class="none-line">
                            <span @click="showAll = !showAll" class="show-more">
                                <b>{{word}}</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="literary">
            <div class="warp-title">
                <span>文学</span>
                <span>畅想榜</span>
            </div>
            <div class="warp-txt">
                <div class="txt">
                    <div v-if="2==showList1.length%3" class="show">
                        <p v-for="(item,index) in showList1" :key=index :class="{hiddenline:index==showList1.length-1 || index==showList1.length-2}" > 
                            <router-link to="/" >
                                {{item}}
                            </router-link>
                            <span class="line" :class="{hidden1:index%3==2}"></span> 
                        </p>
                        <p class="none-line">
                            <span @click="showAll1 = !showAll1" class="show-more">
                                <b>{{word}}</b>
                            </span>
                        </p>
                    </div>
                    <div v-else class="show">
                        <p v-for="(item,index) in showList1" :key=index :class="{hiddenline:index==showList1.length-1}"> 
                            <router-link to="/" >
                                {{item}}
                            </router-link>
                            <span class="line" :class="{hidden1:index%3==2}"></span> 
                        </p>
                        <p class="none-line">
                            <span @click="showAll1 = !showAll1" class="show-more">
                                <b>{{word}}</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:"",
            list:"",
            literarys:["中国先当代随笔","名家作品","文集",'纪实文学',"中国古诗词","中国现当代诗歌",
                    "外国诗歌","中国古代随笔","外国随笔","民家文学","戏剧","文学评论与鉴赏","文学理论"],
            showAll:false,
            showAll1:false,
            num:""
        }
    },
    watch:{
        $route(){
            this.item = this.$route.params.id
        }
    },
    computed:{
        showList:function(){
            if(this.showAll == false){           
                var showList = [];　　　　　
                if(this.literarys.length > 5){　　　　　　
                    for(var i=0;i<5;i++){
                        showList.push(this.literarys[i]); 
                    }
                }else{
                    showList = this.literarys  
                }
                return showList;　　　　　　　　　　　　　　　　
            }else{  
                return this.literarys;
            }
        },
        word:function(){ 
            if(this.showAll == false){　　　　　　　　　　　
                return '展开'
            }else{
                return '收起'
            }
        },


        showList1:function(){
            if(this.showAll1 == false){               
                var showList1 = [];　　　　　　　　　　　　　
                if(this.literarys.length > 5){　　　　　
                    for(var i=0;i<5;i++){
                        showList1.push(this.literarys[i]); 
                    }
                }else{
                    showList1 = this.literarys  
                }
                return showList1;　　　　　　　　　　　　　　　　
            }else{ 
                return this.literarys;
            }
        },
        
        word1:function(){ 
            if(this.showAll1 == false){　　　　　　　　　　　
                return '展开'
            }else{
                return '收起'
            }
        }
    },
    mounted:function(){
        this.$http.get('./data/type/type.json')
        .then((response)=>{
            this.list = response.data.list
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    method:{

    }
}
</script>
<style lang="less">
@import '../../assets/css/index/type/typeItem.less';
</style>