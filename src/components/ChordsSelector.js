import React from 'react'

import Grid from '@material-ui/core/Grid';

import MIDISounds from 'midi-sounds-react';

import {chordsList} from "../KeyData";

const chordPlayDuration = 0.5;

export default class ChordsSelector extends React.Component {

    constructor(props) {
        super(props)
        this.onChordPressed = this.onChordPressed.bind(this)
    }

    onChordPressed(chord) {
        console.log("Playing " + chord)
        this.midiSounds.playStrumDownNow(this.props.instrumentSelected,chord, chordPlayDuration);
        this.midiSounds.playStrumUpAt(this.midiSounds.contextTime() + chordPlayDuration, this.props.instrumentSelected, chord, chordPlayDuration);
    }

    render () {

        const keySelected = this.props.keySelected;
        if (!keySelected) {
            console.log("No key selected yet");
            return null;

        } else {
            console.log("Loading key: " + chordsList[keySelected]);

            return <div className='message-box'>
                <div>
                    <Grid item xs={7}>
                        <Grid container justify="center" spacing={3}>
                            {chordsList[keySelected].map((value) => (
                                <Grid key={value[0]} item>
                                    <button draggable="true" class="ui button" onClick={() => this.onChordPressed(value[1])}>{value[0]}</button>
                                </Grid>
                            ))}
                            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.props.instrumentSelected]} />
                        </Grid>
                    </Grid>
                </div>
                <div>

                </div>
            </div>
        }


    }
}
