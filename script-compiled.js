'use strict';

var itemList = [];
var inputButton = document.querySelector("#input_button");
inputButton.addEventListener("click", addItem);
function addItem() {
  var item = document.querySelector(".item").value;
  if (item !== "") {
    itemList.push({
      text: item,
      completed: false
    });
    document.querySelector(".item").value = "";
    document.querySeXlector(".item").focus();
    showList();
  }
}
function showList() {
  var list = document.querySelector("#todo_list");
  list.innerHTML = "";
  itemList.forEach(function (todo, index) {
    var li = document.createElement("li");
    li.classList.toggle("completed", todo.completed);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
      todo.completed = !todo.completed;
      showList();
    });
    var span = document.createElement("span");
    span.textContent = todo.text;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      itemList.splice(index, 1);
      showList();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}
