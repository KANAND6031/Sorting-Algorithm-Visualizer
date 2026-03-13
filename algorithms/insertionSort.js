async function insertionSort(){

for(let i=1;i<arr.length;i++){

let key=arr[i]
let j=i-1

while(j>=0 && arr[j] > key){

await checkPause()

highlight(j,j+1)

arr[j+1]=arr[j]

j--

draw()

await sleep(delay)

}

arr[j+1]=key

draw()

}

}