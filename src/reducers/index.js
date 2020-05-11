import {combineReducers} from 'redux';

const changeKeyReducer = (newKey="C", action) => {

    if (action.type === "KEY_CHANGE") {
        return action.payload;
    }
    return newKey;
};

const changeChordSequence = (chordProgression=[[[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []]], action) => {
    //Format: chord, type (1D, 1U, 2D, 2U...)
    if (action.type === "CHORD_CHANGE") {
        let newProgression = chordProgression;
        newProgression[parseInt(action.payload.positionSeq)][parseInt(action.payload.positionBeat)] = [action.payload.chord, action.payload.type];
        console.log("Progression: ");
        console.log(action.payload);
        console.log(newProgression);
        return newProgression;
    }
    return chordProgression
}

export default combineReducers({
    selectedKey: changeKeyReducer,
    changeChordSequence: changeChordSequence
});
