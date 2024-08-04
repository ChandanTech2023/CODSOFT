
// Target buttton and result
const result = document.querySelector("#result");
const button = document.querySelectorAll("button");

for(let i =0; i<button.length; i++){
button[i].addEventListener("click", function(){
  
const buttonValue = button[i].textContent;
if(buttonValue == "AC")
{
  clearResult();
}
else if(buttonValue == "DEL"){
  deleteLastchar();
}
else if(buttonValue == "="){

  calculateResult();
}

else {
  appendValue(buttonValue);
}
});
}

function clearResult()
{
  result.value=" ";

}
function calculateResult()
{
  result.value =eval(result.value);
 
}
function deleteLastchar(){
  result.value=result.value.slice(0,-1)
}

function appendValue(buttonValue)
{
  result.value = result.value + buttonValue;
 
}
