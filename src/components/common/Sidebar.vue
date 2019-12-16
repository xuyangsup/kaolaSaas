<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="active"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.subs"
              :key="i"
              :index="subItem.index"
            >{{ subItem.title }}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "index",
          title: "欢迎页面"
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "报表中心",
          subs: [
            {
              index: "yingye",
              title: "营业汇总"
            },
            {
              index: "jishi",
              title: "技师业绩"
            }
          ]
        }
      ],
      active: ""
    };
  },
  computed: {
    // onRoutes(){
    //     return this.$route.path.replace('/','');
    // }
  },
  created() {
    // 监听子组件的collapse
    bus.$on("collapse", msg => {
      console.log(msg);
      this.collapse = msg;
    });
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
    // width: 180px;
  }
  > ul {
    height: 100%;
  }
}
</style>