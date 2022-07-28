import "./App.css";
import Title from "./components/Title";
import NameInput from "./components/NameInput";
import AddParticipantButton from "./components/AddParticipantButton";
import React, { useState } from "react";
import RaffleButton from "./components/RaffleButton";
import ParticipantList from "./components/ParticipantList";
import Result from "./components/Result";

function App() {
    const inputRef = React.createRef();
    const [participants, setParticipants] = useState([]);
    const [resultModalIsOpen, setResultModalIsOpen] = useState(false);
    const [resultText, setResultText] = useState("No winner yet!");
    return (
        <div className="App">
            <Title title="Teamugcode Raffle" />
            <section id="InputSection" className="InputSection">
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
                    setResultText={setResultText}
                    resultModalIsOpen={resultModalIsOpen}
                    setResultModalIsOpen={setResultModalIsOpen}
                />
            </section>
            <ParticipantList
                title="Participant list"
                participants={participants}
            />
            <section
                id="ResultSection"
                className={`ResultSection ${
                    resultModalIsOpen ? "ResultModalOpen" : null
                }`}
            >
                <Result
                    className={resultModalIsOpen ? "ResultModalOpen" : null}
                    text={resultText}
                    resultModalIsOpen={resultModalIsOpen}
                    setResultModalIsOpen={setResultModalIsOpen}
                />
            </section>
        </div>
    );
}

export default App;
