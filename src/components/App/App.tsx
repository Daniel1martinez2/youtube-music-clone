import React, {Fragment} from 'react';
import Header from '../Header/Header'; 
import Chunk from '../Chunk/Chunk'; 
import {testChunk, testChunk2} from './DUMMY_DATA'; 

function App() {
  return (
    <Fragment>
      <Header/>
      <Chunk {...testChunk2} />
      <Chunk {...testChunk} />
    </Fragment>
  );
}

export default App;
