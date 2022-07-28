const ParticipantList = (props) => {
    const participants = props.participants;

    return (
        <div>
            <h2 className="ParticipantList__Title">{props.title}</h2>
            <ul className="ParticipantList__List">
                {participants?.map((name, index) => {
                    return (
                        <span
                            className="ParticipantList__Participant"
                            key={`participant-${index}`}
                        >
                            {name}
                        </span>
                    );
                })}
            </ul>
        </div>
    );
};

export default ParticipantList;
