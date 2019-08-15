
import request from './request.js';
/** 定义一个API url接口 */
// const ourl ='/api/coding';
const ourl =process.env.NODE_ENV === 'development' ? '/api/coding' : '';
export const LoginApi=(fromData)=>{
    request.post(`${ourl}/tokens`,fromData)
};
