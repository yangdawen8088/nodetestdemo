const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const models = require('../db/models');
const ecosystemConfig = require('../ecosystem.config');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
/** 查询任务列表 **/
app.get('/list/:status/:page', async (req, res, next) => {
    let { status, page } = req.params;
    let limit = 10;
    let offset = (page - 1) * limit;
    let where = {};
    if (status != 0) {
        where.status = status;
    }
    //  1.状态  1：表示代办，2：表示完成，3：表示删除，0：全部
    //  2.分页的处理
    let list = await models.Todo.findAndCountAll({
        where,
        offset,
        limit
    })
    res.json({
        list: list,
        message: '列表查询成功'
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
    let todo = await models.Todo.findOne({
        where: {
            id
        }
    });
    if (todo && status != todo.status) {
        //执行更新操作
        todo = await todo.update({
            status
        });
    }
    res.json({
        todo
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


// 启动命令 / 运维命令 / 运维文档
// 1.pm2 start ecosystemConfig.config.js
// 2.pm2 log
// 3.pm2 restart ecosystemConfig.config.js

//技术栈
//1.node-->http,异常
//2.web框架,express,hapi,koa,egg
//3.参数校验
//4.MySql的使用,
//5.ORM框架的学习，sequelize使用

//技术的关键点
//api
//web-->webserver-->router-->hander-->orm-->db

//注意事项
//需要做详细的模型设计-->模型之间的关系
//API的使用文档-->api文档的使用工具
//测试，