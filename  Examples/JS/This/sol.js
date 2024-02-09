

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function handleClick() {
  document.getElementById("firstname").textContent = this.firstName;
}


let myself = {
  firstName: "Theodoros",
  lastName: "Kolokotronis"
}

document.getElementById("demo").innerHTML = person.fullName.call(myself);


let personClick = handleClick.bind(myself);
document.getElementById("demo").addEventListener("click", personClick);