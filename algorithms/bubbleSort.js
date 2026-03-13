async function bubbleSort(){

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length-i-1;j++){

await checkPause()

highlight(j,j+1)

if(arr[j] > arr[j+1]){

[arr[j],arr[j+1]]=[arr[j+1],arr[j]]

draw()

}

await sleep(delay)

}

}

}