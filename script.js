function scrollHorizontally(e) {
  e.preventDefault(); // Prevent default scrolling behavior

  var deltaY = e.deltaY * -1;

  function convertRange(number) {
    if (number < -25) {
      return -25;
    } else if (number > 25) {
      return 25;
    }
    return number;
  }

  var scrollSpeed = 60;

  var scrollAmount = (convertRange(deltaY)) * scrollSpeed;
  console.log(scrollAmount);

  window.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth' // Add smooth scrolling behavior
  });
}

// Add the event listener for modern browsers
window.addEventListener("wheel", scrollHorizontally);
