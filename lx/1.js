// function Animal(name){
//     console.log(this)
//   this.name = name;
//   this.showName = function(){
//         console.log(this.name);    
//     }    
// }

// function Cat(name){
//     console.log(this)
//   Animal.apply(this,[name]);    
// }

// var cat = new Cat("咕咕");
// cat.showName();

// function Class10(){
//     this.showSub = function(a,b){
//           console.log(a - b);
//       }   
//   }
  
//   function Class11(){
//     this.showAdd = function(a,b){
//         console.log(a + b);
//       }  
//   }
  
//   function Class12(){
//     Class10.apply(this);
//     Class11.apply(this);   
//     // Class10.call(this);
//     //Class11.call(this);  
//   }
  
//   var c2 = new Class12();
//   c2.showSub(3,1);    //2
//   c2.showAdd(3,1);    //4

var scopeTest = (function(){ //考察了 this 的含义
    window.a=2;
    function fn(b){
    this.b = b;
    console.log(this.a);
    }
    var obj = {a:4,fn:fn};
    fn();
    obj.fn();
    fn.call(obj);fn.call(null);
    fn.apply(obj);fn.apply(null);
    var fninstance = new fn(8);
    console.log(fninstance.b);}
)()