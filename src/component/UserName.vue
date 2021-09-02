<template>
  <div class="user-name">
    <span v-if="status === 'loading'" exact-path>loading...</span>
    <template v-else-if="status === 'login'">
      <router-link to="/user" exact-path> {{ name }} </router-link>
      <a @click.prevent ="loginOutHandle">退出</a>
    </template>
    <router-link v-else-if="status === 'unlogin'" to="/login" exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]),
    ...mapState("loginUser", {
      name: (state) => (state.user ? state.user.name : "..."),
    }),
  },
  methods: {
    async loginOutHandle() {
      await this.$store.dispatch("loginUser/loginOut").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
  cursor: pointer;
}
</style>
