const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputBox ==""){
        alert("you must write something!");
    }else{
        /* creating a html element li  */
        let li = document.createElement("li");
        // assignimg the value to li from input
        li.innerHTML = inputBox.value;
        /* we should also want to display the li to the parent container */
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    //empty the input box
    inputBox.value ="";
    storedata();
}
//event listner on container variable
    listcontainer.addEventListener("click",function(e){
        //it will target tag name li
        if (e.target.tagName === "LI") {
            //it will tongle the the class list
            e.target.classList.toggle("checked");
            storedata();
        }
        //it will remove the the span parent element
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            storedata();
        }
    },false);
// function to store data
    function storedata(){
        //to store data in local storage
        localStorage.setItem("data",listcontainer.innerHTML);
    }
// function to diaplay data
function displayedata(){
        listcontainer.innerHTML = localStorage.getItem("data");
    }
    displayedata();
