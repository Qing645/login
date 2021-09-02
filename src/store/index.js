import Vue from 'vue';
import Vuex from 'vuex';
import loginUser from './loginUser';

Vue.use(Vuex);

const store = new Vuex.Store({
   modules:{
     loginUser
   },
   strict: true, //严格模式，发布版本时需关闭
});

window.store = store
export default store;