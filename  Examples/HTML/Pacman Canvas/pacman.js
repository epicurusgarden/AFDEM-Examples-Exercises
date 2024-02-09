// Get things rolling once the DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("pacman_canvas");
  const context = canvas.getContext("2d");

  // dir is the offset that will be added to pctOpen on every interval
  var dir = -10,
    pctOpen = 100;

  function drawPacman(pctOpen) {
    // Convert percent open to a float
    const fltOpen = pctOpen / 100;

    // Clear the canvas to draw the next part of the animation
    context.clearRect(0, 0, canvas.width, canvas.height);

    // An arc which stops at a specific percent to allow for the
    // open mouth to be drawn
    context.beginPath();
    context.arc(
      100,
      100,
      100,
      fltOpen * 0.2 * Math.PI,
      (2 - fltOpen * 0.2) * Math.PI
    );

    // The line leading back to the center and then closing the
    // path to finish the open mouth.
    context.lineTo(100, 100);
    context.closePath();

    // Fill pacman's head yellow
    context.fillStyle = "#FF0";
    context.fill();

    // Outline the head
    context.strokeStyle = "#000";
    context.stroke();

    // A circle for the eye
    var angle = Math.PI * (0.3 + fltOpen * 0.2),
      xDelta = 50 * Math.cos(angle),
      yDelta = 50 * Math.sin(angle);
    context.beginPath();
    context.arc(100 + xDelta, 100 - yDelta, 10, 0, 2 * Math.PI);
    context.fillStyle = "#000";
    context.fill();

    // Outline the eye
    context.strokeStyle = "#FFF";
    context.stroke();
  }

  // update pacman every 0.1 seconds
  setInterval(function () {
    drawPacman((pctOpen += dir));

    // when the mouth reaches its limit reverse the direction
    if (pctOpen % 100 == 0) {
      dir = -dir;
    }
  }, 100);
});
