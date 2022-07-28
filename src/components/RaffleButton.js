import React from "react";
import { raffleOneItemFromArray } from "./Helpers";

const RaffleButton = (props) => {
    const handleRaffleButtonClick = () => {
        if (!props?.participants) {
            return;
        }

        const winner = raffleOneItemFromArray(props.participants);

        if (winner) {
            alert(`We have a winner ${winner}`);
        }
    };
    return (
        <button onClick={handleRaffleButtonClick} className="RaffleButton">
            {props.text}
        </button>
    );
};

export default RaffleButton;
