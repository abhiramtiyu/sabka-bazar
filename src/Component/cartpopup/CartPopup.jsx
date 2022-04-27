import React from 'react';
import Button from 'react-bootstrap/Button';
import './cartpopup.scss'

const CartPopup = ({cartData,cartClose})=>{
    return(
        <div className='mini-cart text-start'>
            <div className='cardHead d-flex justify-content-between'>
                <div><p className='m-0 p-0 text-start font-bold'>MyCart { (cartData.length > 0) && `(${cartData.length} Item)`} </p></div>
                <Button onClick={cartClose} variant="outline-light" className='p-1 border-0'><i className="fa fa-times" aria-hidden="true"></i></Button>
            </div>
            <div className={ cartData.length > 0 ?  "cartbody" : "nocart d-flex align-items-center justify-content-center"}>  
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

                {cartData.length > 0 ? (<div className="cart-ad">
                  <p className='m-0'>
                    You won't find cheaper anywhere
                  </p>
                </div>)
                  :
                (<div className="nocartdiv">
                  <p class="h5 text-center"><strong>No items in your cart</strong></p>
                  <p>Your favourite items are just a click away</p>
                </div>)
}
            </div>
            <div className="cart-footer">
              <p className='text-center'>Promo code can be applied on payment page</p>
              <div className='d-grid gap-2'>
              {cartData.length > 0 ?
                <Button variant="danger">
                  <span>Proceed to checkOut</span>
                </Button> 
                :
                <Button variant="danger">
                <span>Start Shopping</span>
              </Button> 
              } 
              </div>
            </div>
         </div>
    )
}
export default CartPopup;