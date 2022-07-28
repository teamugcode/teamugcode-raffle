const Result = (props) => {
    const handleCloseButtonClick = () => {
        props.setResultModalIsOpen(false);
    };
    return (
        <div className="ResultWrapper">
            <div className="ResultContentWrapper">
                <button
                    onClick={handleCloseButtonClick}
                    className="ResultWrapper__Close"
                >
                    Close
                </button>
                <p className="ResultText">{props?.text}</p>
            </div>
        </div>
    );
};

export default Result;
