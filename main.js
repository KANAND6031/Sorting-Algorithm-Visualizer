const slider=document.getElementById("size")
const sizeValue=document.getElementById("sizeValue")

sizeValue.innerText=slider.value

slider.oninput=function(){
sizeValue.innerText=this.value
}

function generateRandom(){

let size=parseInt(document.getElementById("size").value)

let arr=[]

for(let i=0;i<size;i++){
arr.push(Math.floor(Math.random()*100)+1)
}

document.getElementById("userArray").value=arr.join(",")

document.getElementById("preview").innerText="Generated Array: "+arr.join(", ")
}

function start(){

let arrInput=document.getElementById("userArray").value.trim()

let algo=document.getElementById("algorithm").value

let arr=[]

if(arrInput.length>0){
arr=arrInput.split(",").map(Number)
}

else{

let size=parseInt(document.getElementById("size").value)

for(let i=0;i<size;i++){
arr.push(Math.floor(Math.random()*100)+1)
}

}

localStorage.setItem("array",JSON.stringify(arr))
localStorage.setItem("algorithm",algo)

window.location.href="visualizer.html"

}