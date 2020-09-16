import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateProvider } from './StateProvider'
import { useHistory } from 'react-router-dom';
function Subtotal({ items }) {
    const [{ basket }, dispatch] = useStateProvider();
    const history = useHistory()

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal({basket.length} Items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This Order Contains a Gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={
                    basket?.reduce((total, eachDict) => {
                        return total + eachDict?.price
                    }, 0)
                }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button onClick={e => history.push('/payments')}>Proceed To Checkout</button>
        </div >
    )
}

export default Subtotal
