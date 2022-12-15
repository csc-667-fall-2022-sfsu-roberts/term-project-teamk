// alert("Hello");
// Get a reference to the "Play" button
const playButton = document.getElementById('Play');

// Add an event listener to the button that listens for a click event
playButton.addEventListener('click', function() {
  // When the button is clicked, navigate the user to the "/lobby" page
  window.location = '/lobby';
});

