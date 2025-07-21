function ReceivingProps(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <span>{props.role}</span>
        </div>
    )
}

export default ReceivingProps