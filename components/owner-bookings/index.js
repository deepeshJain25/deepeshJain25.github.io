

import React from 'react'
import UnitCard from './UnitCard'

const OwnerBookings = () => {
  return (
    <section className='owner-bookings'>
        <h2 className='title'>owner bookings</h2>
        <p className='desc'>Bookings pending for review and confirmation</p>
        <UnitCard />
        <UnitCard />
        <UnitCard />
    </section>
  )
}

export default OwnerBookings