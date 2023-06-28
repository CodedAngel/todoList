import { useState } from "react";
import Swal from "sweetalert2";

export default function MovieWebsite(){
  
   const[text,setText] =useState();
const [movies , setMovies] = useState([]);

function getMoviesHandler(e){
   e.preventDefault();
  
   fetch("http://www.omdbapi.com/?apikey=e311ac97&s="+ text)
   .then(res => res.json())
   .then(data => setMovies(data.Search))
   .catch(error => console.log("erroris " + error))
}

   return<div className="w-100"  style={{backgroundColor:"black",height:"100%", position:"absolute"}}>
   <h1 className="text-center text-white text-uppercase" >MOVIE HOME</h1>
<form  onSubmit={getMoviesHandler} className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-danger">

{/* 2.add an onChange event  to the input*/}
{/*http://www.omdbapi.com/?i=tt3896198&apikey=58ceac5e*/}


<input onChange={e => setText(e.target.value)}  placeholder="search movie" type="text" className="input-place fs-5 me-5 p-3 alert-danger rounded " />

{/*3.  add an onClick to the button*/}
<button  className="btn btn-danger p-3 fs-5 "> search</button>
   </form>
   <div className="d-flex flex-wrap justify-content-center px-1">

{movies.map(x=>{
   return <div key={x.imdbID} className="card" style={{width: '18rem'}}>
   <img src={x.Poster} className="card-img-top" alt="..." />
   <div className="card-body">
     <h5 className="card-title">{x.Title}</h5>
     <p className="card-text">{x.Year} {x.Type}</p>
     <a href="#" className="btn bg-danger btn-primary">Go somewhere</a>
   </div>
 </div>

})}

  



   </div>
   </div>
}