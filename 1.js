找回密码

Web前端(W3Cways.com) - Web前端学习之路Web前端(W3Cways.com) - Web前端学习之路
关于本站
关注我们
首页
HTML / CSS
Javascript
web前端工具
前端资讯
前端框架
前端导航

koa
koa + formidable实现文件上传
2019 - 09 - 12 阅读(2835) 评论(0) 牵着狗狗看MM

苏州实时公交查询


koa有很多middleware可以实现文件上传， 如koa - body等， 很多middleware都是基于node - formidable
以koa - body为例， 虽然也可以实现文件上传， 但是不好对上传的文件进行控制， 比如权限验证， 文件类型、 大小校验等。
看其源码， 只提供了了formidable的fileBegin事件。

又例如： koa - formidable， 也只提供了form.parse()， 想要增加一些配置项， form.maxFieldsSize、 form.hash均不支持
所以还是基于node - formidable 自己去实现吧。

//app.js
const Koa = require('koa')
const router = require('./routes/index')
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)


//routes/index.js
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable');
const router = new Router()
router.post('/upload', (ctx, next) => {
  let form = new formidable.IncomingForm();
  form.hash = "md5";
  form.multiples = false; //默认只能上传一个文件,更多form的配置参考node-formidable
  form.maxFileSize = 2 * 1024 * 1024; //设置文件最大不超过2M
  function formImage() {
    return new Promise((resolve, reject) => {
      form.parse(ctx.req, async function (err, fields, files) { //注意：跟express有差异，这里要传入ctx.req
        let file = files[XXX]; //XXX是form-data的key , 一般为file，也可以自定义一个，可以用来校验
        if (file) {
          let flag = await Util.checkFile(file.type); //校验文件的大小和类型，我这里限制的是图片文件类型，校验文件的函数这里就不写了，可以根据实际的业务场景来写
          if (flag) { //文件校验通过
            const oldpath = files[memberId].path; //系统缓存上传的文件地址
            const dir = path.join(__dirname, `../static/upload/${XXX}`);
            const fileFormat = file.name.split('.');
            file.name = `${file.hash}_${Date.now()}.${fileFormat[fileFormat.length - 1]}`; //通过file.hash加时间戳生成文件名
            const newpath = `static/upload/${XXX}/${file.name}`;
            if (!fs.existsSync(dir)) { //先判断文件夹名是否存在，不存在则生成根据XXX生成对应的文件夹
              fs.mkdirSync(dir);
            }
            //如果是非WINDOWS系统，可以用fs.renameSync()来实现，这里为了兼容用了node的pipe来实现
            let readStream = fs.createReadStream(oldpath);
            let writeStream = fs.createWriteStream(newpath);
            readStream.pipe(writeStream); //这里文件已经上传成功
            resolve(ctx.origin + "/" + newpath) //返回完整的文件地址 http://localhost:3000/static/upload/XXX/123456.jpg
          } else { //文件校验失败
            reject(null)
          }
        } else {
          reject(null)
        }
      })
    })
  }
  await formImage()
    .then(res => ctx.success(res))
    .catch(err => ctx.error("上传失败")); //ctx.success() 和ctx.error()是我封装过的函数，可以用ctx.body = {}来替代
}); //文件上传
module.exports = router