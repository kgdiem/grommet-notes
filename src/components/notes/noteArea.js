import React from 'react';
import { Box, TextArea } from 'grommet';

export const NoteArea = ({note, onChange}) => (
    <Box fill={true} background="light-1">
        <TextArea fill={true} value={note && note.content} onChange={e => onChange(e.target.value)}/>
    </Box>
)