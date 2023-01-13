import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import SharkAttack from './Pages/SharkAttack.jsx'
import Home from './Pages/Home.jsx'

function App() {

    const [sharkAttacks, setsharkAttacks] = useState([])


    useEffect(() => {
        const getAttacked = async () => {
            const response = await axios.get('https://manse99sharkattack-production.up.railway.app/api/sharkattack')
            setsharkAttacks(response.data)
            
        }
        getAttacked()
    }, [])

    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel:wght@600;700&family=Nosifer&family=UnifrakturCook&family=UnifrakturMaguntia&display=swap" rel="stylesheet"></link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shark' element={<SharkAttack sharkAttacks={sharkAttacks} />} />
            </Routes>
        </div>
    )
}

export default App