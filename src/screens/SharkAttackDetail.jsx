import { useState, useEffect } from 'react'
import { getSharkAttack, deleteSharkAttack } from '../services/sharkAttacks.js'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function SharkAttackDetail() {
    
    const [sharkAttack, setSharkAttack] = useState({})

    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetchSharkAttack()
    }, [!sharkAttack])

    async function fetchSharkAttack() {
        const sharkAttackRecord = await getSharkAttack(id)
        setSharkAttack(sharkAttackRecord)
    }

    async function handleDelete() {
        await deleteSharkAttack(id)
        navigate("/sharkattacks")
    }

    if (!sharkAttack.fields) return <h1>Loading...</h1>

    return (
        <div>
            <h2>{sharkAttack._id}</h2>
            <table className='sharkBody'>
                <tbody>
                <tr>
                    <th className='keys'>ID</th>
                    <td className='values'>{sharkAttack._id}</td>
                </tr>
                <tr>
                    <th className='keys'>Activity</th>
                    <td className='values'>{sharkAttack.fields.activity}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Name</th>
                    <td className='values'>{sharkAttack.fields.name}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Age</th>
                    <td className='values'>{sharkAttack.fields.age}</td>
                </tr>
                <tr>
                    <th className='keys'>Victim Sex</th>
                    <td className='values'>{sharkAttack.fields.sex}</td>
                </tr>
                <tr>
                    <th className='keys'>Year</th>
                    <td className='values'>{sharkAttack.fields.year}</td>
                </tr>
                <tr>
                    <th className='keys'>Date</th>
                    <td className='values'>{sharkAttack.fields.date}</td>
                </tr>
                <tr>
                    <th className='keys'>Time</th>
                    <td className='values'>{sharkAttack.fields.time}</td>
                </tr>
                <tr>
                    <th className='keys'>Country</th>
                    <td className='values'>{sharkAttack.fields.country}</td>
                </tr>
                <tr>
                    <th className='keys'>Area</th>
                    <td className='values'>{sharkAttack.fields.area}</td>
                </tr>
                <tr>
                    <th className='keys'>Type</th>
                    <td className='values'>{sharkAttack.fields.type}</td>
                </tr> 
                <tr>
                    <th className='keys'>Species</th>
                    <td className='values'>{sharkAttack.fields.species}</td>
                </tr>
                <tr>
                    <th className='keys'>Fatal</th>
                    <td className='values'>{sharkAttack.fields.fatal_y_n}</td>
                </tr>
                <tr>
                    <th className='keys'>Injury</th>
                    <td className='values'>{sharkAttack.fields.injury}</td>
                </tr> 
                <tr>
                    <th className='keys'>Case Number</th>
                    <td className='values'>{sharkAttack.fields.case_number}</td>
                </tr>
                <tr>
                    <th className='keys'>Database ID</th>
                    <td className='values'>{sharkAttack.datasetid}</td>
                </tr>
                <tr>
                    <th className='keys'>Record ID</th>
                    <td className='values'>{sharkAttack.recordid}</td>
                </tr> 
                </tbody>
            </table>
            <div>
            <Link to={`/sharkattacks/${id}/edit`}>
                <button>Edit Record</button>
            </Link>
            <button onClick={handleDelete}>Remove Record</button>
            </div>
        </div>
    )
}