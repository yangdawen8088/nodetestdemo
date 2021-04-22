const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello world 测试一下');
});
server.listen(8088, '127.0.0.1', () => {
    console.info("服务器启动成功！");
});
//配置nodemon
//1. npm isntall nodemon -D
//2.修改 package.json中的启动命令
//3.通过增加nodemon.json配置指定特殊watch