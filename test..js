function helo(a,b,c){
    c(a,b);
}
function division(a,b){
    console.log(a/b);
}
helo(10,5,division); // callback funtion
