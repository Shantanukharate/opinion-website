// Get references to the DOM elements
const form = document.getElementById('opinion-form');
const opinionInput = document.getElementById('opinion-input');
const opinionList = document.getElementById('opinion-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Get the opinion from the input field
  const opinionText = opinionInput.value.trim();

  if (opinionText) {
    // Create a new opinion element
    const opinionElement = document.createElement('div');
    opinionElement.classList.add('opinion');
    opinionElement.textContent = opinionText;

    // Append the opinion to the opinion list
    opinionList.appendChild(opinionElement);

    // Clear the input field
    opinionInput.value = '';
  }
});
