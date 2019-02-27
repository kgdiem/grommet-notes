import React from 'react';
import { Grommet } from 'grommet';

import { NoteContainer, AppBarContainer } from './components';

const theme = {
  collapsible: {
    animatedBox: {
      width: "100%"
    }
  }
}

const App = () => (
  <Grommet theme={theme} full>
      <AppBarContainer/>
      <NoteContainer/>
  </Grommet>
)

export default App;
