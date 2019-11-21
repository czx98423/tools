let path = require('path');
let formidable = require('formidable');
let fs = require('fs');
let express = require('express');
let app=express();
let httpServer= require('http').Server(app);

app.get('/ok', function (req, res) {
    res.sendFile(__dirname+'/fileread/file.html');
 })
 app.post('/upload', function (req, res) {

	var form=formidable.IncomingForm({
		encoding : 'utf-8',//上传编码
		uploadDir : "lx",//上传目录，指的是服务器的路径，如果不存在将会报错。
		keepExtensions : true,//保留后缀
		maxFieldsSize : 2 * 1024 * 1024//byte//最大可上传大小
	});

	var allFile=[];
	form.on('progress', function(bytesReceived, bytesExpected) {//在控制台打印文件上传进度
	  var progressInfo = { 
		 value: bytesReceived, 
		 total: bytesExpected 
	  }; 
	  console.log('[progress]: ' + JSON.stringify(progressInfo)); 
	  res.write(JSON.stringify(progressInfo)); 
	})
	.on('file', function (filed, file) {
	   allFile.push([filed, file]);//收集传过来的所有文件
	})
	.on('end', function() { 
	   res.end('上传成功！'); 
	})
	.on('error', function(err) {
	  console.error('上传失败：', err.message); 
	  next(err); 
	})
	.parse(req,function(err, fields, files){
		console.log(fields.type)
	  if(err){
		 console.log(err);
	  }
	  allFile.forEach(function(file,index){
		  var fieldName=file[0];
		  var types = file[1].name.split('.');
		  var date = new Date();
			var ms = Date.parse(date);
			console.log(file[1].path)
		  fs.renameSync(file[1].path,form.uploadDir+"/"+types[0]+"."+String(types[types.length-1]));//重命名文件，默认的文件名是带有一串编码的，我们要把它还原为它原先的名字。
	  });
	}); 
 })
app.use(express.static(path.join(__dirname,'./js')))
app.use(express.static(path.join(__dirname,'./fileread')))
app.use(express.static(path.join(__dirname,'./img')))
app.use(express.static(path.join(__dirname,'./lx3d')))
httpServer = app.listen(8083)
console.log('ok')
