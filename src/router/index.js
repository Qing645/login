import Vue from 'vue';
import VueRouter from "vue-router";
import routes from './routes';
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => { //全局路由守卫
  const hasAuth = store.getters['loginUser/status'];
  if (to.meta.auth) { //进行鉴权 ,需要鉴权的判断加载状态添加相应的next参数
    if (hasAuth === 'loading') { //加载中
      next({    //进入loading等待页
        path:"/loading",
        query:{
          returnUrl:to.fullPath
        }
      })
    } else if (hasAuth === 'login') { //有登录用户
      next();  //进入目标页
    } else {   //没有登录用户
      alert('该页面需要登录，请先登录...')
      next({   //返回登陆页面
        path:'/login',
        query:{
          returnUrl:to.fullPath
        }
      })
    }
  }else{
    next()
  }

})
export default router;