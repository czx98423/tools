let path = require('path');
let formidable = require('formidable');
let fs = require('fs');
let express = require('express');
let app = express();
let httpServer = require('http').Server(app);
let bodyparse = require('body-parser')

app.get('/ok', function (req, res) {
  res.sendFile(__dirname + '/fileread/upLoad.html');
})

app.get('/api/core/assets/:id/poleAssets', function (req, res) {
  console.log(1)
  res.json({
    status: "202",
    id: req.params.id
  })
})
app.get('/api/core/assets', function (req, res) {
  console.log(req.headers)
  res.json({
    status: "202",
    id: req.params.id
  })
})
app.post('/api/core/users/login', function (req, res) {
  console.log('login')
  res.json({ "id": "bKU4sZ5Y3VE1kNoUZVPGIFh20lGZD13HydHExAmgm3ZRJClDZqNQP1Z8Jt 35OgjH", "ttl": 1209600, "created": "2018-09-07T04:08:34.066Z", "userId": "5b3dbd477102a6155c6c2111" })
})

app.get('/api/core/domains/:id/statistic', function (req, res) {
  console.log('domains')
  console.log(req.query)
  var arr=[];
  for (let index = 0; index < 6; index++) {
    arr.push({ "type": 3, "dateTime": "2019-07-24T16:00:00.000Z", "variable": "active-energy", "value": (Math.random()*10).toFixed(2), "id": "5d38808114cbd218f084c77c", "domainId": "5bdd3b4f183e0af89c68df70" })    
  }
  res.json(arr)
})
app.get('/api/core/assets/:id/req/device-sensor:environment', function (req, res) {
  console.log('environment')
  var obj={"item": [ {"type":0,"param":"17.8"}, //温度 
  {"type":1,"param":"42.4"}, //湿度 
  {"type":4,"param":"94.00"}, // PM2.5 
  {"type":5,"param":"1012"}, // 大气压 
  {"type":7,"param":"0.3"}, // 风速 
  {"type":8,"param":"320.0"}, // 风向 
  {"type":6,"param":"51.3"} // 噪音 
]}
  res.json(obj)
})
app.get('/api/core/statuses/:id', function (req, res) {
  console.log('/api/core/ludengInfo/:id')
  var obj = {
    "id": "00158D000046A689", 
    "model": "ssslc", 
    "domain_id": "5cbd4385d7e28623a46bee2a", 
    "status": {
      "online-status": 0, // 在线状态，0：离线，1：在线 
      "switch-status": [ // 当前开关状态，目前只有第一路 
        { "index": 0, "status": 1 }
      ], 
      "dim-level":
        [ // 当前调光亮度（0%-100%） 
          { "index": 0, "level": 0 }
        ],
      "active-power": 1.17, // 当前功率 单位 W 
      "current": 0.016, // 当前电流 单位 A 
      "voltage": 70.5, // 当前电压 单位 V 
      "running-time": 48035100, // 运行时间 单位秒 
      "total-energy": 289.03000000000003 // 当前能耗 单位 kwh 
    },
    "update_time": "2019-06-06T22:06:11.823Z"
  }
  res.json(obj)
})

app.get('/api/core/v2/faults', function (req, res) {
  var obj = {"id": "5bdd3b83183e0af89c68df74", "model": "ssads", "type": "ac-fault", "asset_id": "8909B827EBA5F392", "level": 2, "clear": false, "confirm": false, "first_happen_time": "2019-12-26T03:38:45.036Z", "last_happen_time": "2019-12-26T09:11:21.946Z" };
  var arr =[] ;
  for(var i =0;i<15;i++){
    arr.push(obj)
  }
  res.json(arr)
})
app.get('/api/core/statuses', function (req, res) {
  var obj = {
    "id": "00158D000046A689", 
    "model": "ssslc", 
    "domain_id": "5cbd4385d7e28623a46bee2a", 
    "status": {
      "online-status": 0, // 在线状态，0：离线，1：在线 
      "switch-status": [ // 当前开关状态，目前只有第一路 
        { "index": 0, "status": 1 }
      ], 
      "dim-level":
        [ // 当前调光亮度（0%-100%） 
          { "index": 0, "level": 0 }
        ],
      "active-power": 1.17, // 当前功率 单位 W 
      "current": 0.016, // 当前电流 单位 A 
      "voltage": 70.5, // 当前电压 单位 V 
      "running-time": 48035100, // 运行时间 单位秒 
      "total-energy": 289.03000000000003 // 当前能耗 单位 kwh 
    },
    "update_time": "2019-06-06T22:06:11.823Z"
  }
  var arr =[] ;
  for(var i =0;i<14;i++){
    arr.push(obj)
  }
  res.json(arr)
})
app.post('/delete', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(fields);
    console.log(files)
  })
  res.json({ code: 1 })
})
app.post('/upload', function (req, res) {
  console.log(1)
  var form = formidable.IncomingForm({
    encoding: 'utf-8',//上传编码
    uploadDir: "lx",//上传目录，指的是服务器的路径，如果不存在将会报错。
    keepExtensions: true,//保留后缀
    maxFieldsSize: 2 * 1024 * 1024//byte//最大可上传大小
  });

  var allFile = [],
    savePath = './lx/lx3d/img';
  form.on('progress', function (bytesReceived, bytesExpected) {//在控制台打印文件上传进度
    var progressInfo = {
      value: bytesReceived,
      total: bytesExpected
    };
    console.log('[progress]: ' + JSON.stringify(progressInfo));
  })
    .on('file', function (filed, file) {
      allFile.push([filed, file]);//收集传过来的所有文件
    })
    .on('end', function () {
      res.json({ status: 1 });
    })
    .on('error', function (err) {
      console.error('上传失败：', err.message);
      next(err);
    })
    .parse(req, function (err, fields, files) {
      if (err) {
        console.log(err);
      }
      console.log(fields);
      var save = savePath + '/' + new Date().getTime()
      fs.exists(save, exist => {
        if (!exist) {
          fs.mkdir(save, e => {
            if (e) {
              console.log(e)
            }
            allFile.forEach(function (file, index) {
              var fieldName = file[0];
              var types = file[1].name.split('.');
              var date = new Date();
              var ms = Date.parse(date);
              console.log(file[1].path)
              fs.renameSync(file[1].path, save + "/" + types[0] + "." + String(types[types.length - 1]));//重命名文件，默认的文件名是带有一串编码的，我们要把它还原为它原先的名字。
            });
          })
        }
      })
    });
})
app.use(express.static(path.join(__dirname, './js')))
app.use(express.static(path.join(__dirname, './fileread')))
app.use(express.static(path.join(__dirname, './img')))
app.use(express.static(path.join(__dirname, './lx3d')))
httpServer = app.listen(8083)
console.log('ok')
