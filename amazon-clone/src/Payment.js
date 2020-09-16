import { setRef } from '@material-ui/core'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import BasketItem from './BasketItem'
import './payment.css'
import { getBasketTotal } from './reducer'
import { useStateProvider } from './StateProvider'
import axios from './axios'
import { db } from './firebase'

function Payment() {
    const [{ basket, user }, dispatch] = useStateProvider()

    const stripe = useStripe()
    const elements = useElements()

    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null)

    const [processing, setProcessing] = useState("")
    const [succeeded, setsucceeded] = useState(false)
    const [ClientSecret, setClientSecret] = useState(true)
    const history = useHistory()

    useEffect(() => {
        const getClientSecret = async () => {

            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            // console.log(response.data.ClientSecret)
            setClientSecret(response.data.clientSecret)

        }

        getClientSecret()

    }, [basket])

    console.log("client Secret:", ClientSecret)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(ClientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setsucceeded(true)
            setError(false)
            setProcessing(false)

            console.log(paymentIntent)

            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set(
                {
                    amount: paymentIntent.amount / 100,
                    canceled_at: paymentIntent.canceled_at,
                    cancellation_reason: paymentIntent.cancellation_reason,
                    created: paymentIntent.created,
                    currency: paymentIntent.currency,
                    status: paymentIntent.status,
                    basketItems: basket
                }
            )

            history.replace('/orders')
        }).catch((error) => console.log(error))

    }

    const onCardElementChange = (event) => {
        // Listens for changes on card details and prompts error if any realtime.
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }
    return (
        <div className="payment">

            <div className="payment_container">
                {/*Payment Section - Delivery Address */}

                <h1>Checkout (
                    <Link to="/checkout">{basket?.length} Items
                    </Link>)
                    </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                        <p>Address Line 3</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery Details</h3>
                    </div>

                    {/* Cart items goes here */}
                    <div className="payment__basketItems">
                        {basket?.map(eachBasketItem => (
                            <BasketItem
                                id={eachBasketItem.id}
                                title={eachBasketItem.title} rating={eachBasketItem.rating}
                                image={eachBasketItem.image} price={eachBasketItem.price} />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__carddetails">
                        <form onSubmit={handleFormSubmit}>
                            <CardElement onChange={onCardElementChange} />


                            <div className="payment__cartPrice">
                                <CurrencyFormat renderText={(value) => (
                                    <>
                                        <p>Total ({basket.length} Items): <strong>{value}</strong></p>
                                    </>
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                        </form>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
