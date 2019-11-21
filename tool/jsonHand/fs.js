/*
 * @Description: In User Settings Edit
 * @Author: czx
 * @Date: 2019-08-26 10:18:37
 * @LastEditTime: 2019-08-26 17:03:52
 * @LastEditors: Please set LastEditors
 */
let json = require('./taiwan');
let fs = require('fs');
//handle function
json.features.forEach(e=>{
    e.geometry.coordinates.forEach(el=>{
       var l=el[0].length
       el[0]=el[0].filter((ele,i)=>{
         if(l<10) return ele;
         if(i%5==0&&l<100) return ele;
         if(i%10==0&&l<300) return ele;
         if(i%30==0&&l>=300) return ele
      })
   })
})
json.features.forEach(e=>{
   
   if(e.geometry.coordinates.length!=1){
      var l=e.geometry.coordinates.length
      e.geometry.coordinates=e.geometry.coordinates.filter((ele,i)=>{
         if(l<10) return ele;
         if(i%1==0&&l<100) return ele;
         if(i%3==0&&l<500) return ele;
         if(i%10==0&&l<2500) return ele
         if(i%20==0&&l<10000) return ele
     })
   }
   else{
      var l=e.geometry.coordinates[0].length
      e.geometry.coordinates[0]=e.geometry.coordinates[0].filter((ele,i)=>{
         if(l<10) return ele;
         if(i%1==0&&l<100) return ele;
         if(i%3==0&&l<500) return ele;
         if(i%10==0&&l<2500) return ele
         if(i%20==0&&l<10000) return ele
     })
   }
})

console.log("准备写入文件");
fs.writeFile('input.js', JSON.stringify(json),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.js', function (err, data) {
      if (err) {
         return console.error(err);
      }
   });
});
