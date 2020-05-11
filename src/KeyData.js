const O = 12;

const C = 0;
const c = 1;
const D = 2;
const d = 3;
const E = 4;
const F = 5;
const f = 6;
const G = 7;
const g = 8;
const A = 9;
const a = 10;
const B = 11;

const S1 = 5 * O + E;
const S2 = 4 * O + B;
const S3 = 4 * O + G;
const S4 = 4 * O + D;
const S5 = 3 * O + A;
const S6 = 3 * O + E;

const _C = [
    S5 + 3
    , S4 + 2
    , S3 + 0
    , S2 + 1
    , S1 + 0
];

const _Dm = [
    S4 + 0
    , S3 + 2
    , S2 + 3
    , S1 + 1
];

const _Em = [
    S6 + 0
    , S5 + 2
    , S4 + 2
    , S3 + 0
    , S2 + 0
    , S1 + 0
];

const _F = [
    S6 + 1
    , S5 + 3
    , S4 + 3
    , S3 + 2
    , S2 + 1
    , S1 + 1
];

const _G = [
    S6 + 3
    , S5 + 2
    , S4 + 0
    , S3 + 0
    , S2 + 3
    , S1 + 3
];

const _Am = [
    S5 + 0
    , S4 + 2
    , S3 + 2
    , S2 + 1
    , S1 + 0
];

const _Bdm = [
    S5 + 2
    , S4 + 3
    , S3 + 4
    , S2 + 3
];

export const allChords = {"C": _C, "Dm": _Dm, "Em": _Em, "F": _F, "G": _G, "Am": _Am, "Bdm": _Bdm};

export const chordsList = {"C":[["C", _C] , ["Dm", _Dm] , ["Em", _Em], ["F", _F], ["G", _G], ["Am", _Am], ["B°", _Bdm]],
    "C#":[["C#", _C] , ["D#m", _Dm] , ["E#m", _Em], ["F#", _F], ["G#", _G], ["A#m", _Am], ["B#°", _Bdm]]};


