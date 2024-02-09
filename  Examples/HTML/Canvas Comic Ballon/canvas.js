function draw() {
  var cnv = document.getElementById("myCanvas").getContext("2d");
  // Let's create a comic balloon
  cnv.beginPath();
  cnv.moveTo(75, 25);
  cnv.quadraticCurveTo(25, 25, 25, 62.5);
  cnv.quadraticCurveTo(25, 100, 50, 100);
  cnv.quadraticCurveTo(50, 120, 30, 125);
  cnv.quadraticCurveTo(60, 120, 65, 100);
  cnv.quadraticCurveTo(125, 100, 125, 62.5);
  cnv.quadraticCurveTo(125, 25, 75, 25);
  cnv.lineWidth = "3";
  cnv.strokeStyle = "green";
  cnv.stroke();
}

draw();
