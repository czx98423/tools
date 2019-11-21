const makeRequest = async () => {
  const data = await getJSON();
  console.log(data)
  if (data>1) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData);
    return moreData;
  } else {
    console.log(data);
    return data;  
  }
}
function getJSON(){
  setTimeout(()=>{
    return 3
  },1000)
}
function makeAnotherRequest(data){
  
  setTimeout(()=>{
    return data^2
  },1000)
}
var a=makeRequest();