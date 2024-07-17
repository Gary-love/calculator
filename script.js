const display=document.querySelector(".display")
const buttons=document.querySelectorAll("button")
let num1=-1;
let operator;
let num2=-2;

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(isNaN(button.id)==true){
          if(button.id=="+"||button.id=="-"||button.id=="*"||button.id=="/"){
            operator=button.id;
            num1=parseFloat(display.textContent);
            display.textContent="";
          }
          else if(button.id=="="){
            if(operator!=null){
                num2=parseFloat(display.textContent)
                display.textContent=operate(num1,operator,num2)
            }
            else{
                display.textContent="Error";
            }
          }
        }
        else{
            if(button.id==-1){
                display.textContent="0";
            }
            else if(display.textContent==0){
                return display.textContent=button.id
            }
            else{
                display.textContent+=button.id;
            }
        }     
    })
}
)
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
function operate(num1,operator,num2){
    if(operator=="+"){
       return add(num1,num2)
    }
    else if(operator=="-"){
       return subtract(num1,num2)
    }
    else if(operator=="*"){
        return multiply(num1,num2)
    }
    else if(operator=="/"){
        return divide(num1,num2)
    }
    else{
        return "INVALID"
    }
}
