import React, { useState } from 'react'
import Todolist from './Todolist';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const App = () => {
  const [inputList, finalInput] = useState("");
  const [submit, newSubmit] = useState([])

  const items = (event) => {
    finalInput(event.target.value)
  }
  const submitBtn = () => {
    newSubmit((getValue) => {
      return [...getValue, inputList]
    });
    finalInput("")
  };

  const deleteItems = (id) => {
    console.log("deleted");

    newSubmit((getValue) => {
      return getValue.filter((arrElem, index) => {
        return index !== id;
      });
    });

  };

  return (
    <>
      <div className="container">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" value={inputList} onChange={items} />
          <Button className="btn" onClick={submitBtn}> <AddIcon /> </Button>


          <ol>
            {
              submit.map((value,index) => {
                return( <Todolist 
                text={value}
                key={index}
                id={index}
                onSelect={deleteItems}
                
                 />
              )
            })}

          </ol>
        </div>
      </div>

    </>
  );
}

export default App;
