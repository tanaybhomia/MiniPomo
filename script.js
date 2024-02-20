document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the timer span
  const timerSpan = document.getElementById("stimer");

  // Get references to the buttons
  const bminusone = document.getElementById("bminusone");
  const bfive = document.getElementById("bfive");
  const btwentyfive = document.getElementById("btwentyfive");
  const bplusone = document.getElementById("bplusone");

  // Initialize minutes and seconds
  let totalSeconds = 0;
  let timerInterval;

  // Function to update the timer display
  function updateTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    timerSpan.textContent = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds}`;
  }

  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function () {
      totalSeconds--;
      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        totalSeconds = 0;
      }
      updateTimer();
    }, 1000);
  }

  // Function to handle button clicks
  function handleClick(event) {
    clearInterval(timerInterval); // Clear any existing timer interval
    const action = event.target.id;

    // Update totalSeconds based on button clicked
    switch (action) {
      case "bminusone":
        totalSeconds -= 60;
        break;
      case "bfive":
        totalSeconds += 300;
        break;
      case "btwentyfive":
        totalSeconds += 1500;
        break;
      case "bplusone":
        totalSeconds += 60;
        break;
      default:
        break;
    }

    // Ensure totalSeconds is not negative
    totalSeconds = Math.max(0, totalSeconds);

    // Update the timer display and start the timer
    updateTimer();
    startTimer();
  }

  // Add event listeners to buttons
  bminusone.addEventListener("click", handleClick);
  bfive.addEventListener("click", handleClick);
  btwentyfive.addEventListener("click", handleClick);
  bplusone.addEventListener("click", handleClick);

  // Initial update of the timer display
  updateTimer();
});
