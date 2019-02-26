import React from 'react';
import { Box, TextArea } from 'grommet';

export default ({note}) => (
    <Box fill={true} background="light-1">
        <TextArea fill={true} value={note && note.content}/>
    </Box>
)