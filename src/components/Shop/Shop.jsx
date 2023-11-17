import React from 'react'
import ShopCart from './ShopCart'
import Catg from './Catg'

const Shop = ({shopItems , addToCart}) => {
  return (
    <>
      <section className='shop background'>
         <div className="container d_flex">
            <Catg/>
      <div className="contentWidth">
        <div className="heading d_flex">
          <div className='heading-left row f_flex'>   
            <h2>Mobile Phones</h2>
          </div>
          <div className='heading-right row'> 
            <span>View All</span>
            <i className='fa fa-caret-right'></i>
          </div>
      </div>
      <div className='product-content grid1'>
         <ShopCart addToCart ={addToCart} shopItems={shopItems}/>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default Shop
