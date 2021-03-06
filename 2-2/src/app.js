const express = require('express');
const app = express();
// app-->Application-->web服务的实例
//1.通过请求的方法类型：get/post/put/delete
// app.get('/demo', (req, res) => {
//     //req：请求对象
//     //res：服务器响应对象
//     res.json({
//         message: "你好！你通过get的请求"
//     });
// })
// app.post('/test', (req, res) => {
//     //req：请求对象
//     //res：服务器响应对象
//     res.json({
//         message: "你好！你通过post的请求"
//     });
// })
// //2.通过URL
// app.get('/user/byname', (req, res) => {
//     let { name } = req.query;
//     res.json({
//         name
//     });
// })
// app.get('/user/byid', (req, res) => {
//     let { id } = req.query;
//     res.json({
//         id
//     });
// })
// app.all('/demo', (req, res) => {
//     res.json({
//         message: "这是一个演示",
//         method: req.method
//     });
// })
// app.all('*', (req, res) => {
//     res.json({
//         message: "这是一个演示",
//         method: req.method,
//         url:req.path
//     });
// })
// app.use((req, res) => {
//     res.json({
//         message: "这是一个演示",
//         method: req.method,
//         url:req.path
//     })
// })
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
//注册路由
app.use('/member',memberRouter);
app.use('/sku',skuRouter);
app.listen(8088, '127.0.0.1', () => {
    console.info("服务器已经启动了！");
});