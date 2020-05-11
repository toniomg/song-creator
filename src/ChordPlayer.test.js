import ChordPlayer from "./ChordPlayer"
import MIDISounds from "midi-sounds-react";
import {playOptions} from "./PlayOptions"

import {allChords} from "./KeyData";


jest.mock('midi-sounds-react')


beforeEach(() => {
    MIDISounds.mockClear();
});

test("ChordPlayer is loaded without crashing", () => {
   const chordPlayer = new ChordPlayer();
   expect(chordPlayer).not.toBeNull();
   expect(MIDISounds).toHaveBeenCalledTimes(1);
});

test("ChordPlayer can play a Up Chord", () => {
    const chordPlayer = new ChordPlayer();
    chordPlayer.playUpChord()

    const mockMidiPlayerInstance = MIDISounds.mock.instances[0];
    const mockPlayChord = mockMidiPlayerInstance.playStrumUpNow;

    expect(mockPlayChord).toHaveBeenCalledTimes(1)

});

test("ChordPlayer can play a Down Chord", () => {
    const chordPlayer = new ChordPlayer();
    chordPlayer.playDownChord()

    const mockMidiPlayerInstance = MIDISounds.mock.instances[0];
    const mockPlayChord = mockMidiPlayerInstance.playStrumDownNow;

    expect(mockPlayChord).toHaveBeenCalledTimes(1)

});

test("ChordPlayer can play a sequence", () => {
    const chordPlayer = new ChordPlayer();
    chordPlayer.playSequence([]);

    const mockMidiPlayerInstance = MIDISounds.mock.instances[0];
    const mockPlayChord = mockMidiPlayerInstance.startPlayLoop;

    expect(mockPlayChord).toHaveBeenCalledTimes(1)
});

test("ChordPlayer can stop a sequence", () => {
    const chordPlayer = new ChordPlayer();
    chordPlayer.stopSequence();

    const mockMidiPlayerInstance = MIDISounds.mock.instances[0];
    const mockStopSequence = mockMidiPlayerInstance.stopPlayLoop;

    expect(mockStopSequence).toHaveBeenCalledTimes(1)
});

test("ChordPlayer can prepare a sequence with different chord progressions and strumming patterns", () => {
    const chordPlayer = new ChordPlayer();

    //Simple
    let playOptions = {key: "C", instrument: "266", tempo: 120, strum: "dudududu", progression: "1111", bars: 4, beats: 4};
    expect(chordPlayer.calculateSequence(playOptions))
        .toEqual([
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C , 1/8, 1]]]]
        );

    //Sequence 1
    playOptions = {key: "C", instrument: "266", tempo: 120, strum: "d0du0udu", progression: "1234", bars: 4, beats: 4};
    expect(chordPlayer.calculateSequence(playOptions))
        .toEqual([
            [[], [[playOptions.instrument, allChords.C, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.C , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.Dm, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.Dm, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Dm, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.Dm, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Dm, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Dm , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.Em, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.Em, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Em, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.Em, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Em, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.Em , 1/8, 1]]],

            [[], [[playOptions.instrument, allChords.F, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.F, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.F, 2/8, 1]]],
            [[], []],
            [[], [[playOptions.instrument, allChords.F, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.F, 1/8, 1]]],
            [[], [[playOptions.instrument, allChords.F , 1/8, 1]]]]
        );


    // //Sequence 1
    // sequence = [["C", "1"], ["Dm", "2"], ["Em", "2"], ["F", "2"], ["G", "3"], ["Am", "2"], ["Bdm", "1"], ["C", "1"]]
    // expect(chordPlayer.calculateSequence(sequence))
    //     .toEqual([
    //         [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
    //         [[], [[playOptions.instrument,allChords.Dm, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.Em, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.F, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.G, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.Am, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.Bdm, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.C , 1/8, 1]]]]);
    //
    // //Sequence 2
    // sequence = [["C", "1"], [], [], ["F", "2"], ["G", "3"], ["Am", "2"], ["Bdm", "1"], []]
    // expect(chordPlayer.calculateSequence(sequence))
    //     .toEqual([
    //         [[], [[playOptions.instrument, allChords.C, 1/8, 1]]],
    //         [[], []],
    //         [[], []],
    //         [[], [[playOptions.instrument, allChords.F, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.G, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.Am, 1/8, 1]]],
    //         [[], [[playOptions.instrument, allChords.Bdm, 1/8, 1]]],
    //         [[], []]]);
});