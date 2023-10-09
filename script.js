// Hiding the 'not selecting any operation' alert
function hideAlert() {
  document.getElementById("alert1").style.display = "none";
}

// Hiding the 'dividing the zero' alert
function clearAlert() {
  document.getElementById("alert2").style.display = "none";
}

// Clearing the answer
function clearScreen() {
  document.getElementById("answer").value = "";
}

function calculate() {
  // Reading the values from the number 1 & number 2
  // Assigning the values to constant variables
  // Converting the String to Float data type using parseFloat
  const val1 = parseFloat(document.getElementById("number1").value);
  const val2 = parseFloat(document.getElementById("number2").value);

  // Condition when no proper values are given
  if (isNaN(val2) || isNaN(val1)) {
    // isNaN used to check whether the value is not number
    // || (OR) condition to check whether any of the condition is true then execution done
    document.getElementById("alert3").style.display = "block";

    // clearScreen() function is called to clear answer field
    clearScreen();
  }
  // The alert will be hidden only when the submit is clicked again,
  //  As this function is called on click of submit button
  else {
    document.getElementById("alert3").style.display = "none";
  }

  // Value read of the dropdown and assigned to a variable
  const opr = document.getElementById("operator").value;

  // variable declared to display answer
  let result;

  // Switch Case to perform operations

  // When the value of the opr is same as case, then respective code will be executed
  switch (opr) {
    case "+":
      result = val1 + val2;
      break;
    case "-":
      result = val1 - val2;
      break;
    case "*":
      result = val1 * val2;
      break;
    case "/":
      // Condition for divide by zero
      if (val2 == 0) {
        document.getElementById("alert2").style.display = "block";
        clearScreen();
      } else {
        result = val1 / val2;
      }
      break;
    case "%":
      result = val1 % val2;
      break;
    case "**":
      result = val1 ** val2;
      break;
    default:
      // The alert div for not selecting any operator
      document.getElementById("alert1").style.display = "block";
  }

  // Display the value of answer
  document.getElementById("answer").value = result;
}

// The theme changer
function changeTheme() {
  // Checking whether the text in #theme-btn id is Dark or not
  if (document.querySelector("#theme-btn").textContent == "Dark") {
    // If its dark, html tag's atrribute data-bs-theme is set to dark
    // The #theme-btn text is set to Light
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector("#theme-btn").textContent = "Light";
  }

  // Same code block with reversed values
  else {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector("#theme-btn").textContent = "Dark";
  }
}
