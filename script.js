const value=document.querySelectorAll(".number");
const result=document.querySelector(".inputNum");
const subRes=document.querySelector(".actionNum");
const action=document.querySelectorAll(".action button");
const ac=document.querySelector(".ac button");
const del=document.querySelector(".del button");
const dot=document.querySelector(".dots button");
const same=document.querySelector(".same");
let lastVal=0;
let actionType="";
let prevActionType="";

value.forEach(item=>{
    item.addEventListener("click",(e)=>{
        result.textContent+=e.target.textContent;
    })
})


action.forEach(item=>{
    item.addEventListener("click",(e)=>{
        let val=Number(result.textContent);
        actionType=e.target.textContent;

        if(prevActionType==""){
                switch (actionType) {
                    case "+":
                        sumNumber(val,actionType);
                        break;
                    case "-":
                        subNumber(val,actionType);
                        break;
                    case "*":
                        multiNumber(val,actionType);
                        break;
                    case "/":
                        divNumber(val,actionType);
                        break;         
                    default:
                        break;
                }
        }else{
                switch (prevActionType) {
                    case "+":
                        sumNumber(val,actionType);
                        break;
                    case "-":
                        subNumber(val,actionType);
                        break;
                    case "*":
                        multiNumber(val,actionType);
                        break;
                    case "/":
                        divNumber(val,actionType);
                        break;         
                    default:
                        break;
                }
        }
        
    })
})


const sumNumber=(num,type)=>{
    prevActionType=type;
    if(subRes.textContent==""){
        firstAction(num,type);   
    }else {
        lastVal+=num;
        subRes.textContent=lastVal+type;
        result.textContent="";
    }
        
}

const subNumber=(num,type)=>{
    prevActionType=type;
    if(subRes.textContent==""){
        firstAction(num,type);
    }else {
        lastVal-=num;
        subRes.textContent=lastVal+type;
        result.textContent="";
    }
}

const multiNumber=(num,type)=>{
    prevActionType=type;
    if(subRes.textContent==""){
        firstAction(num,type);
    }else {
        lastVal*=num;
        subRes.textContent=lastVal+type;
        result.textContent="";
    }
}

const divNumber=(num,type)=>{
    prevActionType=type;
    if(subRes.textContent==""){
        firstAction(num,type);   
    }else {
        if(num==0){
            result.textContent="Tanımsız";
            subRes.textContent="";
        }else {            
            lastVal/=num;
            subRes.textContent=lastVal+type;
            result.textContent="";
        }
        
    }
}


same.addEventListener("click",()=>{

    switch (actionType) {
        case "+":
            result.textContent=Number(lastVal)+Number(result.textContent);
            break;
        case "-":
            result.textContent=Number(lastVal)-Number(result.textContent);
            break;
        case "*":
            result.textContent=Number(lastVal)*Number(result.textContent);
            break;
        case "/":
            if(Number(result.textContent)!=0){
                result.textContent=Number(lastVal)/Number(result.textContent);
            }else{
                result.textContent="Tanımsız";
            }
            break;
        default:
            break;
    }

    subRes.textContent="";
})


ac.addEventListener("click",()=>{
    result.textContent="";
    subRes.textContent="";
})

del.addEventListener("click",()=>{
    result.textContent=(result.textContent).substring(0,(result.textContent).length-1)
});

dot.addEventListener("click",(e)=>{
    if(!(result.textContent).includes("."))
        result.textContent=result.textContent+"."
})

const firstAction=(num,type)=>{
    lastVal=num;
    subRes.textContent=lastVal+type;
    result.textContent="";    
}