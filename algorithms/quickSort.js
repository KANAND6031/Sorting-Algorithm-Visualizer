async function quickSort(l,r){

if(l>=r) return

let pivot=arr[r]
let i=l

for(let j=l;j<r;j++){

await checkPause()

highlight(j,r)

if(arr[j] < pivot){

[arr[i],arr[j]]=[arr[j],arr[i]]

i++

draw()

await sleep(delay)

}

}

[arr[i],arr[r]]=[arr[r],arr[i]]

draw()

await sleep(delay)

await quickSort(l,i-1)
await quickSort(i+1,r)

}