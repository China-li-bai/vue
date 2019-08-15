import axios from 'axios';

/**请求超过5秒 */
const  server = axios.create({timeout:5000});

/**请求前的拦截 */
server.interceptors.request.use(config=>{
    return config
},error => {
    return Promise.reject(error)
});

/**响应前的拦截 */
server.interceptors.response.use(result=>{
    return result
},error => {
    return Promise.reject(error)

});
export default server