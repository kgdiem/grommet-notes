import React from 'react';
import { Grommet } from 'grommet';
import { NoteContainer } from './components';

const App = ({notes, note}) => (
  <Grommet>
      <NoteContainer notes={notes} note={note}/>
  </Grommet>
)

export default App;
