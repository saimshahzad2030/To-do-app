var ul=document.getElementById("ul-1")
function add(){
    
var inpt=document.getElementById("first-input")
// console.log(inpt.value)
if(inpt.value === ""){
    alert("Kindly insert some valid work to do")
}
else{

var li=document.createElement("li")

li.setAttribute("class","list")
var tn=document.createTextNode(inpt.value)
var del=document.createElement("button")
del.setAttribute("id","d-btn")
del.setAttribute("onclick","del(this)")
// this se hum is hi var ko copy karwa sakteb hain
// console.log(del)
var dtn=document.createTextNode("Delete")
var etn=document.createTextNode("Edit")



var edit=document.createElement("button")
edit.setAttribute("id","e-btn")
edit.setAttribute("onclick","edit(this)")
console.log(edit)
del.appendChild(dtn)
edit.appendChild(etn)
console.log(edit)
li.appendChild(tn)

ul.appendChild(li)
li.appendChild(edit)
li.appendChild(del)

// console.log(li)
inpt.value=""
}
}
function del_all(){
// var ul=document.getElementById("ul-1")
// ul.remove()



var da=confirm("Delete all?")

 if(da===true){
    if(ul.innerHTML===""){
        alert("Nothing is being added in the list")
    }
    ul.innerHTML=""
    
}
else{

}
}
function del(e){
var conf = confirm("Do u want to Delete this item??")
if(conf===true){
    e.parentNode.remove()
}
    else{

    }
}
function edit(f){
// console.log(f.parentNode.firstChild)
var z= f.parentNode.firstChild.nodeValue
var prom=prompt("Enter updated value",z)

var fnl = document.getElementById("ul-1")
if(prom===""){
    alert("Enter some kind of info please")
    f.parentNode.firstChild.nodeValue=z
}
else{
    f.parentNode.firstChild.nodeValue=prom
}

// .node value tab kaam aata hai jab kisi cheez mein liha hua text get karna ho
}





































































// function add(){

//     var inpt=document.getElementById("first-input")
    
// // console.log(inpt.value)
// if(inpt.value === ""){
//     alert("Kindly insert some valid work to do")
// }
// else if(inpt.value.length>20){
//     alert("please insert some small text")
// }
// else{

// var div=document.getElementById("div2")
// var ul=document.createElement("ul")
// ul.setAttribute("id","ul-1")
// ul.setAttribute("class","delul")
//     div.appendChild(ul)
// console.log(div)
// var li=document.createElement("li")

// li.setAttribute("class","list")
// var tn=document.createTextNode(inpt.value)
// var del=document.createElement("button")
// del.setAttribute("id","d-btn")
// del.setAttribute("onclick","del(this)")
// // this se hum is hi var ko copy karwa sakteb hain
// // console.log(del)
// var dtn=document.createTextNode("Delete")
// var etn=document.createTextNode("Edit")

// var edit=document.createElement("button")
// edit.setAttribute("id","e-btn")
// edit.setAttribute("onclick","edit(this)")
// // console.log(edit)
// del.appendChild(dtn)
// edit.appendChild(etn)

// li.appendChild(tn)

// ul.appendChild(li)
// li.appendChild(edit)
// li.appendChild(del)
// console.log(ul)
// // console.log(li)
// inpt.value=""
// }
// }
// function del_all(){
// var ul=document.getElementById("ul-1")
// ul.remove()
// }
// function del(e){
//     e.parentNode.remove()
// }
// function edit(f){
// // console.log(f.parentNode.firstChild)
// var z= f.parentNode.firstChild.nodeValue
// var prom=prompt("Enter updated value",z)

// var fnl = document.getElementById("ul-1")
// f.parentNode.firstChild.nodeValue=prom
// // .node value tab kaam aata hai jab kisi cheez mein liha hua text get karna ho
// }


























































































