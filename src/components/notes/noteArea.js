import React from 'react';
import { Box, TextArea } from 'grommet';

export const NoteArea = ({note, onChange}) => (
    <Box fill flex background="light-1">
        <TextArea fill={true} flex value={note && note.content ? note.content : ''} onChange={e => onChange(e.target.value)}/>
    </Box>
)