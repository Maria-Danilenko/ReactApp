import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './styles/shoppingCart.module.css'
import './styles/cartAnimation.css'
import styled from 'styled-components';

const CartTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const CartItemTitle = styled(CartTitle)`
  font-size: 16px;
`;

export default function ShoppingCart(props) {
  return (
    <div className={styles.wrapper}>
      <div className='border border-1 rounded p-2'>
        <CartTitle className='border-bottom border-2'>Кошик</CartTitle>
        <div className='pt-2'>
          <TransitionGroup>
            {props.products && props.products.map(
              (element) => (
                <CSSTransition key={element.id} classNames="product" timeout={500}>
                  <div>
                    <CartItemTitle>Назва:</CartItemTitle> {element.name}
                    <br />
                    <CartItemTitle>Кількість:</CartItemTitle> {element.quantity}
                    <br />
                    <button type='button' className='btn btn-danger mb-3'
                      onClick={() => props.deleteProduct(element.id)}>Видалити</button>
                  </div>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </div>
      </div>
    </div>
  )
}