import React from 'react';

import { Select } from 'semantic-ui-react'

import {chordsList} from "../KeyData";



export default class ChordProgression extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let chordsOptions = [];

        if (this.props.keySelected) {
            chordsOptions = chordsList[this.props.keySelected].map(value => {
                return {key: value[0], value: value[0], text: value[0] }
            });
        }

        chordsOptions.unshift({ key: 'none', value: 'none', text: 'None' });

        return <div>
            <Select placeholder='Beat 1 Down' options={chordsOptions} />
            <Select placeholder='Beat 1 Up' options={chordsOptions} />
            <Select placeholder='Beat 2 Down' options={chordsOptions} />
            <Select placeholder='Beat 2 Up' options={chordsOptions} />
            <Select placeholder='Beat 3 Down' options={chordsOptions} />
            <Select placeholder='Beat 3 Up' options={chordsOptions} />
            <Select placeholder='Beat 4 Down' options={chordsOptions} />
            <Select placeholder='Beat 4 Up' options={chordsOptions} />
        </div>
    }
}