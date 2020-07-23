import VueRouter from 'vue-router'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:resolve => require(['../../../components/index/index.vue'], resolve),
            children:[
                {
                    path:'/home',
                    component:resolve => require(['../../../components/home/home.vue'], resolve)
                },
                {
                    path:'/type',
                    component:resolve => require(['../../../components/type/type.vue'], resolve),
                    children:[
                        {
                            path:'/typeItem/:id',
                            component:resolve => require(['../../../components/type/item.vue'], resolve)
                        }
                    ],
                    redirect:"/typeItem/1"
                },
                {
                    path:'/buy',
                    component:resolve => require(['../../../components/buy/buy.vue'], resolve)
                },
                {
                    path:'/cart',
                    component:resolve => require(['../../../components/cart/cart.vue'], resolve)
                },
                {
                    path:'/my',
                    component:resolve => require(['../../../components/my/my.vue'], resolve)
                },
                {
                    path:'/hotBook',
                    component:resolve => require(['../../../components/hotBook/hotBook.vue'], resolve)
                }
            ],
            redirect:'/home'
        },
        {
            path:'/login',
            component:resolve => require(['../../../components/login/login.vue'], resolve)
        },
        {
            path:'/seckill',
            component:resolve => require(['../../../components/seckill/seckill.vue'], resolve),
            children:[
                {
                    path:"/killDetail/:item",
                    component:resolve => require(['../../../components/seckill/killDetail.vue'], resolve),
                }
            ],
            redirect:'/killDetail/kill'
        },
        {
            path:"/bookDetails",
            component:resolve => require(['../../../components/bookDetails/bookDetails.vue'], resolve),
        },
        {
            path:"/*",
            component:resolve => require(['../../../components/home/home.vue'], resolve)
        }
        
    ]
})