const NameInput = (props) => {
    return (
        <div className="NameInputWrapper">
            <label for="name-input">{props.addText}</label>
            <input
                id="name-input"
                className="NameInputWrapper__Input"
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default NameInput;
