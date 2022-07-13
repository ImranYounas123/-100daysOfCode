// useRef => Html element ka ref dene k liye km aatwaw
import {Link} from 'react-router-dom'
import './Style.css'     
const Navigation = () => {
return(
    <>
       <div className='header'>
       <ul>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/Single'>Single Products</Link></li>
       <li><Link to='/products'>Products</Link></li>
        </ul>
       </div>
    </>
)
}
export default Navigation;