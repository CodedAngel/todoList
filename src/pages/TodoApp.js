import { useState } from "react"
import Swal from "sweetalert2";

export default function TodoApp(){

{/* 1. create ueState to store the task to be added and the array of tasks*/}

const [ newItem,setnewItem] = useState();
const [ items,setItems] = useState([]);
{/* 4. write a function to handle the button click event*/}

const addTaskHandler =() =>{
{/*5. check if there is a new Item*/}
if(!newItem){
    Swal.fire("please eneter a task");
    return;
}
    
    {/*5. add each task to the array of tasks after the button is clicked*/}

setItems([...items,{  id: Date.now(),newItem} ]);
console.log(items);
}
function deleteItemHandler(id){
    //filter all the items that doesn't have the parameter ID
setItems(items.filter(x => x.id !== id))
Swal.fire("task deleted");
}
    return<>
    <h1 className="text-center text-white text-uppercase" >TodoApp</h1>
<div className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-success">

{/* 2.add an onChange event  to the input*/}

<input onChange={e => setnewItem(e.target.value)}   placeholder="Enter Task Description" type="text" className="input-place fs-5 me-5 p-3 alert-success rounded " />

{/*3.  add an onClick to the button*/}
<button onClick={addTaskHandler} className="btn btn-success p-3 fs-5 "> Add Task</button>
</div>

    <div className="tasks">
        {/* 6. map through the tasks and display them on the browser*/}
        {
           items.map(x => {
            return  <div key={x.id} className="bg-light border-success text-danger fs-5 d-flex justify-content-between m-3 p-3 rounded">
                {/*add deleteItemHandler */}

            <h5 className="text-black">{newItem}</h5> <i style={{cursor:"pointer"}} onClick={() => deleteItemHandler(x.id)} className="fa fa-trash text-danger"></i>



        </div>
       
    

           }) 
        }
       
    </div>
    </>
}