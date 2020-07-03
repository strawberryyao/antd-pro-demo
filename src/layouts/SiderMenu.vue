<template>
  <div style="width: 256px">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
export default {
  components: {
    SubMenu
  },
  props: {
    theme: {
      default: "dark",
      type: String
    }
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData
      // list: []
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes = []) {
      const menuData = [];
      routes.forEach(item => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children);
          } else {
            this.getMenuData(item.children);
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(...this.getMenuData(item.children));
        }
      });
      return menuData;
    }
  }
};
</script>
