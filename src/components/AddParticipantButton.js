import React from "react";

const AddParticipantButton = React.forwardRef((props, ref) => {
    const handleButtonClick = () => {
        if (!props.participants.includes(ref.current.value)) {
            const updatedParticipants = [
                ...props.participants,
                ref.current.value,
            ];
            props.setParticipants(updatedParticipants);
        }
    };

    return (
        <button onClick={handleButtonClick} className="AddParticipantButton">
            {props.text}
        </button>
    );
});

export default AddParticipantButton;
