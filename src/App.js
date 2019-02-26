import React from 'react';
import { Grommet } from 'grommet';

import { NoteContainer, AppBarContainer } from './components';

const App = () => (
  <Grommet>
      <AppBarContainer/>
      <NoteContainer/>
  </Grommet>
)

export default App;
