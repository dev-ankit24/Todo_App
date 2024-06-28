import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { ListItem } from '@mui/material';
function List({listdata, handleToggele}) {
  return (
    <>
    <div className='main-list'>
    <ol >
        {
            listdata.map((itemData)=>{
                return(
                    <li key={itemData.id} >
                        <span className='li-item'>{itemData.item}</span>
                        <span className='li-icon'>
                        {
                          ListItem.done ?(<CloseIcon onClick={()=> handleToggele(itemData.id)} />)
                          :(<DoneIcon onClick={()=> handleToggele(itemData.id)}/>)
                        }
                      
                        </span>
                    </li>
                )
            })
        }
    </ol>
    </div>
    </>
  )
}

export default List