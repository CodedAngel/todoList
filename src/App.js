import logo from './logo.svg';
import './App.css';

import TodoApp from './pages/TodoApp';
import FakeStore from './pages/FakeStore';
import MovieWebsite from './pages/MovieWebsite';
import ExpenseTracker from './pages/ExpenseTracker';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return<BrowserRouter> 

  <a href="/" className='btn btn-primary bg-transparent text-white m-3 p-3 fa fa-home ' > Home</a>
  


<Routes>
  <Route path="/" element={<Home></Home>} />
  <Route path="/movie-tracker" element={<MovieWebsite></MovieWebsite>} />
  <Route path="/todo-app" element={<TodoApp></TodoApp>} />
  <Route path="/fake-store" element={<FakeStore></FakeStore>} />
  <Route path="/expense-tracker" element={<ExpenseTracker></ExpenseTracker>} />
  

</Routes>
  
  </BrowserRouter>
}

export default App;
