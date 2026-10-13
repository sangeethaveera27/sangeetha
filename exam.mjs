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
export default add; //default export
export {subtract,multiply,division} //default export