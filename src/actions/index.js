

export const selectKey = (newKey) => {
    return {
        type:"KEY_CHANGE",
        payload: newKey
    };
};

// export const selectInstrument = (newInstrument) => {
//     return {
//         type:"INSTRUMENT_CHANGE",
//         payload: newInstrument
//     };
// };


export const changeChordInProgression = (newChord, typeOfChord, positionBeat, positionSeq) => {
    return {
        type:"CHORD_CHANGE",
        payload: {chord: newChord, type: typeOfChord, positionBeat: positionBeat, positionSeq: positionSeq}
    };
};