var propsIds=[ '气体浓度 （PPM）', '/探头/' ];
var data ={ '气体浓度 （PPM）': 24,
  '探头调零': 22,
  '探头标定': 28,
  '设置满量程数值': 22,
  '设定第二报警点数值': 30,
  '设定第一报警点数值': 22 }

  for (var prop in data) {
    var selected=propsIds.some(function (e,index,arr) {               
      if (e.startsWith('/') && e.endsWith('/')) {
        if (new RegExp(e.replace(/\//g, '')).test(prop)) {
          return true;                    
        }
      } 
      else if(arr.indexOf(prop)>=0){                        
          return true;       
      }     
    })
    !selected&&delete data[prop]; 
  }
  console.log(data)