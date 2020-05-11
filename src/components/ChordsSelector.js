import React from 'react';

import Grid from '@material-ui/core/Grid';

import { chordsList } from '../KeyData';
import {connect} from 'react-redux';
import { Button, Label, Container } from 'semantic-ui-react';


class ChordsSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onChordPressed = this.onChordPressed.bind(this);
  }

  onChordPressed(chord) {
      this.props.chordPlayer.playUpChord(chord, 1);
  }


  render() {
    const keySelected = this.props.selectedKey;

    const chordsNumbersMajor = ["I", "ii", "iii", "IV", "V", "vi", "VII°"];

    return (<Container style={{margin: 20}}>
        <Grid item xs={7}>
          <Grid container justify="center" spacing={3}>
            {chordsList[keySelected].map((value, index) => (
              <Grid key={value[0]} item>
                <div>
                  <p>{chordsNumbersMajor[index]}</p>
                  <Button onClick={() => this.onChordPressed(value[1])}>{value[0]}</Button>
                </div>
              </Grid>))}
          </Grid>
        </Grid>
    </Container>);
  }
}


const mapStateToProps = (state) => {
  return {selectedKey: state.selectedKey, selectedInstrument: state.selectedInstrument};
}

export default connect(mapStateToProps)(ChordsSelector);
