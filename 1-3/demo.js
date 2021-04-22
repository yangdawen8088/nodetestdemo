// //读取系统CPU的信息
// const os = require('os');
// const cpus = os.cpus();//获取当前系统的CPU的数量
// console.info("CPU的数量：" + cpus.length);
// const total = os.totalmem();//获取内存信息
// console.info(total / 1024 / 1024 / 1024);//GB的单位
// //查看还剩下多少内存
// const free = os.freemem();
// console.info("还剩下的内存数量：")
// console.info(free / 1024 / 1024 / 1024);//GB的单位



//web服务
//ajax-->api-->web server (node.js)
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello world!");
});
server.listen(8088, '127.0.0.1', () => {
    console.info("服务器已经启动了");
});