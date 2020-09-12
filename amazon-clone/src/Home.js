import React from 'react'
import './home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* Banner */}
                <div className="home__banner">
                    <img className="home__image" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MirzapurStreamersS1WatchAgain/9c7bc144-f7b6-48e6-8c22-445a22eeec3b._UR3000,600_SX1500_FMwebp_.jpg" alt="" />
                </div>

                <div className="home__row">
                    <Product title="OnePlus Bullets Wireless Z" rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5yTrhm_6eVg8nO6n80oEBOUx29Up68VQ6dg&usqp=CAU" price={1999} />
                    <Product />
                    <Product />

                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product />
                    <Product />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product />
                </div>
            </div>


        </div>
    )
}

export default Home
