import React from 'react';

import { Select, Dropdown, Segment, Checkbox } from 'semantic-ui-react';

import { chordsList } from '../KeyData';
import {connect} from "react-redux";
import {changeChordInProgression} from "../actions";
import {playOptions} from "../PlayOptions"


class ChordProgression extends React.Component {

    numberOfBeats = 4;

    constructor(props) {
        super(props);
        this.onCheckboxChanged = this.onCheckboxChanged.bind(this);
        this.onChordChanged = this.onChordChanged.bind(this);
        this.state= [null, null, null, null];
    }

    onCheckboxChanged (e, { name, value }) {
        console.log(name);
        //TODO this.props.changeChordInProgression(this.state[0], "1" , Math.floor(parseInt(name)/8), 0 , 0);
    }

    onChordChanged (e, { name, value }) {
        let prevState = this.state;
        prevState[name] = value;
        this.setState(prevState);
    }

    render() {

        let chordsOptions = [];
        if (this.props.selectedKey) {
            chordsOptions = chordsList[this.props.selectedKey].map(value => ({
                key: value[0],
                value: value[0],
                text: value[0]
            }));
        }
        chordsOptions.unshift({key: 'none', value: 'none', text: 'None'});

        const strumStyle = [{text: 'None', value: 'None'}, {text: 'Normal', value: 'Normal'}, {
            text: 'Mutted',
            value: 'Mutted'
        }, {text: 'Snap', value: 'Snap'}];

        const beatSelectors = [[], [], [], []];


        for (var i = 0 ; i < this.numberOfBeats ; i ++) {
            beatSelectors[0].push(
            <div>
                <label>Beat {i+1}</label>
                <div>
                    <Checkbox name={i*2} label='Down' onChange={this.onCheckboxChanged}/>
                    <Checkbox name={i*2 + 1} label='Up' onChange={this.onCheckboxChanged}/>
                </div>
            </div>);
        }

        for (var i = 0 ; i < this.numberOfBeats ; i ++) {
            beatSelectors[1].push(
                <div>
                    <label>Beat {i+1}</label>
                    <div>
                        <Checkbox name={i*2 + 8} label='Down' onChange={this.onCheckboxChanged}/>
                        <Checkbox name={i*2 + 9} label='Up' onChange={this.onCheckboxChanged}/>
                    </div>
                </div>);
        }

        for (var i = 0 ; i < this.numberOfBeats ; i ++) {
            beatSelectors[2].push(
                <div>
                    <label>Beat {i+1}</label>
                    <div>
                        <Checkbox name={i*2 + 16} label='Down' onChange={this.onCheckboxChanged}/>
                        <Checkbox name={i*2 + 17} label='Up' onChange={this.onCheckboxChanged}/>
                    </div>
                </div>);
        }

        for (var i = 0 ; i < this.numberOfBeats ; i ++) {
            beatSelectors[3].push(
                <div>
                    <label>Beat {i+1}</label>
                    <div>
                        <Checkbox name={i*2 + 24} label='Down' onChange={this.onCheckboxChanged}/>
                        <Checkbox name={i*2 + 25} label='Up' onChange={this.onCheckboxChanged}/>
                    </div>
                </div>);
        }

        const chordSelectors = beatSelectors.map((value, index) => {
            return <div>
                <Dropdown name={index} selection placeholder="Chord 1" options={chordsOptions} onChange={this.onChordChanged}/>
                <div>
                    {beatSelectors[index]}
                </div>
            </div>
        });


        return (<div>
            <div>
                {chordSelectors}
            </div>
        </div>);
    }
}


const mapStateToProps = (state) => {
    return {selectedKey: state.selectedKey};
}

export default connect(mapStateToProps, {
    changeChordInProgression: changeChordInProgression
})(ChordProgression);
