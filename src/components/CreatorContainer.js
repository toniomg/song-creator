import React from 'react';

import SongOptions from './SongOptions';
import InstrumentPlayer from '../ChordPlayer';
import { Button, Container } from 'semantic-ui-react';
import {connect} from "react-redux";

import "../style.css"

import {playOptions} from "../PlayOptions"

import ChordsSelector from './ChordsSelector';

const divStyle = {
    background: 'blue'
};

class CreatorContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keySelected2: 'C' };
    this.state = { instrumentSelected: '3' };
    this.chordPlayer = new InstrumentPlayer();
    this.onPlayPressed = this.onPlayPressed.bind(this);
    this.onStopPressed = this.onStopPressed.bind(this);
  }

  onInstrumentChanged(instrumentSelected) {
    this.setState({ instrumentSelected });
  }

  onStopPressed() {
      this.chordPlayer.stopSequence();
  }

  onPlayPressed() {
    this.chordPlayer.playSequence(playOptions)
  }

  render() {
    return (
      <Container>
        <SongOptions className="songOptions" instrumentChanged={this.onInstrumentChanged} />
        <ChordsSelector chordPlayer = {this.chordPlayer} />
        <Button onClick={this.onPlayPressed}>Play</Button>
        <Button onClick={this.onStopPressed}>Stop</Button>
      </Container>);
  }
}

const mapStateToProps = (state) => {
    return {selectedInstrument: state.selectedInstrument,
        chordProgression: state.changeChordSequence};
}


export default connect(mapStateToProps)(CreatorContainer);
