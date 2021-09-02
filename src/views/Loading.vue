<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$store.watch(  
      () => {
        return this.$store.getters["loginUser/status"];//侦听用户登陆状态
      },
      (status) => {
        if(status !== 'loading'){ 
          this.$router.push({  //状态改变时，路由跳转到目标页面
            path:this.$route.query.returnUrl, //由守卫添加的要前往的页面，重新进入鉴权
            query:{
             returnUrl:this.$route.query.returnUrl//向地址栏添加要前往的页面地址
            }
          }).catch(err=>console.log(err))
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch(); //$watch的返回值执行后会取消监听
  },
};
</script>

<style></style>
