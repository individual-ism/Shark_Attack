import { Link } from 'react-router-dom'

export default function sharkAttack({sharkAttack}) {
    return (
        <div>
            <Link to={`/sharkattacks/${sharkAttack._id}`}>
                <h2>{sharkAttack.fields.location}</h2>
            </Link>
        </div>
    )
}