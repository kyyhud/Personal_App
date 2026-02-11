const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function backspaceDisplay(){
    display.value = display.value.slice(0, -1);
}
function clearDisplay(){
    display.value="";
}
function clearLastEntryDisplay(){
    display.value = display.value.replace(/[\d.]+$/, '');
}
function changeSign(){
    if(display.value.startsWith("-")){
        display.value = display.value.substring(1);
    }
    else{
        display.value = "-" + display.value;
    }
}
function calculate(){
    try{
        const result = eval(display.value);
        
        if(result.toString().length > 10){
            // Check if it's a decimal number
            if(result.toString().includes('.')){
                // Round to fit within 10 characters
                const maxDecimals = 10 - Math.floor(result).toString().length - 1;
                display.value = result.toFixed(Math.max(0, maxDecimals));
            } else {
                display.value = "Error";
            }
        } else {
            display.value = result;
        }
    }
    catch(error){
        display.value = "Error";
    }
}
function appendToDisplay(value){
    if(display.value.length < 10){
        display.value += value;
    }
}
