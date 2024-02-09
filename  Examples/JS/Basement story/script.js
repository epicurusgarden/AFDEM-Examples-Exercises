var personName = "";

function complainMessage() {
    alert("Σου είπα να μην το κάνεις αυτό " + personName);
}


function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  const body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "Έψαξα προσεκτικά το υγρό και σκοτεινό υπόγειο. Ώστε εδώ είσαι! Του χαμογέλασα με όλα τα 70 δόντια μου: έλα κοντά μου σημερινό μου γεύμα!";
}