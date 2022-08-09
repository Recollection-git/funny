import axios from 'axios'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
 
  if (localStorage.getItem("token")) {
    config.headers['token'] = `${localStorage.getItem("token")}`// 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  return config
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    return res.data
  },
  error => {
   
    return Promise.reject(error)
  }
)

export default service
