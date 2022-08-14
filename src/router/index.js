import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/loadsh',
    name: 'loadsh',
    component: () => import('../views/loadshVD.vue')
  },
  {
    path: '/products',
    name: 'listProducts',
    component: () => import('../views/listProducts.vue')
  },
  {
    path: '/learn-vuex',
    name: 'LearnVuex',
    component: () => import('../components/LearnVuex.vue')
  },
  {
    path: '/vidu',
    name: 'vidubai8',
    component: () => import('../components/vidubai8/baseLayout.vue')
  },
  {
    path: '/vidu1',
    name: 'vidubai8',
    component: () => import('../components/vidubai8/TongQuan.vue')
  },
  {
    path: '/Bai7-1',
    name: 'Bai7-1Phan1',
    component: () => import('../components/bai7.1/CartItem.vue')
  },
  {
    path: '/Bai7-2',
    name: 'Bai7-2Phan',
    component: () => import('../components/bai7.1/listCart.vue')
  },
  {
    path: '/learn-vuex2',
    name: 'LearnVuex2',
    component: () => import('../components/LearnVuex.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/BaseLayout.vue'),
    // component: BaseLayout
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/FormBai5.vue'),
   
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/QuanLySanPham.vue'),
   
  },
  {
    path: '/hoadon',
    name: 'hoadon',
    component: () => import('../views/QuanLyHoaDon.vue'),
   
  },
  {
    path: '/tongquan',
    name: 'tongquan',
    component: () => import('../views/TongQuan.vue'),
   
  },
  {
    path: '/thongke',
    name: 'thongke',
    component: () => import('../views/BaoCaoThongKe.vue'),
   
  },
  {
    path: '/chinhanh',
    name: 'chinhanh',
    component: () => import('../views/QuanLyChiNhanh.vue'),
   
  },
  {
    path: '/caidat',
    name: 'caidat',
    component: () => import('../views/CaiDatHeThong.vue'),
   
  },
  {
    path: '/ForgotPass',
    name: 'ForgotPass',
    component: () => import('../views/QuenMatKhau.vue'),
   
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/users/:useId',
    name: 'user',
    component: () => import('../views/UseView.vue'),
    children: [
     {
      path: 'profile',
      name: 'userProfile',
      component: () => import('../views/ProductDetailView.vue')
     },
     {
      path: 'post',
      name: 'userPost',
      component: () => import('../views/PostView.vue')
     }
    //  {
    //   path: 'learnvuex2',
    //   name: 'LearnVuex2',
    //   component: () => import('../components/LearnVuex.vue')
    //  },

    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
