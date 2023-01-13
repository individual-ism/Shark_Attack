import { useState } from 'react'
import { Link } from 'react-router-dom'

function SharkAttack({sharkAttacks}) {

    const [index, setIndex] = useState(0)

    function showSharkAttack(index) {
        setIndex(index)
    }

    let shark = sharkAttacks[index]

    return (
        <div className='sharkAttacksPage'>
            <div className="clickHere">
                <button onClick={() => showSharkAttack(0)} className="sharking">{sharkAttacks[0].fields.location}</button>
                <button onClick={() => showSharkAttack(1)} className="sharking">{sharkAttacks[1].fields.location}</button>
                <button onClick={() => showSharkAttack(2)} className="sharking">{sharkAttacks[2].fields.location}</button>
                <button onClick={() => showSharkAttack(3)} className="sharking">{sharkAttacks[3].fields.location}</button>
                <button onClick={() => showSharkAttack(4)} className="sharking">{sharkAttacks[4].fields.location}</button>
                <button onClick={() => showSharkAttack(5)} className="sharking">{sharkAttacks[5].fields.location}</button>
                <button onClick={() => showSharkAttack(6)} className="sharking">{sharkAttacks[6].fields.location}</button>
                <button onClick={() => showSharkAttack(7)} className="sharking">{sharkAttacks[7].fields.location}</button>
                <button onClick={() => showSharkAttack(8)} className="sharking">{sharkAttacks[8].fields.location}</button>
                <button onClick={() => showSharkAttack(9)} className="sharking">{sharkAttacks[9].fields.location}</button>
            </div>
            <div className='sharkBody'>
                <h2>Location: {shark.fields.location}</h2>
                <p>ID: {shark._id}</p>
                <p>Activity: {shark.fields.activity}</p>
                <p>Victim Name: {shark.fields.name}</p>
                <p>Victim Age: {shark.fields.age}</p>
                <p>Victim Sex: {shark.fields.sex}</p>
                <p>Year: {shark.fields.year}</p>
                <p>Date: {shark.fields.date}</p>
                <p>Time: {shark.fields.time}</p>
                <p>Country: {shark.fields.country}</p>
                <p>Area: {shark.fields.area}</p>
                <p>Type: {shark.fields.type}</p>
                <p>Species: {shark.fields.species}</p>
                <p>Fatal: {shark.fields.fatal_y_n}</p>
                <p>Injury: {shark.fields.injury}</p>
                <p>Case Number: {shark.fields.case_number}</p>
                <p>Dataset ID: {shark.datasetid}</p>
                <p>Record ID: {shark.recordid}</p>
            </div>
            <Link to='/' className='goHome'>Home</Link>
        </div>
    )
}

export default SharkAttack