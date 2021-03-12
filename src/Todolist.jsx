import React from "react";

const Todolist = (props) =>{

    

    return(
        <>
        <div className="todo-style">
          <i className="fa fa-times"    
              onClick={()=>{
                  props.onSelect(props.id);
              }}
          />
         <li>{props.text}</li>
         </div>
        </>
    )
}
export default Todolist;