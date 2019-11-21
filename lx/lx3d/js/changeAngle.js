var btn1=document.querySelector("#btn>div:first-child")
console.log(btn1)
btn1.addEventListener("click",function(){
    box.add(wall);
})
var btn2=document.querySelector("#btn>div:nth-child(2)")
btn2.addEventListener("click",function(){
    var defaultInteraction = new mono.DefaultInteraction(network);
        var selectionInteraction = new mono.SelectionInteraction(network);
        var editInteraction = new mono.EditInteraction(network);
        network.setInteractions([defaultInteraction, selectionInteraction, editInteraction]);
})
var btn3=document.querySelector("#btn>div:nth-child(3)")
btn3.addEventListener("click",function(){   
    box.remove(wall);
})


