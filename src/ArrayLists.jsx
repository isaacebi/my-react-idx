function ArrayLists() {
    const fruits = ["Apple", "Banana", "Orange"];
    const users = [
        { id: 1, name: "John", email: "john@email.com" },
        { id: 2, name: "Jacky", email: "jacky@email.com" },
        { id: 3, name: "Jabba", email: "jabba@email.com" },
    ];

    return (
        <div>
            <h3>Fruits Lists</h3>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <div>
                {users.map((user, index) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArrayLists