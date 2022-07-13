// useRef => Html element ka ref dene k liye km aatwaw
import './products.css';
const Product = ({ pizza }) => {
  return (
    <>
      <div className='container'>
        <div className='products shadow-lg'>
        <div className="pizzaName">
          <span className='text-success'> Pizza Name : <p className='text-primary'>{pizza.name}</p></span>
          <span className='text-success'> Pizza Price : <p className='text-primary'>{pizza.price}</p></span>
          <span className='text-success'> Pizza Size : <p className='text-primary'>{pizza.size}</p></span>
          <img style={{width : '329px', height : '250px'}} src={pizza.image} alt="Piza Image" />
        </div>
        </div>
      </div>
    </>
  );
};
export default Product;
