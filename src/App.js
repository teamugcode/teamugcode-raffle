import "./App.css";
import Title from "./components/Title";
import NameInput from "./components/NameInput";

function App() {
    return (
        <div className="App">
            <Title title="Teamugcode Raffle" />
            <NameInput addText="Add new participant" placeholder="Teemu" />
        </div>
    );
}

export default App;
