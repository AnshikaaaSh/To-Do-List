//getting all required elements
const inputBox= document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData=inputBox.value; //getting user entered value
    if(userData.trim() !=0){//if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    }
    else{
        addBtn.classList.remove("active"); //unactive the add button
    }

}
showTasks(); // calling showTasks function

//if user clicks on the add Button
addBtn.onclick=()=>{
    let userData= inputBox.value; //getting user entered value
    let getLocalStorage= localStorage.getItem("New Todo"); //getting local storage
    if(Storage == null){ //if localstorage is null
        listArr=[]; //creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage); //transforming json string into a js object
    }  
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); //calling showTasks function
    addBtn.classList.remove("active"); // unactive the add button
}

//function to add task list inside ul
function showTasks(){
    let userData= inputBox.value; //getting user entered value
    let getLocalStorage= localStorage.getItem("New Todo"); //getting local storage
    if(Storage == null){ //if localstorage is null
        listArr=[]; //creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent=listArr.length; //passing the length value in the pendingNumb
    if(listArr.length >0){ //if array is greater than 0
        deleteAllBtn.classList.add("active");// active the clearAll button
    }else{
        deleteAllBtn.classList.remove("active");//unactive the clearAll button
    }
    let newLiTag=' ';
    listArr.forEach((element, index) => {
        newLiTag += <li> ${element} <span oneclick= "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>;
    });
    todoList.innerHTML = newLiTag; // adding new  li tag inside ul tag 
    inputBox.value=""; //once task added leave the input field blank
}

// delete some tasks
function deleteTask(){
    let getLocalStorage= localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed item
    // after removing the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//delete all tasks function

deleteAllBtn.oneclick = () =>{
    listArr=[]; //empty array
    // after deleting all tasks in the li again update the local
    localStorage.setItem("New Todo", JSON.stringify(listArr));// transforming js object into a json string
    showTasks(); // calling showTasks function
}