const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));


// 1.所有的错误，http status==500
/** 查询任务列表 **/
app.get('/list/:status/:page', async (req, res, next) => {
    res.json({
        list: []
    });
});
// /** 创建一个todo **/
app.post('/create', async (req, res, next) => {
    let { name, deadline, content } = req.body;
    res.json({
        todo: [],
        name,
        deadline,
        content
    })
});
// /** 修改一个todo **/
app.post('/updata', async (req, res, next) => {
    let { name, deadline, content, id } = req.body;
    res.json({
        todo: [],
        name,
        deadline,
        content,
        id
    })
});
// /** 修改一个todo 删除 **/
app.post('/updata_status', async (req, res, next) => {
    let { id, status } = req.body;
    res.json({
        todo: [],
        id,
        status
    })
});
app.get((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
});
app.listen(8088, () => {
    console.info("服务器已经启动成功！");
});