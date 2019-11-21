var p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(2)
    console.log(2)
  },2000)
})

const makeRequest = () => {
  return p1
    .then(data => {
      if (data>1) {
        console.log(data)
        return data
      } else {
        console.log(data)
        return data
      }
    })
}
makeRequest();
