import './App.css';
import React,{useState,useEffect} from "react"
import Form from "./Component/Form"
import TodoList from "./Component/TodoList"


function App() {


  const [inputText, setInputText] = useState()
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos, setfilterTodos] = useState([])

  useEffect(()=>{
    getLocalTodo();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodo();
  },[todos,status])

  const filterHandler =()=>{
    switch (status){
      case "completed":
        setfilterTodos(todos.filter( todo=> todo.completed === true ));
        break;
      case "uncompleted":
        setfilterTodos(todos.filter( todo=> todo.completed === false ));
        break;
      default:
        setfilterTodos(todos);
        break;
      }
  }
  const saveLocalTodo = ()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  const getLocalTodo = ()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }
  return (
    
      <div className="App">
       <header>
         <h1>To Do List</h1>
       </header>
       <Form 
       setInputText={setInputText} 
       todos={todos}  
       setTodos={setTodos} 
       inputText={inputText}
       setStatus={setStatus}
      
       />
       <TodoList
        setTodos={setTodos}
         todos={todos}
         filterTodos={filterTodos}
         />
      </div>
  );
}

export default App;
