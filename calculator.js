const clickInput = document.querySelectorAll(".row div");
const screen = document.querySelector(".input-box h2")

let fNum = "";
let sNum = "";
let op = "";


// console.log(input.length);
for(let i=0; i < clickInput.length ; i++){
    clickInput[i].addEventListener("click", getInput);
}

function getInput(event){
    let input = event.target.innerText;
    //console.log(input);
    checkInput(input);
    
}
function checkInput(input){
    if(input == 'C'){
        freshStart();
        return;
    }
    
    if(input == '+' || input =='-' || input =='/' || input =='x' || input == '='){
        //it means first number is ready 
        if(fNum != "" && op != "" && sNum !=""){
            fNum = Number.parseInt(fNum);
            sNum = Number.parseInt(sNum);
            let result = 0;
            if(op == '+') result = fNum + sNum;
            if(op == '-') result = fNum - sNum;
            if(op == '/') result = fNum / sNum;
            if(op == 'x') result = fNum * sNum;
            result = Number.parseInt(result);
            
            //assign final result to firstNumber
            fNum = result + "";
            sNum = "";
            //new operation
            if(input == '='){
                op = "";
            } else{
                op = input;
            }
        }
        else if(fNum != "" && input != '='){
            op = input;
        }
        screen.innerText = fNum;
        // console.log(fNum);
        // console.log(sNum);
    }
    
    else if(input == '←'){
        console.log("BackSpace clicked");
        if(sNum != ""){
            sNum = sNum.slice(0,sNum.length - 1);
            screen.innerText = sNum;
        } else if(fNum != ""){
            fNum = fNum.slice(0,fNum.length - 1);
            screen.innerText = fNum;
        }
        
    } 
    else{
                // it means when you are set with fnum and operator
        if(op != ""){
            sNum += input;
            screen.innerText = sNum;
        }
        // it means when you are starting with fnum
         else{
            fNum += input;
            screen.innerText = fNum;
        }
           
    }
    // console.log(screen);
    console.log(fNum);
    console.log(sNum);
}
function freshStart(){
    fNum = "";
    sNum = "";
    op = "";
    screen.innerText = "";
    return;
}