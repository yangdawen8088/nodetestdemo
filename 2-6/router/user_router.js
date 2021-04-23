const express = require('express');
const router = express.Router();//这里创建了一个路由对象
//1.第一个场景
router.use(function (req, res, next) {
    console.info("路由日志");
    next();
});
function vlaid_login_params(req, res, next) {
    console.info("验证测试")
    let { name, password } = req.query;
    if (!name || !password) {
        res.json({
            message: "参数校验失败！"
        })
    } else {
        req.formdata = { name, password };
        next();
    }
}
//2.路由内部使用
router.get('/login', [vlaid_login_params/* middleware 此处中间件是可以一直追加的*/], (req, res) => {
    let { formdata } = req;
    res.json({
        formdata,
        message: "您来到了路由位置"
    })
})
module.exports = router;