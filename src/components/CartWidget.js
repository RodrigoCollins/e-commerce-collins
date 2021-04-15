import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
    )
}

export default CartWidget
