const express = require('express');
const app = express();
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
const models = require('../models');//模型对象
//models.User
//models.Sequlize
//models.sequlize

app.get('/create', async (req, res) => {
    let { name } = req.query;
    //promise user-->sequlize 对象
    let user = await models.User.create({
        name
    });
    console.info(user);
    res.json({
        message: "新增数据成功",
        user
    });
})
app.get('/list', async (req, res) => {
    let list = await models.User.findAll();
    res.json({
        list: list
    });
})
app.get('/detail/:id', async (req, res) => {
    let { id } = req.params;
    let user = await models.User.findAll({
        where: {
            id
        }
    });
    res.json({
        user
    });
})
//注册路由
app.use('/member', memberRouter);
app.use('/sku', skuRouter);
app.listen(8088, () => {
    console.info('服务器已经启动');
})