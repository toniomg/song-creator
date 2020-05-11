import React from 'react';
import {connect} from 'react-redux';
import {selectKey} from '../actions'
import { chordsList } from '../KeyData';
import { Dropdown, Form, Container, Input } from 'semantic-ui-react';

import {playOptions} from "../PlayOptions"


class SongOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keySelected: 'C', instrumentSelected: 266 };
    this.onKeySelected = this.onKeySelected.bind(this);
  }

  onTempoChanged(e, { name, value }) {
    playOptions.tempo = value;
    console.log(playOptions);
  }

  onKeySelected(e, { name, value }) {
    this.props.selectKey(value);
    this.setState({keySelected: value});
  }

  onInstrumentChanged (e, { name, value }) {
    playOptions.instrument = value;
  }

  onStrumChanged (e, { name, value }) {
    playOptions.strum = value;
  }

  onChordProgressionChanged  (e, { name, value }) {
      playOptions.progression = value;
  }


  render() {

    const keyList = Object.keys(chordsList).map(key => ({key: key, value: key, text: key}));
    const instrumentList = [
        {key: "266", value: 266, text: "Acoustic Guitar (Steel) 1"},
        {key: "259", value: 259, text: "Acoustic Guitar (Steel) 2"},
        {key: "336", value: 336, text: "Electric Guitar (Distorsion)"},
        {key: "289", value: 289, text: "Electric Guitar (Clean)"},
        {key: "619", value: 619, text: "Trumpet (Brass)"},
        {key: "5", value: 5, text: "Acoustic Grand Piano"},
        {key: "541", value: 541, text: "String Esemble"}];
    const strummingPatterns = [
        {key: "d0du0udu", value: "d0du0udu", text: "D - DU - U - DU"},
        {key: "d0d0dudu", value: "d0d0dudu", text: "D - D - DU - DU"}];

    const chordProgressions = [
        {key: "1465", value: "1465", text: "I - IV - vi - V"},
        {key: "1564", value: "1564", text: "I - V - vi - IV"},
        {key: "1451", value: "1451",  text: "I -IV - V - I"},
        {key: "1645", value: "1645",  text: "I -vi - IV - V"},
        {key: "2511", value: "2511",  text: "ii -V - I - I"}];

    return (<Container className="songOptions">
      <h1>Chord Progression</h1>
        <Form>
            <Form.Field>
                <label>Key</label>
                <Dropdown defaultValue="C" options={keyList} onChange={this.onKeySelected}/>
            </Form.Field>

            <Form.Field>
                <label>Instrument</label>
                <Dropdown placeholder="Instrument" onChange={this.onInstrumentChanged} options={instrumentList}/>
            </Form.Field>

            <Form.Field>
                <label>Tempo</label>
                <Input className="tempoInput" placeholder={"Tempo"} onChange={this.onTempoChanged}/>
            </Form.Field>

            <Form.Field>
                <label>Strumming Pattern</label>
                <Dropdown placeholder="Strumming pattern" onChange={this.onStrumChanged} options={strummingPatterns}/>
            </Form.Field>

            <Form.Field>
                <label>Chord Progression</label>
                <Dropdown placeholder="Chord Progression" onChange={this.onChordProgressionChanged} options={chordProgressions}/>
            </Form.Field>
        </Form>
      </Container>);
  }
}


const mapStateToProps = (state) => {
  return {selectedKey: state.selectedKey, selectedInstrument: state.selectedInstrument};
}

export default connect(mapStateToProps, {
    selectKey: selectKey,
    // selectInstrument: selectInstrument
})(SongOptions);
