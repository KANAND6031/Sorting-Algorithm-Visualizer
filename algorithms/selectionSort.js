async function selectionSort(){

for(let i=0;i<arr.length;i++){

let min=i

for(let j=i+1;j<arr.length;j++){

await checkPause()

highlight(min,j)

if(arr[j] < arr[min]) min=j

await sleep(delay)

}

[arr[i],arr[min]]=[arr[min],arr[i]]

draw()

}

}