function PersonalInfo() {
    const name = "Johnny Bravo"
    const proLanguage = "Assembly"
    const hobbies = [
        "Eat",
        "Sleep",
        "Repeat"
    ]
    const date = new Date()
    const urlImg = "https://media.tenor.com/EaCwb2LxHd4AAAAM/mhm.gif"

    return (
        <div>
            {/* Your JSX here */}
            <p>My name is {name}</p>
            <p>I hate to code in {proLanguage}</p>

            <div>
                <p>My hobbies are:</p>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>

            <img src={urlImg} alt="My Image" />
        </div>
    )
}

export default PersonalInfo