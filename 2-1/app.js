const express = require('express');
//是一个express实例
const app = express();
// app.use((req, res) => {
//     res.json({
//         name: '张三'
//     })
// })
app.get('/name', (req, res) => {
    let { age } = req.params;
    res.send("age");
});
app.post('/test', (req, res) => {
    res.send('tom post');
})
app.get('/dawen/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        name: 'dawen',
        age
    });
})
app.listen(8088,'127.0.0.1', () => {
    console.info("服务已经启动！");
})


// //纯node.js
// const htpp = require('http');
// const server = http.createServer((req, res) => {

// })