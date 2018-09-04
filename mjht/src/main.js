// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment/moment'
import ElementUI from 'element-ui'
import Left from './components/left'
// import qs from 'qs'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
import promise from 'es6-promise'
promise.polyfill()
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://www.iyuebanwan.com/apartment'
axios.defaults.timeout = 20000
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(Left)
Vue.use(ElementUI)

// POST传参序列化(axios请求拦截器)
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
  //  config.data = qs.stringify(config.data);
    config.headers = {'Content-Type': 'application/json'}
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

//  返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    if (res.status.state === 1000) {
      return Promise.reject(res)
    }
  }
  //  if(res.status.success){
  //  return Promise.reject(res);
  // }
  return res
}, (error) => {
  //  404等问题可以在这里处理
  return Promise.reject(error)
})

//  时间转换
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  return moment.unix(value).format(formatString) // 这是时间戳转时间
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
