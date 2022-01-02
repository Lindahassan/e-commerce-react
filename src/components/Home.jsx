import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
           <div className="card bg-dark text-white border-0">
  <img src="./clothing.jpg" className="card-img" alt="Background" height="450px" />
  <div className="card-img-overlay d-flex flex-column ">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2 my-3">This is awider Shopping WebSite</p>
   
  </div>
</div>
<Products/>
</div>
            
        
    );
}
