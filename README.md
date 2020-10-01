# loghere

可以在 PM2 和 Serverless 中使用的一款简易日志工具

## 简介
在 Node.js 中，比较成熟的日志工具是 log4js，但是由于种种原因，在和 pm2 搭配使用时，log4js 打印的日志很难被 pm2 接收，需要进行很多的额外配置。loghere 就是为了解决这个问题诞生的。与 log4js 的功能完整相比，loghere 只提供了非常轻量级的功能，同时保持了和 log4js 类似的 API，使用上非常简单。

## 安装
直接使用 npm 命令安装即可：
```shell
npm i loghere
```

## 使用
```
const loghere = require('loghere')    // 引用
const logger = loghere.getLogger()    // 获取日志实例
logger.log('这是日志内容')              // 打日志
```
