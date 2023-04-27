import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/ProductsWrap.css';

function convertToUSD(priceInUAH) {
  const exchangeRate = 36.57;
  return (priceInUAH / exchangeRate).toFixed(2);
}

export default function Products(props) {
  
  return (
    <div className='main'>
      <div style={sdFoodScreenMain}>              
        {
          props.products.map(
            (element) => (
              <div style={sdFoodBoxes} key={element.id}>
                <Link to={`/products/${element.id}`}>{element.name}</Link>
                <br/>
                <p>{`${element.price}₴`}</p>
                <p>{`${convertToUSD(element.price)}$`}</p>              
                <button type='button' className='btn btn-primary mt-2' onClick={() => props.addProduct(element.id)}>До кошика</button>
              </div>
            )
          )        
        }            
      </div>
    </div>
  )
}

const sdFoodBoxes = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '30%',
  margin: '15px 30px',
  maxWidth: '125px',
  textAlign: 'center',
}

const sdFoodScreenMain = {
  float: 'left',
  maxWidth: '100%',
  display: 'flex',
  flexWrap:  'wrap',
}