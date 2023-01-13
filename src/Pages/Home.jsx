import { Link } from 'react-router-dom'
import React from 'react'

function Home() {
    return (
        <div>
            <h1 className='homePageTitle'>Shark Attacks</h1>
            <Link to='/shark' className='saButton'>Prepare for the Horrors</Link>
        </div>
    )
}

export default Home