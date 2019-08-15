module.exports = {
    devServer:{
        proxy:{
            '/api':{
                /**localhost:8080/api/coding/tokens =>
                 * 通过 proxy 转换为 http://192.168.113.117:8080/tokens*/
                target:'http://192.168.113.117:8080',
                changeOnSelect:true,
                pathRewrite:{
                    '^/api/coding/':'/'
                }
            }
        }
    }
};