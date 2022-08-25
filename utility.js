//Function to compute interest result when compute button is clicked
function compute() {
//create references to all input elements
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;

//create a new variable that hold the computed result
  let interest = (principal * years * rate) / 100;

//create a variable that convert the input "number of years" to actual year
  let year = new Date().getFullYear() + parseInt(years);

//Validate principal(Amount) field to ensure it is not zero or negative number
  if(principal <= 0){
    alert("Enter a positive number");
    principal.focus();
    return false;
  }

//Display computed result with all information
  let showResult = document.getElementById("result");
  showResult.innerHTML = `If you deposit <span style = "background-color: yellow"> ${principal} </span> <br /> 
                        at an interest rate of <span style = "background-color: yellow"> ${rate}% </span> <br />
                        You will receive an amount of <span style = "background-color: yellow"> ${interest} </span> <br />
                        in the year <span style = "background-color: yellow"> ${year} </span>`;  
}

//Function to display Interest rate below the range input when selected
function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
