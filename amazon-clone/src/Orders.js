import React, { useEffect, useState } from 'react'
import BasketItem from './BasketItem'
import { db } from './firebase'
import Order from './Order'
import './Orders.css'
import { useStateProvider } from './StateProvider'
function Orders() {
    const [{ user }] = useStateProvider()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user) {
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })
                ))
            })
        }
        else {
            setOrders([])
        }

        console.log(orders)
    }, [user])

    return (
        <div className='orders'>
            <h1>Orders Page</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders