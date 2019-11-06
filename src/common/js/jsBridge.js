import _ from 'lodash'

export const connectWebViewJavascriptBridge = callback => {
    //Android
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady',
            function() {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }

}


// ios
export const setupWebViewJavascriptBridge = (callback) => {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}






/**
 * @description h5调用原声jsBridge方法
 * @author dongqizhen
 * @date 2018-09-19
 * @export JsCallNativeMethods
 * @param {
   string
 } [nativeName = 'navNativePage'] 原生暴露方法名， 需要与原生对接（ 具有唯一性） {
   navNativePage：跳转原生页面 param{
        actionName: 跳转页面函数名称,
        isForResult: 是否需要返回数据
   },
   Log：打印日志,
   showConfirmDialog：显示或隐藏Dialog框 parma {
       title:标题，
       content 内容
   },
   showToast:显示或隐藏Toast框 param {
       content:显示的内容
   }
 }
 * @param {*} [params={}] 调用原生方法所需要携带的参数
 * @param {*} callBack 处理返回结果回调函数
 */
export async function JsCallNativeMethods(nativeName = 'navNativePage', params = {}, callBack) {
    await window.WebViewJavascriptBridge.callHandler(
        nativeName, {
            param: params,
        },
        Data => {
            if (_.isObject(Data)) {
                callBack(Data)
            } else {
                callBack(JSON.parse(Data))
            }

        }
    );
}


/**
 * @description h5路由首页返回原生页面
 * @param isBackNativePage 原生jsBridge注册返回方法
 */
export const isBackNativePage = () => {
    window.WebViewJavascriptBridge.callHandler('isBackNativePage');
}