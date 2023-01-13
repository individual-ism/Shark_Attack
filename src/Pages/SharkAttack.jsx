import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/SharkAttack.css'

function SharkAttack({sharkAttacks}) {

    const [index, setIndex] = useState(0)

    if (!sharkAttacks.length) return <h1 className="loading">Loading...</h1>

    function showSharkAttack(index) {
        setIndex(index)
    }

    let shark = sharkAttacks[index]

    return (
        <div className='sharkAttacksPage'>
            <div className="clickHere">
                {sharkAttacks.map((sharkattack, index) => {
                    return (
                        <button onClick={() => showSharkAttack(index)} className="sharking">{sharkAttacks[index].fields.location}</button>
                    )
                })}
            </div>

            <table className='sharkBody'>
                <tbody>
                <tr>
                    <th className='keys'>ID</th>
                    <td className='values'>{shark._id}</td>
                </tr>
                <tr>
                    <th className='keys'>Activity</th>
                    <td className='values'>{shark.fields.activity}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Name</th>
                    <td className='values'>{shark.fields.name}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Age</th>
                    <td className='values'>{shark.fields.age}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Sex</th>
                    <td className='values'>{shark.fields.sex}</td>
                </tr>
                <tr>
                    <th className='keys'>Year</th>
                    <td className='values'>{shark.fields.year}</td>
                </tr>
                <tr>
                    <th className='keys'>Date</th>
                    <td className='values'>{shark.fields.date}</td>
                </tr>
                <tr>
                    <th className='keys'>Time</th>
                    <td className='values'>{shark.fields.time}</td>
                </tr>
                <tr>
                    <th className='keys'>Country</th>
                    <td className='values'>{shark.fields.country}</td>
                </tr>
                <tr>
                    <th className='keys'>Area</th>
                    <td className='values'>{shark.fields.area}</td>
                </tr>
                <tr>
                    <th className='keys'>Type</th>
                    <td className='values'>{shark.fields.type}</td>
                </tr>
                <tr>
                    <th className='keys'>Species</th>
                    <td className='values'>{shark.fields.species}</td>
                </tr>
                <tr>
                    <th className='keys'>Fatal</th>
                    <td className='values'>{shark.fields.fatal_y_n}</td>
                </tr>
                <tr>
                    <th className='keys'>Injury</th>
                    <td className='values'>{shark.fields.injury}</td>
                </tr>
                <tr>
                    <th className='keys'>Case Number</th>
                    <td className='values'>{shark.fields.case_number}</td>
                </tr>
                <tr>
                    <th className='keys'>Database ID</th>
                    <td className='values'>{shark.datasetid}</td>
                </tr>
                <tr>
                    <th className='keys'>Record ID</th>
                    <td className='values'>{shark.recordid}</td>
                </tr>
                </tbody>
            </table>

            <Link to='/' className='goHome'>Home</Link>
        </div>
    )
}

export default SharkAttack