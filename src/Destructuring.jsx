function Destructuring({ name, email, role }) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>{email}</p>
            <span>{role}</span>
        </div>
    )
}

export default Destructuring