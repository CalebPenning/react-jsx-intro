const Person = (props) => {
    const { name, age, hobbies } = props

    let ageInfo
    let newName 

    if (name.length > 8) {
        let nameArr = name.split("")
        for (let i = 0; i < nameArr.length; i++) {
            if (i > 5) {
                nameArr[i] = '*'
            }
        }
        newName = nameArr.join("")
    }

    let ageCheck = age >= 18
    if (ageCheck) {
        ageInfo = <h3>Please go vote!</h3>
    } else {
        ageInfo = <h3>You must be 18.</h3>
    }
    const moreInfo = <p>Learn some more information about this person: 
        <ul>
            <li>Name: {newName === undefined ? name : newName}</li>
            <li>Age: {age}</li>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
        {ageInfo}
    </p>

    return (
        <div>
            { moreInfo }
        </div>
    )
}