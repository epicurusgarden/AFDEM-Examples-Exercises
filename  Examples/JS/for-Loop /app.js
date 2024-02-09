function howMany(selectedObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectedObject.options.length; i++) {
    if (selectedObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
  alert(
    "Number of options selected: " + howMany(document.selectForm.musicTypes)
  );
});
