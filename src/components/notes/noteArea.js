import React from 'react';
import { Box, TextArea, Collapsible } from 'grommet';

export const NoteArea = ({note, onChange, visible}) => (
    <Box fill flex background="light-1">
        <Collapsible open={visible}>
            <TextArea 
                fill
                flex
                value={note && note.content ? note.content : ''} 
                onChange={e => onChange(e.target.value)}
                style={{
                    borderRadius: 0,
                    border: 'none',
                    overflow: 'auto',
                    outline: 'none',
                    '-webkit-box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    'box-shadow': 'none',
                    'resize': 'none',
                }}
            />
        </Collapsible>
    </Box>
)