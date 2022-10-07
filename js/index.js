//This is a dance move application that allows for them to
// be saved in a list form

// You will need an array to save the entries to, and an event listener,
// like we went over in class, to save the entries when a button is clicked

// *** Hint: Look at the HTML IDs on how to select elements.

// create an array to save dance move
let danceMoveContainer = [];

// listen to "click" event -- id = "submitBtn"
submitBtn.addEventListener("click", () => {
  //push value we get to an array every time we click
  danceMoveContainer.push(danceInput.value);

  //create variable that will hold an array
  let danceMoves = "<h2>My Dance Move List</h2><ul>";

  //loop through an array --- add to variable--danceMoves
  for (let i = 0; i < danceMoveContainer.length; i++) {
    danceMoves += `<h3>${i + 1}. ${danceMoveContainer[i]}</h3>`;
  }

  //AFTER the loops - display only once with variable-dancemoves
  danceList.innerHTML = danceMoves + "</ul>";

  //clear input
  danceInput.value = "";
  danceInput.focus();
});
