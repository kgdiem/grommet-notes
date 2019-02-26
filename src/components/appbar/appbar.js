import React from 'react';
import { Box, Button, Grid } from 'grommet';
import { Add } from 'grommet-icons';

export const AppBar = () => (
    <Grid
        areas={[
            { name: 'nav', start: [0, 0], end: [1, 0] },
        ]}
        rows={['xxsmall']}
        columns={['full']}
      >
        <Box gridArea='nav' justify="end">
          <Button icon={<Add/>} fill={false} alignSelf="end"/>
        </Box>
      </Grid>
)