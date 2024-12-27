
import React from 'react'

const home = () => {
  return (
    <div className='text-xl font-medium'>Furniro
    <div>
      <h1>
        <ul className='flex justify-between items-center px-96'>
        <li><a href="#home">home</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#blog">blog</a></li>
        <li><a href="#shop">shop</a></li>
        </ul>
        <br/>
        <div>
            <h1 className='text-5xl font-semibold flex justify-center'>Shop</h1>
        </div>
        <div>
        <img src="front.png" alt="title" height="900" width="900"></img>
        </div>
        <div>
            <img src="sofa.png" alt="sofa"></img>
        </div>
        <div>
            <img src="bed.png" alt="bed"></img>
        </div>
        <div>
            <img src="back.png" alt="back"></img>
        </div>
        <div>
            <img src="product.png" alt="product"></img>
        </div>
        <div>
            <img src="image.png" alt="image"></img>
        </div>
        <button className='text-3xl'>Shop Now</button>
      </h1>
    </div>
    </div>
  )
}

export default home
