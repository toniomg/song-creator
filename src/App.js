import React from 'react';
import './App.css';
import CreatorContainer from "./components/CreatorContainer";
import { Dropdown, Form, Container } from 'semantic-ui-react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";

const divStyle = {
    background: 'blue'
};

function App() {


  return (
      <Provider store={createStore(reducers)}>
    <Container>
        <CreatorContainer styles={divStyle} id={"cwontainer"}/>
    </Container>
      </Provider>
  );
}

export default App;
