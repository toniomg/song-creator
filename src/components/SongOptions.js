import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import ChordsSelector from "./ChordsSelector";

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(200),
        minWidth: 120
    },
});

class SongOptions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {keySelected: "c", instrumentSelected: 266};
        this.onKeySelected = this.onKeySelected.bind(this);
        this.onInstrumentChanged = this.onInstrumentChanged.bind(this);
    }

    onTempoChanged (event) {
    }

    onPlayClicked (event) {
        event.preventDefault();
    }

    onKeySelected(event) {
        console.log("Key changed to: " +  event.target.value);
        this.setState({keySelected: event.target.value});
    }

    onInstrumentChanged(event) {
        this.setState({instrumentSelected: parseInt(event.target.value)});
    }

    render() {
        const { classes } = this.props;
        return <div className="ui container">
            <h1>Select your options</h1>
            <div className="ui segment" style={{backgroundColor: 'turquoise', marginTop: '20px'}}>

                <FormControl classes={classes.formControl}  bgcolor="background.paper">
                    <InputLabel>Select your Key</InputLabel>
                    <Select onChange={this.onKeySelected} classes={classes.selectEmpty}>
                        <MenuItem value="c">C</MenuItem>
                        <MenuItem value="c#">C#</MenuItem>
                        <MenuItem value="d">D</MenuItem>
                        <MenuItem value="d#">D#</MenuItem>
                        <MenuItem value="e">E</MenuItem>
                        <MenuItem value="f">F</MenuItem>
                        <MenuItem value="f#">F#</MenuItem>
                        <MenuItem value="g">G</MenuItem>
                        <MenuItem value="g#">G#</MenuItem>
                        <MenuItem value="a">A</MenuItem>
                        <MenuItem value="a#">A#</MenuItem>
                        <MenuItem value="b">B</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <FormControl classes={classes.formControl}>
                    <InputLabel>Select Instrument</InputLabel>
                    <Select onChange={this.onInstrumentChanged} classes={classes.selectEmpty}>
                        <MenuItem value="266">Acoustic Guitar (Steel)</MenuItem>
                        <MenuItem value="336">Electric Guitar (Distorsion)</MenuItem>
                        <MenuItem value="289">Electric Guitar (Clean)</MenuItem>
                    </Select>
                </FormControl>
                <ChordsSelector keySelected={this.state.keySelected}/>
                <Button variant="contained" onClick={this.onPlayClicked.bind(this)}>Play</Button>
            </div>
        </div>
    }
}

export default withStyles(useStyles)(SongOptions)
