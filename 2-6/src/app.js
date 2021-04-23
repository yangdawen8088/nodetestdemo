// 1.app级别的使用
//      1.注册的时候，一定是在最顶级
//      2.app.use-->api去加载进来
// 2.router级别
// 3.异常处理--》app级别--》router
// 4.



const express = require('express');
const userRouters = require('../router/user_router');
const app = express();
app.get('/demo', (req, res) => {
    throw new Error("测试一下异常功能");
    // res.json({
    //     message
    // })
})
function demo_middleware(req, res, next) {
    try {
        //业务逻辑操作
    } catch (error) {
        next(error);
    }
}
function error_handler_middleware(err, req, res, next) {
    if (err) {
        let { message } = err;
        res.status(500)
            .json({
                message: `服务器异常:${message}`
            })
    } else {

    }
}
app.use(error_handler_middleware);
function not_found_handler(req, res, next) {
    res.json({
        message: 'API不存在'
    })
}
app.use(not_found_handler);




// function log_middlewarer(req, res, next) {
//     console.info("请求进来了");
//     next();
// }
// app.use(log_middlewarer);

// app.use(express.static('static', {
//     extensions:['html','htm']
// }))
// app.use('/user',userRouters);


// //中间件完整的结构
// //1.是一个函数
// //2.参数包括：err,req,res,next-->function
// function demo_middleware(err, req, res, next) {
//     // 1.异常处理
//     // 2.处理下业务功能，然后转交控制权--next
//     // 3.响应请求--结束响应-->当作路由的处理函数

// }
// function valid_name_middleware(req, res, next) {
//     let { name } = req.query;
//     if (!name || !name.length) {
//         res.json({
//             message: "缺少name参数"
//         })
//     } else {
//         next();
//     }
// }
// //1.
// app.all('*', valid_name_middleware);
// //2.
// app.get('/test', (req, res) => {
//     res.json({
//         message: 'test'
//     })
// })
app.listen(8088, '127.0.0.1', () => {
    console.info("服务已经启动！");
})