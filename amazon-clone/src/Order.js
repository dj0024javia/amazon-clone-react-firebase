import React from 'react'
import BasketItem from './BasketItem'
import './Order.css'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
function Order({ order }) {
    console.log(order)
    return (
        <div className="order">
            <h2>Order</h2>

            <p >
                {moment.unix(order.data.created).format("DD MM YYYY hh:mm:ss")}
            </p>

            <p className="order__id">
                <small>Order Id:{order.id}</small>
            </p>
            {order.data.basketItems?.map(item =>
                <BasketItem id={item.id}
                    title={item.title}
                    rating={item.rating}
                    image={item.image}
                    price={item.price}
                    hideButton={true} />
            )}

            <CurrencyFormat renderText={(value) => (
                <>
                    <p className="order__total">Order Total: ({order.data.basketItems.length} Items): <strong>{value}</strong></p>
                </>
            )}
                decimalScale={2}
                value={
                    order.data.amount
                }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

        </div >
    )
}

export default Order
