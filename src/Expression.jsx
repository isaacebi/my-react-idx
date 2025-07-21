function Expression() {
    // Basic Expression
    const name = "John Doe";
    const age = 25;

    const userInfo = (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>You are {age} years old</p>
            <p>Next year you'll be {age + 1}</p>
        </div>
    );

    // Advanced Expression
    const isLoggedIn = true;
    const user = { name: "Bravo", role: "admin" };

    return (
        <div>
            {isLoggedIn ? (
                // <h1>Welcome back, {user.name}!</h1>
                <div>{userInfo}</div>
            ) : (
                <h1>Please log in</h1>
            )}

            {user.role === 'admin' && (
                <button>Admin Panel</button>
            )}
        </div>
    )
}

export default Expression;