import { useState } from "react"
import Swal from "sweetalert2";

export default function ExpenseTracker(){

{/* 1. create ueState to store the task to be added and the array of tasks*/}

const [ newItem,setnewItem] = useState();
const [ price,setPrice] = useState();
const [ items,setItems] = useState([]);
{/* 4. write a function to handle the button click event*/}

const addTaskHandler =() =>{
{/*5. check if there is a new Item*/}
if(!newItem || !price ){
    Swal.fire("please fill all fields");
    return;
}
    
    {/*5. add each task to the array of tasks after the button is clicked*/}

setItems([...items,{  id: Date.now(),newItem, price: Number(price)} ]);
setnewItem("")
setPrice("")
}

//empty the values for the item and the price input

function deleteItemHandler(id){
    //filter all the items that doesn't have the parameter ID
setItems(items.filter(x => x.id !== id))
Swal.fire("Expense deleted");
}
    return<>
    <h1 className="text-center text-white text-uppercase" >Expense Tracker</h1>
<div className="todo-header m-3 p-3 w-32 rounded border border-primary">

{/* 2.add an onChange event  to the input*/}

<input value={newItem} onChange={e => setnewItem(e.target.value)}   placeholder="Enter Expense Description" type="text" className=" input-place fs-5 me-5 p-3  alert-primary rounded " />
<input value={price} onChange={e => setPrice(e.target.value)}   placeholder="Enter Expense Price" type="number" className=" input-place fs-5 me-5  p-3 alert-primary rounded " />

{/*3.  add an onClick to the button*/}
<button onClick={addTaskHandler} className="btn btn-primary p-3 fs-5 w-30"> Add Expense</button>
</div>

    <div className="tasks">
        {/* 6. map through the tasks and display them on the browser*/}
        {
           items.map(x => {
            return  <div key={x.id} className="bg-transparent border-2px-solid-black text-danger fs-5 d-flex justify-content-between m-3 p-3 rounded">

                {/*add deleteItemHandler */}
{x.newItem}
 <span> {x.price && x.price.toLocaleString() }</span>
            <h5 className="text-black">{newItem  }</h5> 
            <i style={{cursor:"pointer"}} onClick={() => deleteItemHandler(x.id)} className="fa fa-trash text-danger"></i>
</div>
          
    

           })  }
        <h1 className="text-primary m-5">TOTAL:{items.reduce ((a,c) => a + c.price,0)}</h1>
    </div>
    </>
}