import Vue from 'vue';
import vueresource from 'vue-resource'
Vue.use(vueresource);
let vue=new Vue();
let url='http://www.lovegf.cn:8899';
export function getAjax(getstr,argu_one){//关于数据请求get
    let argu=0;
    let get_url=url +getstr+argu_one; 
    vue.$http.get(get_url).then(function(res){
        argu=res.body.message;
    })
    return argu
}
export function postAjax(poststr,argu_two){
    //关于数据请求get
    let argu=0;
    let post_url=url +poststr+argu_two; 
    vue.$http.post(post_url).then(function(res){
        const argu=res.body.message;
    })
    return argu;
}
export function jsonpAjax(jsonpstr,argu_three){ 
    //关于跨域的jsonp请求
    let argu=0;
    let jsonp_url=url +jsonpstr+argu_three; 
    vue.$http.post(jsonp_url).then(function(res){
        const argu=res.body.message;  
    })
    return argu;
}