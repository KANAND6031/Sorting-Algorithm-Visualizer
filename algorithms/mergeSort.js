async function mergeSort(l,r){

if(l>=r) return

let mid=Math.floor((l+r)/2)

await mergeSort(l,mid)
await mergeSort(mid+1,r)

let temp=[]
let i=l
let j=mid+1

while(i<=mid && j<=r){

await checkPause()

highlight(i,j)

if(arr[i] < arr[j]) temp.push(arr[i++])
else temp.push(arr[j++])

await sleep(delay)

}

while(i<=mid) temp.push(arr[i++])
while(j<=r) temp.push(arr[j++])

for(let k=l;k<=r;k++){

arr[k]=temp[k-l]

draw()

await sleep(delay)

}

}