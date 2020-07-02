<template>
  <div>
    <a-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
    >
      <template v-for="item in menuData">
        <a-menu-item
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon"></a-icon>
        </a-menu-item>
      </template>
      <!-- <a-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </a-menu-item> -->
      <!-- <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Three</span></span
        >
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu> -->
      <!-- <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="setting" /><span>Navigation Four</span></span
        >
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
      </a-sub-menu> -->
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      current: 1,
      menuData
    };
  },
  methods: {
    getMenuData() {}
  }
};
</script>

<style lang="scss" scoped></style>
