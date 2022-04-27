import React from 'react';
import Button from 'react-bootstrap/Button';
const CartPopup = ({cartData})=>{
    return(
        <div className='mini-cart text-start'>
            <div className='cardHead'>
              <p className='m-0 p-0 text-start'>MyCart({cartData.length} Item)</p>
            </div>
            <div className="cartbody">
               {cartData.map(({imageURL,name,id,price,quantity})=>
                <div className="each-cart" key={id}>
                <img src={imageURL} alt={name} />
                <div className="cart-details">
                  <p className='fw-bold'>{name}</p>
                  <div className='pricing-detail'>
                  <p><Button variant="danger rounded-circle carposneg">-</Button> 
                      <Button variant="btn btn-light">{quantity}</Button> 
                      <Button variant="danger carposneg rounded-circle">+</Button>
                  </p>
                  <p>Rs. {price * quantity}</p>
                  </div>
                </div>
            </div>)
               }
                <div className="cart-ad">
                  <p className='m-0'>
                    You won't find cheaper anywhere
                  </p>
                </div>
            </div>
            <div className="cart-footer">
              <p className='text-center'>Promo code can be applied on payment page</p>
              <div className='d-grid gap-2'>
                <Button variant="danger">Proceed to checkOut</Button>
              </div>
            </div>
         </div>
    )
}
export default CartPopup;