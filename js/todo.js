

const todoForm = document.querySelector("#todo-form"); // 아이디가 todo-form인 엘리먼트를 가져온다.
const todoInput = document.querySelector("#todo-form input"); // 아이디가 todo-form 엘리먼트에서 자식 엘리먼트인 input태그를 가져온다.
const todoList = document.querySelector("#todo-list"); // 아이디가 todo-list이고, 반복문을 돌려주는 ul태그를 말한다. 즉 li가 for을 돌겠다.



// todo-list를 만들기전 코드를 작성하기 전 먼저 그려지는 순서부터 생각을 해보자.
// 첫 번째 사용자가 input창에 내용을 입력하고 엔터를 침.
// 두 번째 input창에 있는 값을 가지고 todos전역변수에 배열에 값을 저장하고, localstorage으로 저장한다.
// 세 번째 input에 내용을 입력하고 엔터키를 입력하면 input값은 초기화 상태로 돌아간다.
// 네 번째



let todos = [];




function saveTodoItem(){
    localStorage.setItem("todos",JSON.stringify(todos));
 }




function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=>{
        return todo.id !==  parseInt(li.id);
    })
    saveTodoItem();
}

function plusToto(newTodo){

    console.log(newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click",deleteTodo);

    span.innerText = newTodo.text;
    button.innerText = "❌";
    
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }

    plusToto(newTodoObj);
    todos.push(newTodoObj);
    saveTodoItem();
}


todoForm.addEventListener("submit",handleTodoSubmit);


const saveTodos = localStorage.getItem("todos");

if(saveTodos !== null){
    const parsonTodo = JSON.parse(saveTodos);
    todos = parsonTodo;
    parsonTodo.forEach(plusToto);
}   


