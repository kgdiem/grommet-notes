import React, { Component } from 'react';
import { Box, Grid, Grommet } from 'grommet';

class App extends Component {
  render() {
    return (
      <Grommet>
        <Grid
          areas={[
            { name: 'list', start: [0, 0], end: [1, 0] },
            { name: 'note', start: [1, 0], end: [1, 0] },
          ]}
          rows={['full']}
          columns={['1/4', '3/4']}
          gap="small"
          justify="center"
          style={{
            height: '100vh'
          }}
        >
          <Box gridArea="list" background="light-5">
            {
              // notes list
            }
          </Box>
          <Box gridArea="note" xbackground="light-2">
            {
              // note area
            }
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default App;
