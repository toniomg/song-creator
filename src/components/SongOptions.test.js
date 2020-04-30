import React from 'react';
import { render } from '@testing-library/react';

import SongOptions from './SongOptions';

test ('SongOptions contains header', () => {

    const {getByText} = render(<SongOptions/>);
    const headerElement = getByText(/Select your options/i);
    expect(headerElement).toBeInTheDocument();

});


// test ('SongOptions contains Tempo Selector', () => {
//
//     const {getByText} = render(<SongOptions/>);
//     const headerElement = getByText(/Select your tempo/i);
//     expect(headerElement).toBeInTheDocument();
//
// });