//读取系统CPU的信息
const os = require('os');
const cpus = os.cpus();//获取当前系统的CPU的数量
console.info("CPU的数量：" + cpus.length);
const total = os.totalmem();//获取内存信息
console.info(total / 1024 / 1024 / 1024);//GB的单位