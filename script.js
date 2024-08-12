// Select the button and box elements
const changeColorButton = document.querySelector("#change-color-btn");
const colorBox = document.querySelector("#color-box");

// Attach the event listener to the button
changeColorButton.addEventListener("click", function () {
  // Generate a random RGB color
  const randomColor = generateRandomRGBColor();

  // Apply the random color to the background of the colorBox
  colorBox.style.backgroundColor = randomColor;
});

// Function to generate a random RGB color
function generateRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`; // Return the color in RGB format
}
// RGB stands for Red, Green and Blue
