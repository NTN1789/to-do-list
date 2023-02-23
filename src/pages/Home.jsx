import React , {useState} from 'react'
import  {Container} from "@mui/material"
import '../App.css';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import List from '@mui/material/List';


export default function Home() {
    const [todos, setTodos] = useState([]); 
    

    const todoHandler = (todo) => {
        console.log(todo)
    //    setTodos([...todos, todo])
    }


  return (
     <Container maxWidth="xs"  style={{marginTop: "2em"}}>   
    <Form  todoHandler={todoHandler} />

    <List sx={{  marginTop:"1em" }}>
        {todos.map ((todo) => {
              <div key={todo.id} style={{marginTop:"1em"}}>
            <TodoItem/>
              </div>  
        })}
    </List>
    </Container>                  
   // tamanho do container XS
    
  );
}
