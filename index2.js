let set1 = [1,2,3,6]
let set2 = [3,6,7,8]
let bigSet = set1.concat(set2)
let obj = {}
let count = 1
let sum = 0
let sum2 = 0




for (i=0; i<bigSet.length;i++){
  let count = 1
  if (bigSet[i] in obj === false){
    obj[bigSet[i]] = count
  }
  else if (bigSet[i] in obj){
    obj[bigSet[i]] = obj[bigSet[i]]+1
  }
}
//sum of overlapping elements
for (key in obj){
  if(obj[key] === 2){
    sum += parseInt(key * obj[key]) 
  }
}
console.log(`sum of overlapping element: ${sum} `)

 
//sum of distinct number
 for (key in obj) {
   if (obj[key] === 1){
     sum2 += parseInt(key)
   }
 }
 console.log(`sum of distinct element: ${sum2} `) 
 