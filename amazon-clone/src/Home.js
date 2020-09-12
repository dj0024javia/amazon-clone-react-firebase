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
                    <Product title="OnePlus Bullets Wireless Z(Blue)" rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41ZyVq9XciL._AC_SY200_.jpg" price={1999} />
                    <Product title="Apple IPhone 11" rating={5}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJgmvWi0Xab60QEMH_naBnP9esWuosBCBX7hagZgMVKwBJ_C84mT3kWdK-Lf5cvxdjLsgiHbz9piE&usqp=CAc" price={70000} />
                    <Product title="Apple Airpods 2" rating={4}
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZ40ySbWRPctWmPt-RTi72yoyumFyJ5RFD8rn3SbE5S8vyjF1gRspMlZOBZi5PqnVhqkZybr6ynrw&usqp=CAc" price={23000} />

                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product title="OnePlus Buds" rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61-COaSmn3L._SL1500_.jpg" price={1999} />
                    <Product title="OnePlus Nord" rating={4}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpSF9s1M84MZ63-x3U64VU1alEQFljTZPtH468x6DilU9xyKRcBT7yjc5OUMV7NLw5kPTE5CDTwg&usqp=CAc" price={1999} />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product title="OnePlus Bullets Wireless Z" rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5yTrhm_6eVg8nO6n80oEBOUx29Up68VQ6dg&usqp=CAU" price={1999} />
                </div>
            </div>


        </div>
    )
}

export default Home
