// ES6 module
let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let multiply=(a,b)=>{
    return a*b;
}
let division=(a,b)=>{  
    return a/b;
}

let findMax=(a,b)=>{
    if(a>b){
        return a;
}else{
    return b;
}
}
let findMin=(a,b)=>{
    if(a<b){
        return a;
}else{
    return b;
}
}
export default add; //default export
export {subtract,multiply,division} //default export