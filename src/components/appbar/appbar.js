import React from 'react';
import { Box, Button, Grid } from 'grommet';
import { Add } from 'grommet-icons';

export const AppBar = ({onClickAdd}) => (
  <Grid
      areas={[
          { name: 'nav', start: [0, 0], end: [1, 0] },
      ]}
      rows={['xxsmall']}
      columns={['full']}
    >
      <Box background='brand' gridArea='nav'>
        <Button 
          alignSelf='end'
          fill={false}
          icon={<Add/>} 
          onClick={onClickAdd}/>
      </Box>
    </Grid>
)