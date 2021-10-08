var wrapperEle =document.body.querySelector(".wrapper");

var damage =[]

function renderList () {
    for(var i=0; i<damage.length; i++){
        makeElement(i);
        wrapperEle.innerHTML="";
        var ele=document.createElement("div")
        ele.innerHTML=damage[i];
        wrapperEle.appendChild(ele);
    }
}

function makeElement(idx){
    var ele=document.createElement("div");
    ele.innerHTML=list[idx];
    wrapperEle.appendChild(ele);
}

renderList();
makeElement(1);

document.body.querySelector("myFunction(this)").addEventListener("click", function()){

})