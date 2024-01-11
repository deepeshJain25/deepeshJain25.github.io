

import React from 'react'

const Stats = () => {
    return (
        <div className='stats'>
            <h2>STATS</h2>
            <p>Income and Expenses</p>
            <div className='stats-wrapper mb-5'>
                <div className='stats-num'>
                    <div>
                        <img src="/images/stats.png" className='img-fluid' alt="" />
                    </div>
                    <div>
                        <p className='txt'>Total Revenue</p>
                        <h4 className='num'>193,934</h4>
                    </div>
                </div>
                <div className='stats-num'>
                    <div>
                        <img src="/images/stats.png" className='img-fluid' alt="" />
                    </div>
                    <div>
                        <p className='txt'>Total Revenue</p>
                        <h4 className='num'>193,934</h4>
                    </div>
                </div>
                <div className='stats-num'>
                    <div>
                        <img src="/images/stats.png" className='img-fluid' alt="" />
                    </div>
                    <div>
                        <p className='txt'>Total Revenue</p>
                        <h4 className='num'>193,934</h4>
                    </div>
                </div>
            </div>
            <div className='graph'>
                <h1>graph here</h1>
            </div>
        </div>
    )
}

export default Stats