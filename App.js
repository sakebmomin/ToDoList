import React, { useState } from "react";
import TodoList from'./TodoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }; 

  const listOfItem = () =>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItmes = (id) => {
    console.log("deleted");

    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index)=> {
         return index !== id;
      })
    })
};
  
return(
  <>
  <div className="main_div">
   <div className="center_div">
     <br />
     <h1> ToDo List</h1>
     <br />
     <input type="text" placeholder="Add Item" 
      value={inputList}
     onChange={itemEvent}/>
     <button onClick={listOfItem}> + </button>


     <ol>
       {/*<li>{inputList}</li>*/}

       {Items.map( (itemval, index) => {
         return <TodoList 
         key={index}
         id={index} 
         text= {itemval} 
         onSelect = {deleteItmes}  
         />;
       } )}
       
     </ol>
   </div> 
  </div>
  </>
);
};

export default App;
