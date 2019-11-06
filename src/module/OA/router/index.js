import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: () =>
            import ('../page/index')
    }, {
        path: '/backlog',
        name: '待办事项',
        component: () =>
            import ('../page/backlog.vue')
    }, {
        path: '/reimburse-apply',
        name: '报销申请',
        component: () =>
            import ('../page/finance/reimburse-apply')
    }]
})