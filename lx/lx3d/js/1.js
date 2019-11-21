var a=['add','remove'].some(function(e){
  if('batchRemove'.toLowerCase().indexOf(e)>=0){
    return true
  }
})
console.log(a)