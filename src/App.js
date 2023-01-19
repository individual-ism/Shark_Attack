import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home.jsx'
import SharkAttacks from './screens/SharkAttacks.jsx'
import SharkAttackDetail from './screens/SharkAttackDetail.jsx'
import SharkAttackCreate from './screens/SharkAttackCreate.jsx'
import SharkAttackEdit from './screens/SharkAttackEdit.jsx'
import Nav from './components/Nav.jsx'

function App() {


    return (
        
        <div className="App">
            <style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel:wght@600;700&family=Nosifer&family=UnifrakturCook&family=UnifrakturMaguntia&display=swap');
</style>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sharkattacks' element={<SharkAttacks />} />
                <Route path='/sharkattacks/:id' element={<SharkAttackDetail />} />
                <Route path='/newsharkattack' element={<SharkAttackCreate />} />
                <Route path='/sharkattacks/:id/edit' element={<SharkAttackEdit />} />
            </Routes>
        </div>
    )
}

export default App