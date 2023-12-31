import { createWebHistory, createRouter } from "vue-router"
import Login from "../view/buyer/auth/login.vue"
import Register from "../view/buyer/auth/register.vue"
import Logout from "../view/buyer/auth/logout.vue"

import Home from "../view/buyer/home/index.vue"
import Balance from "../view/buyer/balance/index.vue"
import BalanceTopup from "../view/buyer/balance/topup.vue"
import Search from '../view/buyer/search/index.vue'
import DetailOrder from "../view/buyer/order/detailOrder.vue"
import OrderHistory from "../view/buyer/order/index.vue"
import Profile from "../view/buyer/profile/index.vue"

import MerchantHome from "../view/merchant/home/index.vue"
import MerchantLogin from "../view/merchant/auth/login.vue"
import MerchantLogout from "../view/merchant/auth/logout.vue"
import MerchantOrderDetail from "../view/merchant/home/orderDetail.vue"
import MerchantProduct from "../view/merchant/product/index.vue"
import MerchantProductAdd from "../view/merchant/product/productAdd.vue"
import MerchantProfile from "../view/merchant/profile/index.vue"

import AdminHome from "../view/admin/home/index.vue"
import AdminLogin from "../view/admin/auth/login.vue"
import AdminLogout from "../view/admin/auth/logout.vue"
import AdminTopup from "../view/admin/home/topup.vue"
import AdminProfile from "../view/admin/profile/index.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/balance",
    name: "balance",
    component: Balance
  },
  {
    path: "/balance/topup",
    name: "balance.topup",
    component: BalanceTopup
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/order/:id",
    name: "order.detail",
    component: DetailOrder
  },
  {
    path: "/order",
    name: "order",
    component: OrderHistory
  },




  {
    path: "/merchant",
    name: "merchant.home",
    component: MerchantHome
  },
  {
    path: "/merchant/login",
    name: "merchant.login",
    component: MerchantLogin
  },
  {
    path: "/merchant/logout",
    name: "merchant.logout",
    component: MerchantLogout
  },
  {
    path: "/merchant/order/:id",
    name: "merchant.order.detail",
    component: MerchantOrderDetail
  },
  {
    path: "/merchant/product",
    name: "merchant.product",
    component: MerchantProduct
  },
  {
    path: "/merchant/product/add",
    name: "merchant.product.add",
    component: MerchantProductAdd
  },
  {
    path: "/merchant/profile",
    name: "merchant.profile",
    component: MerchantProfile
  },




  {
    path: "/admin",
    name: "admin.home",
    component: AdminHome
  },
  {
    path: "/admin/login",
    name: "admin.login",
    component: AdminLogin
  },
  {
    path: "/admin/logout",
    name: "admin.logout",
    component: AdminLogout
  },
  {
    path: "/admin/topup/:id",
    name: "admin.topup",
    component: AdminTopup
  },
  {
    path: "/admin/profile",
    name: "admin.profile",
    component: AdminProfile
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;