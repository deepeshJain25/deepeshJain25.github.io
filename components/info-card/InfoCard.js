

import React from 'react'

const InfoCard = () => {
  return (
    <div className='info-card'>
        <div className='info-card__flex'>
            <div>
                <p className=''>Total Unit</p>
                <h3 className='num'>250</h3>
            </div>
            <div className='icon-box'>
                <img src="/images/city.png" className='img-fluid' alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default InfoCard