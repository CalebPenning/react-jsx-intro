const App = () => {
    return (
    <div>
        <FirstComponent />
        <NamedComponent name="Caleb"/>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))