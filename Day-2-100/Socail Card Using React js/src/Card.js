import React, {useState, useEffect} from 'react';
import './Card.css';
import Comment from './Comment'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import logo from "../../assets/logo.png";
const Card = () =>{

const [hert , setHeart] = useState(0);
const [isActive, setActive] = useState(false)
const [toggle,setToggle] = useState(true);
const [commentToggle, setCommentToggle] = useState(true);
const[comment, setComment] = useState('');


const Toggle = () => setToggle(!toggle);
const CommentToggle = () => setCommentToggle(!commentToggle);

const onClickEvent = ()=>{
    setHeart(hert + 1);
    setActive(current => !current);
}
const onClickStyle = {
    transition : 'all 0.5s',
    color : isActive ? 'red' : 'black'
}
    return(
    <>
    <div className='card-Container shadow-lg border border-light'>
        <div className='card-Header'>
        <div onClick ={Toggle} className = "toggle" >
             <ExpandMoreOutlinedIcon />
            </div>
            <div className='logo'>
                <img src={logo} alt="ok" />
            </div>
        {
         toggle &&
            <>     
            <div className="content">
              <div style = {{display : "flex"}}>
           <span className='name'>The Practical Dev </span><p style={{fontWeight : 'normal', marginLeft : '4px'}}>@ThePracticalDev</p>
              </div>
                <span className='name'>Learning React Start Smart</span>
               <p>Author : <span className='text-primary'>Imran</span></p>
            </div>
            </>
        }
        
        </div>
        <div className='center-part bg-warning'>
            <div className='centert'>
            <h1>Learning Reatc with Imran</h1>
            </div>
            <div className='logo-left-bottom'>
            </div>
            <div className='logo-right-bottom'></div>
        </div>
        <div className='bottom-middle'>
        <div style = {{display : "flex"}}>
           <span style = {{fontWeight : "bolder"}}>Learning React Start Smart</span> 
              </div>
                <span>Find Dev logo stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.</span>
        </div>
        <div className='card-footer'>
            <div onClick={CommentToggle}><MapsUgcOutlinedIcon /></div>
            <div className ="heart-Counter"  onClick ={onClickEvent}><FavoriteBorderIcon style={onClickStyle}/><span>{hert}</span></div>
            <div><EmailOutlinedIcon color='success' /></div>
            <div><BookmarkBorderOutlinedIcon style={{color : isActive ? "blue" : "black"}} /></div>
            </div>
    </div>
    {
        commentToggle && <Comment val = {comment} setValue = {setComment}/>
    }

    </>
)
}
export default Card;