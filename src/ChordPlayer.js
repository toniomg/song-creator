import MIDISounds from "midi-sounds-react";
import { chordsList , allChords} from './KeyData';

import {playOptions} from "./PlayOptions"


export default class InstrumentPlayer {

    constructor() {
        this.midiPlayer = new MIDISounds({instruments: ["266, 336, 289"]})
        this.midiPlayer.cacheInstrument("266")
    }

    playUpChord(chord, duration) {
        this.midiPlayer.playStrumUpNow(playOptions.instrument, chord, duration);
    }

    playDownChord(chord, duration) {
        this.midiPlayer.playStrumDownNow(playOptions.instrument, chord, duration);
    }

    stopSequence() {
        this.midiPlayer.stopPlayLoop();
    }

    calculateSequence(options) {
        const dataToPlay=[];

        const chords = options.progression.split('');
        const strums = options.strum.split('');

        chords.forEach((chordNumber) => {
            const allChordsInProg = chordsList[options.key];
            const chord = allChordsInProg[parseInt(chordNumber) - 1][1];
            strums.forEach((strum, index) => {

                let density = 1/8
                if (strum === "d" || strum === "u") {
                    if (index < strums.length && strums[index+1] === "0") {
                        density = density*2;
                    }

                    dataToPlay.push([[], [[playOptions.instrument, chord, density, strum === "d"? 1:2]]]);
                } else {
                    dataToPlay.push([[], []]);
                }
            });
        });

        //     options.forEach((value) => {
        //
        //     const chord = value[0];
        //     const type = value[1];
        //
        //     if (chord && type) {
        //         dataToPlay.push([[], [[playOptions.instrument, allChords[chord], 1/6 , 1]]]);
        //     } else {
        //         dataToPlay.push([[], []])
        //     }
        // });
        // console.log(dataToPlay);

        return dataToPlay;
    }

    playSequence(options) {
        this.midiPlayer.startPlayLoop(this.calculateSequence(options), playOptions.tempo, 1/8);
    }
}
