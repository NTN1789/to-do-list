import React , {useState} from 'react'
import { Button ,  Paper,  TextField } from '@mui/material'






export default function Form({todoHandler}) {
// informação do texto 

const [text,setText] = useState(null)


  return (
    
         <Paper  style={{padding:"1em" }}> 
         <div  style={{display:"flex" , justifyContent: "center"}}>
      <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={ (e)  => setText (e.target.value)} fullWidth />             
     <Button  style={{marginLeft: "10px" }}  variant="contained"  onClick={() => todoHandler (text)}>add</Button>
          </div>
          
           </Paper>
    
  )
}
