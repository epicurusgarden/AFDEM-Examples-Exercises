const submitComment = document.querySelector("button");
submitComment.addEventListener("click", comment);

function comment(event) {
  event.preventDefault();
  const placeHere = document.querySelector("#comments");
  const comment = document.querySelector("#comment").value;
  const li = document.createElement("li");
  li.innerHTML = comment;
  if (comment === "") {
    alert("Πρέπει να γράψετε κάτι!");
  } else {
    placeHere.appendChild(li);
    document.getElementById("comment").value = "";
  }
}
