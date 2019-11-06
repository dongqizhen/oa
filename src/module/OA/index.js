// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import Util from '@/common/js/util'
import Axios from '@/config/axios.js'

//import VueTouch from 'vue-touch-easyhi'
/* import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css' */

import {
    connectWebViewJavascriptBridge,
    setupWebViewJavascriptBridge
} from '../../common/js/jsBridge'
import {
    Lazyload,
    Toast
} from 'vant';
import 'vant/lib/index.css';


import VueScroller from 'vue-scroller'
import {
    XButton,
    XTextarea,
    XNumber,
    Loading,
    Confirm
} from 'vux';
import FastClick from 'fastclick';
import Cube, {
    Button,
    //Toast,
    Dialog,
    //ImagePreview,
    //Sticky,
    //Radio,
    Checkbox,
    Scroll,
    TabBar,
    Slide,
    ScrollNavBar,
    Input,
    Swipe,
    createAPI,
    ActionSheet
} from 'cube-ui';

//import Ripple from 'vue-ripple-directive'
// import animated from 'animate.css' // npm install animate.css --save安装，在引入

// Vue.use(animated)



/* Ripple.color = 'rgba(153, 153, 153, 0.3)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple); */

Vue.prototype.$util = Util
Vue.prototype.$http = Axios

Vue.prototype.$API_URL = process.env.API_HOST

//Vue.prototype.$bridge = jsbridge
Vue.prototype.$USER_INFO = commonMessage()
    // alert(commonMessage().userid)
Vue.config.productionTip = false

FastClick.prototype.focus = function(targetElement) {
    var length;
    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'number') {
        length = targetElement.value.length;
        targetElement.setSelectionRange(length, length);
    } else {
        targetElement.focus();
    }
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.use(Vuex).use(TabBar).use(Slide).use(Scroll).use(ScrollNavBar).use(Input).use(Swipe).use(Cube).use(Lazyload).use(Toast);
// .use(VueTouchRipple, {
//     // default global options
//     color: '#999',
//     opacity: 0.3,
//     speed: 1,
//     transition: 'ease'
// })

Vue.use(VueScroller)
Vue.use(Lazyload, {
    attempt: 3,
    /*  error: '../static/images/defaultAuthor.png',
     loading: '../static/images/defaultAuthor.png' */
});

createAPI(Vue, ActionSheet, ['select'], true)
    //createAPI(Vue, Toast, ['click'], true)
createAPI(Vue, Dialog, ['confirm', 'cancel'], true)

Vue.component('loading', Loading)
Vue.component('confirm', Confirm)
Vue.component('x-button', XButton)
Vue.component('x-number', XNumber)
    /* eslint-disable no-new */

const initVueApp = () => {
    new Vue({
        el: '#app',
        router,
        store,
        components: {
            App
        },
        template: '<App/>'
    })
}

// 第一连接时初始化bridage
if (Util.isAndroid()) {
    new connectWebViewJavascriptBridge(function(bridge) {
        initVueApp()
    })
} else {

    new setupWebViewJavascriptBridge(function(bridge) {
        initVueApp(); // vue 实例
    })

}