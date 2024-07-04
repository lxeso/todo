'use strict';

let itemList = [];
let inputButton = document.querySelector("#input_button");

inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".item").value;
    if (item !== "") {
        itemList.push({ text: item, completed: false });
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
        showList();
    }
}

function showList() {
    let list = document.querySelector("#todo_list");
    list.innerHTML = "";
    itemList.forEach((todo, index) => {
        let li = document.createElement("li");
        li.classList.toggle("completed", todo.completed);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => {
            todo.completed = !todo.completed;
            showList();
        });

        let span = document.createElement("span");
        span.textContent = todo.text;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            itemList.splice(index, 1);
            showList();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}
