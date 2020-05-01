import React from 'react';


import ChordsSelector from "./ChordsSelector";


export default class SongOptions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {keySelected: "c", instrumentSelected: 266};
        this.onKeySelected = this.onKeySelected.bind(this);
        this.onInstrumentChanged = this.onInstrumentChanged.bind(this);
    }

    onTempoChanged (event) {
    }

    onKeySelected(event) {
        console.log("Key changed to: " +  event.target.value);
        this.props.onKeyChanged(event.target.value);
        this.setState({keySelected: event.target.value});
    }

    onInstrumentChanged(event) {
        this.setState({instrumentSelected: parseInt(event.target.value)});
    }

    render() {
        return <div className="ui container">
            <h1>Select your options</h1>
            <div className="ui segment" style={{backgroundColor: 'turquoise', marginTop: '20px'}}>

                <form>
                    <label>Select your Key</label>
                    <select onChange={this.onKeySelected}>
                        <option value="c">C</option>
                        <option value="c#">C#</option>
                        <option value="d">D</option>
                        <option value="d#">D#</option>
                        <option value="e">E</option>
                        <option value="f">F</option>
                        <option value="f#">F#</option>
                        <option value="g">G</option>
                        <option value="g#">G#</option>
                        <option value="a">A</option>
                        <option value="a#">A#</option>
                        <option value="b">B</option>
                    </select>
                </form>
                <br/>
                <form>
                    <label>Select Instrument</label>
                    <select onChange={this.onInstrumentChanged}>
                        <option value="266">Acoustic Guitar (Steel)</option>
                        <option value="336">Electric Guitar (Distorsion)</option>
                        <option value="289">Electric Guitar (Clean)</option>
                    </select>
                </form>
                <ChordsSelector keySelected={this.state.keySelected} instrumentSelected={this.state.instrumentSelected}/>
            </div>
        </div>
    }
}

