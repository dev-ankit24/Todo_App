import React, { useState } from "react";
import style from "../Components/style.module.css"
import List from "./List/List";
import { v4 as uuidv4 } from 'uuid';

function TodoInput() {
  let [searchText, setSearchText] = useState("");
  let [listdata, setListData] = useState([]);
 const addItem=()=> {
    const newListData={
        id:uuidv4(),
        item:searchText,
        done:false
    }
    setListData([...listdata,newListData])
    setSearchText("")
    
  }

  // done icon chenge 
  const handleToggele=(itemId)=>{
    let newListData=listdata.map((listItem)=>{
      if(listItem.id === itemId){
        return {...listItem, done }
      }
      return listItem;
    })
    setListData(newListData)
  }
  console.log(listdata);

  //// delete item 
  //  function deleteItem(itemData){
  //   let newListItem= listdata.filter((itemData)=>itemData.id !== itemData)
  //   setListData(newListItem)
  //  }

  return (
    <>
      <div className="main-container">
      <h2>TODO LIST APP</h2>
        <div className="input-item">
          <input
          className="input-text"
            type="text"
            placeholder="Enter the Add Items"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="plus">
          <span className="plus-icon" onClick={addItem}>
            +
          </span>
          </div>
        </div>
        <List listdata={listdata} handleToggele={handleToggele}/>
      </div>
    </>
  );
}

export default TodoInput;
