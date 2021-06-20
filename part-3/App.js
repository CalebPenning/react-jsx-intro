const App = () => {
    return (
        <div>
            <Person name="Caleb" age={27} hobbies={["Programming", "Gaming", "Music"]} />
            <Person name="Carl" age={28} hobbies={["Music", "Design", "Wine"]} />
            <Person name="Ry" age={23} hobbies={["Combat sports", "Gaming", "Music"]} />
            <Person name="Ryaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" age={23} hobbies={["Combat sports", "Gaming", "Music"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))