import React from 'react';
import { Box, Button, Grid } from 'grommet';
import { Add, Previous } from 'grommet-icons';

export const AppBar = ({activeNote, onAddClick, onCloseClick, size}) => (
  <Grid
      areas={[
          { name: 'nav', start: [0, 0], end: [1, 0] },
      ]}
      rows={['xxsmall']}
      columns={['full']}
    >
      <Box background="brand" gridArea="nav">
        { size === 'small' && activeNote &&
          <Button
            alignSelf="start"
            fill={false}
            icon={<Previous/>}
            onClick={onCloseClick}
          />
        }

        { (size !== 'small' || !activeNote) && 
          <Button 
            alignSelf="end"
            fill={false}
            icon={<Add/>} 
            onClick={onAddClick}
          />
        }
      </Box>
    </Grid>
)