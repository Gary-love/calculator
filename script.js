function add(...num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    return sum;  
}
function subtract(...num){
    let result=num[0];
    for(let i=1;i<num.length;i++){
        result-=num[i];
    }
    return result;
}
function multiply(...num){
    let product=1;

    for(let i=0;i<num.length;i++){
        product*=num[i];
    }
    return product;
}
function divide(...num){
    let result=num[0];
    for(let i=1;i<num.length;i++){
        if(num[i]===0){
            throw new Error('Cannot divide by zero');
        }
        result/=num[i];
    }
    return result;
}
