import React from 'react'

import preloader from '../../Images/SWPreloader.svg'

import './style.css'

function Preloader() {
    return (
        <div className='preloader-block'>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader