const Person = function (firstName, lastName, dateOfBirth) {
  this.name = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
};

document.getElementById("toTable").onclick = function () {
  let person = new Person(
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("birthdate").value
  );
  if (
    person.name === "" ||
    person.lastName === "" ||
    person.dateOfBirth === ""
  ) {
    alert("Please fill in all fields");
  } else {
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let name = row.insertCell(0);
    let surname = row.insertCell(1);
    let date = row.insertCell(2);
    name.innerHTML = person.name;
    surname.innerHTML = person.lastName;
    date.innerHTML = person.dateOfBirth;
  }
  return false;
};
