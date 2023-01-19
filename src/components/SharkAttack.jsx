import { Link } from 'react-router-dom'

export default function sharkAttack({sharkAttack}) {
    return (
        <div>
            <Link to={`/sharkattacks/${sharkAttack._id}`}>
                <h2>{sharkAttack._id}</h2>
            </Link>
        </div>
    )
}