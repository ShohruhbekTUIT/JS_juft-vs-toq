var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
var elSpan = document.querySelector(".site-span");

var juftArray = [];
var toqArray = [];

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault();

  var elInputVal = elInput.value;
  if(elInputVal > 0){
    if(elInputVal % 2 == 0){
      elSpan.textContent = elInputVal + "  soni juft son";
      elInput.value = "";
      juftArray.push(elInputVal);
      console.log(juftArray);
    }
    else{
      elSpan.textContent = elInputVal + "  soni toq son";
      elInput.value = "";
      toqArray.push(elInputVal);
      console.log(toqArray);
    }
  }
  else{
    elSpan.textContent = "Iltimos musbat son kiriting";
    elInput.value = "";
  }
});