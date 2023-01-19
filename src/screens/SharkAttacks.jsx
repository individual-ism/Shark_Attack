import { getSharkAttacks } from '../services/sharkAttacks.js'
import { useState, useEffect } from 'react'
import SharkAttack from '../components/SharkAttack.jsx'
import '../App.css'

export default function SharkAttacks() {
    const [sharkAttacks, setSharkAttacks] = useState([])
    
    useEffect(() => {
        fetchSharkAttacks()
    }, [])
    
    async function fetchSharkAttacks() {
        const allSharkAttacks = await getSharkAttacks()
        setSharkAttacks(allSharkAttacks)
    }
    
    if (!sharkAttacks.length) return <h1 className="loading">Loading...</h1>

    return (
        <div>
            <h1 className='sharkAttacksHeading'>All Shark Attacks</h1>
            <div className='sharkAttacksListed'>
                {sharkAttacks.map((sharkAttack) => (<SharkAttack sharkAttack={sharkAttack} key={sharkAttack._id} />))}
            </div>
        </div>
    )
}