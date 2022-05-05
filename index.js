const name = document.querySelector("#name");
const age = document.querySelector("#age");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#booklist");


btn.addEventListener("click", function(e) {
  e.preventDefault();




  var newRow = document.createElement("tr");

  var newName = document.createElement("td");
  newName.innerHTML = name.value;
  newRow.appendChild(newName);

  var newAge = document.createElement("td");
  newAge.innerHTML = age.value;
  newRow.appendChild(newAge);

  var newYear = document.createElement("td");
  newYear.innerHTML = year.value;
  newRow.appendChild(newYear);


  bookList.appendChild(newRow);
  name.value = '';
  age.value = '';
  year.value = '';

});
