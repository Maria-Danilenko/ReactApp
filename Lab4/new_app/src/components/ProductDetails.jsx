import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import PriceSync from './PriceSync';

export default function ProductDetails(props) {
  const { id } = useParams();
  const product = props.products.find(p => p.id === parseInt(id));
  const [comment, setComment] = useState('');
  const priceInUAH = product.price;
  const priceInUSD = (product.price / 36.57).toFixed(2);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const consoleMsg = `User spent ${seconds} seconds on ${product.name} page`;
    return () => console.log(consoleMsg);
  }, [seconds]);

  const productDescriptions = {
    1: `This is a description of ${product.name}`,
    2: `This is a description of ${product.name}`,
    3: `This is a description of ${product.name}`,
    4: `This is a description of ${product.name}`,
    5: `This is a description of ${product.name}`,
    6: `This is a description of ${product.name}`,
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Відгук: ${comment}`);
    alert(`Ваш відгук: ${comment} додано успішно!`);
    setComment('');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div style={flexxx}>
      <Menu />
      <div style={wrapper}>
        <div key={product.id}>
          <h3>{product.name}</h3>
          <PriceSync priceInUAH={priceInUAH} priceInUSD={priceInUSD} />
          <p>{productDescriptions[product.id]}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="comment">Додати відгук:</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Додати</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const flexxx = {
  display: "flex",
}
const wrapper = {
  display: "flex",
  margin: "20px 50px",
  width: "100%",
}