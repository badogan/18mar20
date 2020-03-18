import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
    
    const {up,down,counter} = useCounter()

    return (    
        <div>
            <h3>Current counter is {counter} </h3>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
        </div>
    )
}

export default Counter