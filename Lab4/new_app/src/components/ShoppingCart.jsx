import React from 'react'

export default function ShoppingCart(props) {
  return (
    <div style={wrapper}>
      <div>
        <div className='menuLine'>Кошик</div>       
        <div>
        {
          props.products&&props.products.map(           
            (element, index) => {             
                return <div key={index}>Назва: {element.name} 
                <br/>
                Кількість: {element.quantity}
                <br/>
                <button type='button' className='btn btn-danger mb-3' onClick={()=>props.deleteProduct(element.id)}>Видалити</button>   
                </div>
            }              
          )
        }
        </div>
      </div>              
    </div>
  )
}
const wrapper = {  
  height: '350px',
  width: '200px',
  overflowY: 'scroll'
}