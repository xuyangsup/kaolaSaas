<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'welcome',
                        title: '欢迎页面'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'yuyue',
                        title: '预约看板'
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'dingdan',
                        title: '订单管理'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '报表中心',
                        subs: [
                            {
                                index: 'yingye',
                                title: '营业汇总'
                            },
                            {
                                index: 'jishi',
                                title: '技师业绩'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '4',
                        title: '营销管理',
                        subs: [
                            {
                                index: 'yingxiao',
                                title: '营销活动'
                            },
                            {
                                index: 'huodong',
                                title: '活动策略'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'huiyuan',
                        title: '会员中心'
                    },
                    {
                        icon: 'el-icon-warning',
                        index: '6',
                        title: '商家管理',
                        subs: [
                            {
                                index: 'pinpai',
                                title: '品牌管理'
                            },
                            {
                                index: 'mendian',
                                title: '门店管理'
                            },
                            {

                                index: 'fangjian',
                                title: '房间管理'
                            },
                            {
                                index: 'chuangwei',
                                title: '床位管理'
                            },
                            {
                                index: 'pinxiangfenlei',
                                title: '品项分类'
                            },
                            {
                                index: 'pinxiangguanli',
                                title: '品项管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-edit',
                        index: '7',
                        title: '人事管理',
                        subs: [
                            {
                                index: 'bumen',
                                title: '部门管理'
                            },
                            {
                                index: 'zhiwu',
                                title: '职务管理'
                            },
                            {
                                index: 'renyuan',
                                title: '人员档案'
                            },
                            {
                                index: 'jishidangan',
                                title: '技师档案'
                            },
                            {
                                index: 'jishidengji',
                                title: '技师等级'
                            },
                            {
                                index: 'kefu',
                                title: '客服交班'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '8',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'chengshi',
                                title: '城市管理'
                            },
                            {
                                index: 'quyuguanli',
                                title: '区域管理'
                            },
                            {
                                index: 'canshu',
                                title: '参数管理'
                            },
                            {
                                index: 'quyubangzhong',
                                title: '区域帮钟'
                            },
                            {
                                index: 'juese',
                                title: '角色管理'
                            },
                            {
                                index: 'quanxian',
                                title: '权限管理'
                            },
                            {
                                index: 'shangzhong',
                                title: '上钟类型'
                            },
                            {
                                index: 'zhifu',
                                title: '支付类型'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-message',
                        index: '9',
                        title: '消息中心',
                        subs: [
                            {
                                index: 'xiaoxifasong',
                                title: '消息发送设置'
                            },
                            {
                                index: 'xiaoxichaxun',
                                title: '消息查询'
                            },
                            {
                                index: 'xiaoxihezi',
                                title: '消息盒子'
                            },
                            {
                                index: 'gonggao',
                                title: '公告管理'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
    }
</script>

<style lang="less" scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow: scroll;
        height: 100%;
        .sidebar-el-menu:not(.el-menu--collapse){
            width: 250px;
        }
        >ul{
            height: 100%;
        }
    }
</style>