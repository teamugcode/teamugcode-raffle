export const raffleOneItemFromArray = (participantsArray) => {
    if (!participantsArray) {
        return null;
    }

    if (participantsArray.length < 1) {
        return null;
    }

    const winnerItem =
        participantsArray[Math.floor(Math.random() * participantsArray.length)];
    return winnerItem;
};
