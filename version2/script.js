document.addEventListener("DOMContentLoaded", function () {
    // 로컬 스토리지에서 할 일 목록을 불러옵니다. 
    //DOMContentLoaded 이벤트는 HTML 문서가 완전히 로드되고 파싱된 후에 발생합니다. 이 이벤트가 발생하면 할 일 목록 기능을 초기화합니다
    const todos = JSON.parse(localStorage.getItem("todos")) || []; // 로컬 스토리지에서 할 일 목록을 불러옵니다. 로컬 스토리지에 저장된 데이터가 없으면 빈 배열을 사용합니다.
    const todoList = ("todo-list"); // 할 일 목록을 표시할 요소를 가져옵니다.
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo");

    // 할 일 목록을 화면에 표시하는 함수
    function renderTodos() {
        todoList.innerHTML = ""; // 기존 목록을 초기화
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.classList.toggle("completed", todo.completed);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => {
                todo.completed = !todo.completed;
                saveTodos();
                renderTodos();
            });

            const span = document.createElement("span");
            span.textContent = todo.text;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    // 할 일을 로컬 스토리지에 저장하는 함수
    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // 추가 버튼 클릭 이벤트 핸들러
    addTodoButton.addEventListener("click", () => {
        const text = todoInput.value.trim();
        if (text) {
            todos.push({ text, completed: false });
            saveTodos();
            renderTodos();
            todoInput.value = "";
        }
    });

    // 초기 할 일 목록을 렌더링합니다.
    renderTodos();
});
