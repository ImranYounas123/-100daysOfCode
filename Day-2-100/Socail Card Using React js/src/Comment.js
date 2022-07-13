import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React,{useState} from 'react'
import './Card.css';
const Comment = ({val,setValue}) =>{
    const [storeComment, setStoreComment] = useState([]);
    const HandleComment = (e) =>{
        e.preventDefault();
        setStoreComment([
            ...storeComment,
            {
                name : val,
            }

        ])
        setValue('')
        
    }
let date = new Date();
let today = date.getFullYear()+ " - "+date.getDate()+ " - "+date.getDay(); 
    return(
        <>
        <div className='Comment-Card shadow-lg'>
       <textarea type="text" value = {val} name='name' placeholder="Enter Your Suggestion" onChange= {(e)=>setValue(e.target.value)} ></textarea>
        {/* <TextField /> */}
        <button onClick= {HandleComment}><SendIcon color = "primary" /></button>
        <div className="comment-Container">
          <h2 className="text-center">dev Comments</h2>
            <ul className='text-info'>
            {
                storeComment.map((item, index) => (
                <li key={index}>{item.name} <sapn className ="Date text-danger">{today}</sapn> </li>
                    )
                )}
            </ul>
        </div>
        </div>
        </>
    )
   }
   export default Comment;