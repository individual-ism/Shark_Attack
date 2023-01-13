import { Link } from 'react-router-dom'
import React from 'react'
import '../Style/Home.css'

function Home() {
    return (
        <div className='homepage'>
            <h1 className='homePageTitle'>Shark Attacks</h1>
            <Link to='/shark' className='saButton'>Prepare for the Horrors</Link>
        </div>
    )
}

export default Home