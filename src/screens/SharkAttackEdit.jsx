import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateSharkAttack, getSharkAttack } from '../services/sharkAttacks'

export default function SharkAttackEdit() {

    const locRef = useRef()
    const actRef = useRef()
    const nameRef = useRef()
    const ageRef = useRef()
    const sexRef = useRef()
    const yearRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()
    const countryRef = useRef()
    const areaRef = useRef()
    const typeRef = useRef()
    const speciesRef = useRef()
    const fatalRef = useRef()
    const injuryRef = useRef()
    const caseRef = useRef()
    const dataRef = useRef()
    const recRef = useRef()

    let { id } = useParams()
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let finalSharkAttack = {
            fields: {
                location: locRef.current.value,
                activity: actRef.current.value,
                name: nameRef.current.value,
                age: ageRef.current.value,
                sex: !sexRef.current.value ? "M" : sexRef.current.value,
                year: yearRef.current.value,
                date: dateRef.current.value,
                time: timeRef.current.value,
                country: countryRef.current.value,
                area: areaRef.current.value,
                type: typeRef.current.value,
                species: speciesRef.current.value,
                fatal_y_n: !fatalRef.current.value ? "Nq" : fatalRef.current.value,
                injury: injuryRef.current.value,
                case_number: caseRef.current.value
            },
            datasetid: dataRef.current.value,
            recordid: recRef.current.value
        }
        const response = await updateSharkAttack(id, finalSharkAttack)
        console.log(response)
        navigate(`/sharkattacks/${response._id}`, { replace: true })
    }

    // const [sharkAttack, setSharkAttack] = useState({
    //     fields: {
    //         activity: "",
    //         name: "",
    //         age: "",
    //         sex: "",
    //         year: "",
    //         date: "",
    //         time: "",
    //         country: "",
    //         area: "",
    //         type: "",
    //         species: "",
    //         fatal_y_n: "N",
    //         injury: "",
    //         case_number: "",
    //     },
    //     datasetid: "",
    //     recordid: ""
    // })

    // let { id } = useParams()
    // let navigate = useNavigate()

    // useEffect(() => {
    //     fetchSharkAttack()
    // }, [])

    // async function fetchSharkAttack() {
    //     const sharkAttackRecord = await getSharkAttack(id)
    //     setSharkAttack(sharkAttackRecord)
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await updateSharkAttack(id, sharkAttack)
    //     navigate(`/sharkattacks/${id}`, { replace: true })
    // }

    // const handleChange = (e) => {
    //     const { value, name } = e.target

    //     setSharkAttack((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    {/*return (
        <div>
            <h1>Edit Record</h1>
            <form className="edit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="activity" value={sharkAttack.fields.activity} onChange={handleChange} name="activity" />
                <input type="text" placeholder="name" value={sharkAttack.fields.name} onChange={handleChange} name="name" />
                <input type="text" placeholder="age" value={sharkAttack.fields.age} onChange={handleChange} name="age" />
                <input type="text" placeholder="sex" value={sharkAttack.fields.sex} onChange={handleChange} name="sex" />
                <input type="text" placeholder="year" value={sharkAttack.fields.year} onChange={handleChange} name="year" />
                <input type="text" placeholder="date" value={sharkAttack.fields.date} onChange={handleChange} name="date" />
                <input type="text" placeholder="time" value={sharkAttack.fields.time} onChange={handleChange} name="time" />
                <input type="text" placeholder="country" value={sharkAttack.fields.country} onChange={handleChange} name="country" />
                <input type="text" placeholder="area" value={sharkAttack.fields.area} onChange={handleChange} name="area" />
                <input type="text" placeholder="type" value={sharkAttack.fields.type} onChange={handleChange} name="type" />
                <input type="text" placeholder="species" value={sharkAttack.fields.species} onChange={handleChange} name="species" />
                <input type="text" placeholder="fatal_y_n" value={sharkAttack.fields.fatal_y_n} onChange={handleChange} name="fatal_y_n" />
                <input type="text" placeholder="injury" value={sharkAttack.fields.injury} onChange={handleChange} name="injury" />
                <input type="text" placeholder="case_number" value={sharkAttack.fields.case_number} onChange={handleChange} name="case_number" />
                <input type="text" placeholder="datasetid" value={sharkAttack.datasetid} onChange={handleChange} name="datasetid" />
                <input type="text" placeholder="recordid" value={sharkAttack.recordid} onChange={handleChange} name="recordid" />
                <button type="submit">Update Record</button>
            </form>
        </div>
    )*/}

    return (
        <div>
            <h1>Update Shark Attack Record</h1>
            <form className="edit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="location" name="location" ref={locRef}/>
                <input type="text" placeholder="activity" name="activity" ref={actRef}/>
                <input type="text" placeholder="name" ref={nameRef} name="name" />
                <input type="text" placeholder="age" name="age" ref={ageRef}/>
                <input type="text" placeholder="sex" name="sex" ref={sexRef}/>
                <input type="text" placeholder="year" name="year" ref={yearRef}/>
                <input type="text" placeholder="date" name="date" ref={dateRef}/>
                <input type="text" placeholder="time" name="time" ref={timeRef}/>
                <input type="text" placeholder="country" name="country" ref={countryRef}/>
                <input type="text" placeholder="area" name="area" ref={areaRef}/>
                <input type="text" placeholder="type" name="type" ref={typeRef}/>
                <input type="text" placeholder="species" name="species" ref={speciesRef}/>
                <input type="text" placeholder="fatal_y_n" name="fatal_y_n" ref={fatalRef}/>
                <input type="text" placeholder="injury" name="injury" ref={injuryRef}/>
                <input type="text" placeholder="case_number" name="case_number" ref={caseRef}/>
                <input type="text" placeholder="datasetid" name="datasetid" ref={dataRef}/>
                <input type="text" placeholder="recordid" name="recordid" ref={recRef}/>
                <button type="submit">Update Record</button>
            </form>
        </div>
    )

}