import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import User from "../views/User.vue";
import Loading from "../views/Loading.vue";
export default [
  { path: "/", component: Home, meta:{
    auth:true //路由元信息，帮助判断登录用户鉴权
  } },
  { path: "/login", component: Login },
  {
    path: "/news", component: News, meta: {
      auth: true
    }
  },
  {
    path: "/user", component: User, meta: {
      auth: true
    }
  },
  { path: "/loading", component: Loading },
];
