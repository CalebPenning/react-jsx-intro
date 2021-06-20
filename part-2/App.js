const App = () => {
    return (
        <div>
            <Tweet username="CarlosC" name="CC" postedAt={new Date().toDateString()} text="Eating falafel" />
            <Tweet username="RyanF" name="RF" postedAt={new Date().toDateString()} text="Drinking big house beans" />
            <Tweet username="CalebP" name="CP" postedAt={new Date().toDateString()} text="Drinking a beer" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))