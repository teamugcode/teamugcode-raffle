import React from "react";

const NameInput = React.forwardRef((props, ref) => {
    return (
        <div className="NameInputWrapper">
            <label htmlFor="name-input">{props.addText}</label>
            <input
                id="name-input"
                className="NameInputWrapper__Input"
                type="text"
                placeholder={props.placeholder}
                ref={ref}
            />
        </div>
    );
});

export default NameInput;
