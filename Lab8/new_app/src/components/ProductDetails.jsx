import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PriceSync from './PriceSync';
import { ProductContext } from './ProductContext';
import styles from './styles/productDetails.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  comment: Yup.string().min(3, "Мінімальна довжина відгуку: 3 символи"),
  rating: Yup.number().min(1, "Мінімальне значення - 1")
    .max(10, "Максимальне значення - 10")
    .typeError('Оцінка має бути цифрою від 1 до 10'),
});

export default function ProductDetails() {
  const propsProducts = useContext(ProductContext);
  const { id } = useParams();
  const product = propsProducts.find(p => p.id === parseInt(id));
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
  }, [seconds, product.name]);

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

  return (
    <div className={styles.flex}>
      <div className={styles.wrapper}>
        <div key={product.id}>
          <h3>{product.name}</h3>
          <PriceSync priceInUAH={product.price} priceInUSD={(product.price / 36.57).toFixed(2)} />
          <p>{productDescriptions[product.id]}</p>
          <Formik
            initialValues={{ comment: '', rating: 10 }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(`Відгук: ${values.comment}, Оцінка: ${values.rating}`);
              alert(`Ваш відгук: ${values.comment} додано успішно! \nОцінка: ${values.rating}`);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">Додати відгук:</label>
                  <Field
                    className={`form-control ${touched.comment && errors.comment ? 'is-invalid' : ''}`}
                    id="comment"
                    name="comment"
                    as="textarea"
                    rows="3"
                  />
                  <ErrorMessage name="comment" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">Оцінка:</label>
                  <Field
                    className={`form-control ${touched.rating && errors.rating ? 'is-invalid' : ''}`}
                    id="rating"
                    name="rating"
                    type="number"
                    min="1"
                    max="10"/>
                  <ErrorMessage name="rating" component="div" className="invalid-feedback" />
                </div>
                <button type="submit" className="btn btn-primary">Додати</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}