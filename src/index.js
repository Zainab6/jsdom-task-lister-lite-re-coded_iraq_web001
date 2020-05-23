document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit").addEventListener("click",function() {
    event.preventDefault();
  })
function addToDo() {
  const list= document.createElement("li");
  const input = document.getElementById("new-task-description").value;
  
  const uList = document.getElementById("tasks");
  list.innerHTML = `${input}`;
  uList.appendChild("list");
  
}
  });