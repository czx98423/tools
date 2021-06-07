const Stream=require('node-rtsp-stream');
 
// 设置rtsp视频流
const rtsp_url='rtsp://admin:serva123@192.168.3.169:554/h265/ch1/sub/av_stream'
 
const streams = new Stream({
    name: 'sockets',
    streamUrl: rtsp_url,
    wsPort: 9998,
    ffmpegOptions: { // 选项ffmpeg标志
      '-stats': '', // 没有必要值的选项使用空字符串
      '-r': 30, // 具有必需值的选项指定键后面的值<br>　　　　'-s':'1920*1080'
      '-s':'1920*1080'
    }
  })