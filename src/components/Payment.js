import React from 'react'

const Payment = () => {
  return (
    <div className='payment-container'>
        <input type='number' placeholder='Card Number'></input>
        <input type='text' placeholder='Name on Card'></input>
        <input type='password' placeholder='CVV'></input>
        <input type='password' placeholder='OTP'></input>
    </div>
  )
}

export default Payment