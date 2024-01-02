let taskVal;
const taskList = document.querySelector(".taskdiv");
const myFunction = () => {
  let input = document.querySelector(".inputGet");
  taskVal = input.value;
  createTask();
};

const createTask = () => {
  let newTask = document.createElement("li");
  let btnx = document.createElement("button");
  newTask.innerHTML = taskVal;
  btnx.innerHTML = "X";
  btnx.setAttribute("onclick", "removeT(this)");
  newTask.appendChild(btnx);
  taskList.appendChild(newTask);
};

const removeT = (button) => {
  let Parent = button.parentNode;
  Parent.remove();
};
