import React from "react";

import SongOptions from "./SongOptions"
import ChordProgression from "./ChordProgession";

export default class CreatorContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {keySelected2 : "c"};
        this.onKeyChanged = this.onKeyChanged.bind(this);
    }

    onKeyChanged(keySelected) {
        this.setState({keySelected2: keySelected});
    }

    render () {
        
        return (
            <div className="App">
                <SongOptions onKeyChanged = {this.onKeyChanged}/>
                <ChordProgression keySelected = {this.state.keySelected2}/>
                <button className="ui button">Play</button>
            </div>);
    }
}