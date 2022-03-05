import React from 'react'
import './land.css'
import coverpic from '../../assets/landimage.jpeg'

function LandingPage() {
    return (

        
        <div className="landing" >
            <img src={coverpic} className='landingImage'  />
            <div className='coverdiv'  >     </div>
        <h1 className="land_title"> Rental Zone </h1>
        

        </div>
    )
}

export default LandingPage
