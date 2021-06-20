const Tweet = (props) => {
    return (
        <div>
            <span><b>{props.username}</b> <i>({props.name})</i> on {props.postedAt}:</span>
            <p>{props.text}</p>
        </div>
    )
}