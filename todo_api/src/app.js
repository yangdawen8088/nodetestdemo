const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const models = require('../db/models')

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
/** 查询任务列表 **/
app.get('/list/:status/:page', async (req, res, next) => {
    res.json({
        list: []
    })
});
/** 创建一个todo **/
app.post('/create', async (req, res, next) => {
    try {
        let { name, deadline, content } = req.body;
        let todo = await models.Todo.create({
            name,
            deadline,
            content
        });
        res.json({
            todo,
            message: "数据创建成功！"
        })
    } catch (error) {
        next(error);
    }
});
/** 修改一个todo **/
app.post('/updata', async (req, res, next) => {
    try {
        let { name, deadline, content, id } = req.body;
        let todo = await models.Todo.findOne({
            where: {
                id
            }
        })
        if (todo) {
            //执行更新操作
            todo = await todo.update({
                name,
                deadline,
                content
            });
        }
        res.json({
            todo
        })
    } catch (error) {
        next(error);
    }
});
/** 修改状态 删除 **/
app.post('/updata_status', async (req, res, next) => {
    let { id, status } = req.body;
    res.json({
        todo: {},
        id,
        status
    })
});

/** 异常全局捕获 **/
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: "请求发生错误：" + err.message
        })
    }
})
app.listen(8088, () => {
    console.info("服务器已经启动成功！");
})