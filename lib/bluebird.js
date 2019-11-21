const Promise=require('bluebird');

const p1=new Promise(function(resolve,reject){
  const num = Math.random();
  setTimeout(function(){
    if(num>0.5)
    resolve(num)
  else
    reject(num)
  },1000) 
})
const p2=new Promise(function(resolve,reject){
  const num = Math.random();
  setTimeout(function(){
    if(num>0.5)
    resolve(num)
  else
    reject(num)
  },1000) 
})
Promise.all([p1,p2]).then((res)=>{
  console.log({res})
},(err)=>{
  console.log({err})
})