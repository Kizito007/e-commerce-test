import React, { useState, useEffect } from 'react'
import PlaceholderJ from "./assets/PlaceholderJ.svg"
import search from "./assets/search.svg"
import PlaceholderP from "./assets/PlaceholderP.png"
import MySideNav from './MySideNav'
import { products } from './products'

const HomeScreen = () => {

  // cart state
  const [cart, setCart] = useState([])
  // items to be pushed to cart
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(products)
  }, [products])
  
  const handleClick = (e) => {
    console.log(e)
    console.log("ki")
  }

  return (
    <div>
      <nav>
      <MySideNav />
      </nav>
      <div>
        <img style={{ position: "absolute", top: "0", width: "100%", zIndex: "-1" }} src={PlaceholderJ} />
      </div>
      <div style={{textAlign: "center"}}>
        <h1 style={{margin: "172px 0"}}>Jurassic Store</h1>
        <div>
          <h3 style={{marginTop: "220px"}}>Browse the Catalogue</h3><br/><br/>
          <input 
            style={{width: "60%", height: "33px", borderRadius: "4px"}} 
            type="search" 
            placeholder='Search for products..'
          />
          <button className='search-btn' type="submit"><img src={search} /></button>
        </div>
      </div>
      <div className='cards'>
        {
          items ?
          items.map((item) => (
            <div key={item.id} className='card' style={{textAlign: "center"}}>
              <img src={PlaceholderP} style={{ width: "135px", height: "121px" }} />
              <h3> {item.product_name} </h3>
              <span style={{marginRight: "10px"}}>${item.price} </span>
              <button onClick={handleClick(item)}>Add to Cart</button>
            </div>
          ))
          : null
        }
      </div>
    </div>
  )
}

export default HomeScreen