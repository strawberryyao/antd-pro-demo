<template>
  <div>
    <Header />
    <SiderMenu />
    <Home />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
import Home from "./Home.vue";
export default {
  components: {
    Header,
    Footer,
    Home,
    SiderMenu
  }
};
</script>

<style lang="scss" scoped></style>
