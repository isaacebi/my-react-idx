function UserCardv1({ 
    name = "Anonymous", 
    age = 0, 
    isActive = false 
}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    )
}

export default UserCardv1;