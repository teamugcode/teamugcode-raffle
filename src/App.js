import "./App.css";
import Title from "./components/Title";
import NameInput from "./components/NameInput";
import AddParticipantButton from "./components/AddParticipantButton";
import React, { useState } from "react";
import RaffleButton from "./components/RaffleButton";

function App() {
    const inputRef = React.createRef();
    const [participants, setParticipants] = useState([]);
    return (
        <div className="App">
            <Title title="Teamugcode Raffle" />
            <NameInput
                addText="Enter the name of a participant"
                placeholder="Teemu"
                ref={inputRef}
            />
            <AddParticipantButton
                text="Add new participant"
                ref={inputRef}
                participants={participants}
                setParticipants={setParticipants}
            />
            <RaffleButton
                participants={participants}
                text="Raffle the winner"
            />
        </div>
    );
}

export default App;
