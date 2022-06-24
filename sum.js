function sum(num1=0,num2=0){
    // throw new Error("The thing is not summing")
    return num1+ num2;
};

function divide(num1, num2){
    return num1 / num2;
}


// let r= new Boolean(false);
// console.log(!(r));
module.exports= {
    sum, divide
};