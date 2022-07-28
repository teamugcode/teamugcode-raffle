import "./App.css";
import Title from "./components/Title";
import NameInput from "./components/NameInput";
import AddParticipantButton from "./components/AddParticipantButton";
import React from "react";

function App() {
    const inputRef = React.createRef();
    return (
        <div className="App">
            <Title title="Teamugcode Raffle" />
            <NameInput
                addText="Enter the name of a participant"
                placeholder="Teemu"
                ref={inputRef}
            />
            <AddParticipantButton text="Add new participant" ref={inputRef} />
        </div>
    );
}

export default App;
