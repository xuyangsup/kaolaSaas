<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <!-- 添加或取消content-collapse类改变left值 -->
        <div class="content-box" :class="collapse ? 'content-collapse': 'content-not-collapse'">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: true
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){ // 监听子组件的collapse
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .content-collapse{
        left: 49px;
    }
    .content-not-collapse {
        left: 180px;
    }
</style>