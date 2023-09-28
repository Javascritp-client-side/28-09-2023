function sum(n1,n2){
    return n1 +n2
}
const sum1 = function(n1,n2){
    return n1 + n2
}
const sum2 = (n1,n2) =>n1+n2
const sum3 = function sumfn(n1,n2){
    return n1 + n2
}
const sum4 = (n1,n2) => n1+n2

console.log(sum(1,2))
// console.log(sumfn(1,2))
const sum5 = (n1,n2) =>{
    return n1 + n2
}
console.log(sum5(1,2))