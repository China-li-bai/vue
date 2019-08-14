import axios from 'axios';
/**请求超过5秒 */
const  server = axios.create({timeout:3000});

/**请求前的拦截 */
server.interceptors.request.use(config=>{
    return config
},error => {
    return Promise.reject(error)
});

/**请求前的拦截 */
server.interceptors.request.use(result=>{
    return result
},error => {
    return Promise.reject(error)

});