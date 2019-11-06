var g_debugmode = 1; //0=online web    1=local app web
var g_server = 0; //0=测试环境请求地址 1=正式环境请求地址

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window
        .decodeURI(window.decodeURI(window.location.search.substr(1)))
        .match(reg); //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}

g_userid = getUrlParam('userid');
if (g_userid == null || g_userid == "null") {
    g_userid = window
        .sessionStorage
        .getItem("g_userid");
} else {
    window
        .sessionStorage
        .setItem("g_userid", g_userid);
}
g_token = getUrlParam('token');
if (g_token == null || g_token == "null") {
    g_token = window
        .sessionStorage
        .getItem("g_token");
} else {
    window
        .sessionStorage
        .setItem("g_token", g_token);
}

// "userid":"测试7544"'12207'10533 '10504'正式15301',
// "token":"web9275a051-d0ac-44e0-a8f0-d440def81d40" 获取用户的id
function commonMessage() {
    if (g_server == 0) {
        // var url = "http://60.195.252.86:8084"; var urlBrand =
        // "http://60.195.252.86:8080"; var urlMedical = "http://60.195.252.86:8083";
        // var medicalDetail = "http://60.195.252.86:8082"; var urlGod =
        // "http://60.195.252.86:8081"; var urlBanner = "http://60.195.252.86:8099"; var
        // urlQuestionnaire = "http://60.195.252.86:8018"; var url =
        // "http://60.195.252.86:8080";
        var urlBrand = "http://60.195.252.86:8080";
        var urlMedical = "http://60.195.252.86:8080";
        var medicalDetail = "http://60.195.252.86:8080";
        var urlGod = "http://60.195.252.86:8080";
        // var urlBanner = "http://60.195.252.86:8080"; var urlQuestionnaire =
        // "http://60.195.252.86:8080"; var url = "http://60.195.252.68:8084"; var
        // urlBrand = "http://60.195.252.68:8080"; var urlMedical =
        // "http://60.195.252.68:8083"; var medicalDetail = "http://60.195.252.68:8082";
        // var urlGod = "http://60.195.252.68:8081"; var urlBanner =
        // "http://60.195.252.68:8068"; var urlQuestionnaire =
        // "http://60.195.252.68:8018"; var urlOther = "http://60.195.252.68:8085";
        // 验收环境，采用域名方式 var urlBrand = "http://webple.haoyigong.com"; var urlMedical =
        // "http://prople.haoyigong.com"; var url = "http://dataple.haoyigong.com"; var
        // medicalDetail = "http://infople.haoyigong.com"; var urlGod =
        // "http://payple.haoyigong.com"; var urlBanner = "http://rgple.haoyigong.com";
        // var urlQuestionnaire = "http://diaowenple.haoyigong.com"; var other_Url =
        // "http://otherple.haoyigong.com/server_other"; var file_Url =
        // "http://fileple.haoyigong.com/server"; var video_Url =
        // "http://videople.haoyigong.com/server"
    } else {
        var url = "http://data.haoyigong.com";
        var urlBrand = "http://web.haoyigong.com";
        var urlMedical = "http://pro.haoyigong.com";
        var medicalDetail = "http://info.haoyigong.com";
        var urlGod = "http://pay.haoyigong.com";
        var urlBanner = "http://rg.haoyigong.com";
        var urlQuestionnaire = "http://diaowen.haoyigong.com";
        //var urlQuestionnaire = "http://60.195.252.83:8018";
    }
    if (g_debugmode == 0) {
        return user = {
            "url": url,
            "urlBrand": urlBrand,
            "medicalDetail": medicalDetail,
            "urlMedical": urlMedical,
            "urlGod": urlGod,
            // "userid": "10533",
            "userid": "7544",
            "token": "web9275a051-d0ac-44e0-a8f0-d440def81d40",
            "urlBanner": urlBanner,
            "urlQuestionnaire": urlQuestionnaire
        };
    } else {
        return user = {
            "url": url,
            "urlBrand": urlBrand,
            "medicalDetail": medicalDetail,
            "urlMedical": urlMedical,
            "urlGod": urlGod,
            "userid": g_userid,
            "token": g_token,
            "urlBanner": urlBanner,
            "urlQuestionnaire": urlQuestionnaire
        };
    }
}

/**
 * @description 判断是安卓/ios
 * @returns {"true/false"}
 */
function isAndroid() {
    var u = navigator.userAgent,
        flag = true;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    //解决fastClick与iscroll插件的冲突
    if (isAndroid) {
        return true;
    } else if (isiOS) {
        return false;
    }
}

/**
 * 应付测试数据加密,生成随机字符串并解密,只适用于纯数字，比如id,index
 * 不要给字母加密,后果自负!
 * 加密:
 * @param {any} type true为解密 false为加密
 * @param {any} val type为true时:需要解密的数字 type为false时需要加密的数字
 * @param {any} min 最小位数
 * @param {any} max 最大位数
 * @param {any} charStr 随机字符串
 * @returns 返回字符串
 */
function encryptData(type, val, min, max, charStr) {
    var returnStr = "",
        range;
    if (typeof min == 'undefined') {
        min = 5;
    }
    if (typeof max == 'string') {
        charStr = max;
    }
    if (typeof val == 'undefined') {
        console.error('必须传入原始数据!')
        return;
    }
    if (type == true) {
        var res = val.replace(/[a-z]/ig, '')
        return res;
    }

    range = ((max && typeof max == 'number') ?
        Math.round(Math.random() * (max - min)) + min :
        min);
    charStr = charStr || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < range; i++) {
        var index = Math.round(Math.random() * (charStr.length - 1));
        returnStr += charStr.substring(index, index + 1);
    }
    return val + returnStr;
}

/**
 * 判断是否是微信浏览器
 */
function is_weixn() {
    var ua = navigator
        .userAgent
        .toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}