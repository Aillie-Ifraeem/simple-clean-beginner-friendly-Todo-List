const todolist = [{
  
}];
renderTodoList();

function renderTodoList() {
  let todoSTR = "";
  for (let i = 0; i < todolist.length; i++) {
    let TodoTaskName = todolist[i];
    let name=TodoTaskName.name;
    let dueDate=TodoTaskName.dueDate;
   let html = `
      <div class="todo-item">
        <div class="todo-left">${name} ---------- ${dueDate}</div>
        <button onclick="
          todolist.splice(${i}, 1);
          renderTodoList();
        " class="deleteButton">Delete</button>
      </div>
    `;

    todoSTR += html;
  }
  document.querySelector(".todocontainer").innerHTML = todoSTR;
}

document.querySelector('.js-bt-add').addEventListener('click', ()=>{
  addtodo();
})

function addtodo() {
  let textname = document.querySelector(".todoName");
  let textdate = document.querySelector(".todoDueDate");


  const name = textname.value;
  const date= textdate.value;
  console.log(name);
  console.log(date);

  todolist.push({
    name:name,
    dueDate:date
  });
  console.log(todolist);

  textname.value = "";

  renderTodoList();
}