import React from "react";

const AddParticipantButton = React.forwardRef((props, ref) => {
    const handleButtonClick = () => {
        console.log(ref.current.value);
    };

    return (
        <button onClick={handleButtonClick} className="AddParticipantButton">
            {props.text}
        </button>
    );
});

export default AddParticipantButton;
