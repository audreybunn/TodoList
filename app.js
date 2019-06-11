loadEvents();
//load every event in the page
function loadEvents(){
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

//decides if the user clicked delete or tick
function deleteOrTick(e){
    if(e.target.className =='delete')
        deleteTask(e);
    else{
        tickTask(e);
    }
}

//delete task
function deleteTask(e){
    //gets the parent element of the target (target = li element, parent = ul element)
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    //removes the li from the ul
    parentNode.removeChild(remove);
}

//tick a task
function tickTask(e){
    //gets the text inside the li element (e.target = the tick button so the next sibling is the actual line)
    const task = e.target.nextSibling;
    //if it is checked strike through the list item
    if(e.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";
    }
    //if it is not checked remove the strike through
    else{
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}

function clearList(e){
    //setting the ul innerHTML to an empty string when the clear button is clicked
    let ul = document.querySelector('ul').innerHTML = '';
    document.querySelector('.tasksBoard').style.display = '';
}

//submit data function
function submit(e){
    e.preventDefault();
    let input = document.getElementById('itemInput');
    if(input.value != '')
      addTask(input.value);
    input.value = '';
  }

//add tasks to taskboard
function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">×</span>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
  }

function save(){
   //add save functionality
}

function load(){
    //add load functionality
}
