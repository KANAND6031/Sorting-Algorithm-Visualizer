let arr = JSON.parse(localStorage.getItem("array"))
let algo = localStorage.getItem("algorithm")

let delay = 300
let paused = false

const complexity = {

bubble:{name:"Bubble Sort",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)"},

selection:{name:"Selection Sort",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)"},

insertion:{name:"Insertion Sort",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)"},

merge:{name:"Merge Sort",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)"},

quick:{name:"Quick Sort",best:"O(n log n)",avg:"O(n log n)",worst:"O(n²)",space:"O(log n)"}

}

function showComplexity(){

let data = complexity[algo]

document.getElementById("algoName").innerText = data.name
document.getElementById("best").innerText = data.best
document.getElementById("avg").innerText = data.avg
document.getElementById("worst").innerText = data.worst
document.getElementById("space").innerText = data.space

document.getElementById("complexity").style.display = "block"

}

function goHome(){

window.location.href = "main.html"

}

function sleep(ms){
return new Promise(resolve => setTimeout(resolve, ms))
}

async function checkPause(){

while(paused){
await sleep(100)
}

}

function pauseSort(){
paused = true
}

function resumeSort(){
paused = false
}

function draw(){

const container = document.getElementById("array")
container.innerHTML = ""

for(let i=0;i<arr.length;i++){

let box = document.createElement("div")
box.classList.add("box")
box.innerText = arr[i]
container.appendChild(box)

}

}

function highlight(i,j){

const boxes = document.querySelectorAll(".box")
boxes.forEach(b => b.classList.remove("active"))
if(boxes[i]) boxes[i].classList.add("active")
if(boxes[j]) boxes[j].classList.add("active")

}

function markSorted(){

const boxes = document.querySelectorAll(".box")
boxes.forEach(b => b.classList.add("sorted"))

}

async function startSort(){

if(algo == "bubble") 
await bubbleSort()

if(algo == "selection") 
await selectionSort()

if(algo == "insertion") 
await insertionSort()

if(algo == "merge") 
await mergeSort(0, arr.length-1)

if(algo == "quick") 
await quickSort(0, arr.length-1)

markSorted()

showComplexity()

document.getElementById("backBtn").style.display = "inline-block"

}

draw()