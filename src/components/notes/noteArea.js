import React, { useEffect } from 'react';
import { Box, TextArea, Collapsible } from 'grommet';

export const NoteArea = ({note, onChange, visible}) => {
    
    useEffect(() => note && document.getElementById('noteTextArea').focus())

    return (
        <Box fill flex background="light-1">
            <Collapsible open={visible}>
                <TextArea 
                    fill
                    flex
                    id="noteTextArea"
                    value={note && note.content ? note.content : ''} 
                    onChange={e => onChange(e.target.value)}
                    style={{
                        height: '100vh',
                        borderRadius: 0,
                        border: 'none',
                        overflow: 'auto',
                        outline: 'none',
                        WebkitBoxShadow: 'none',
                        MozBoxShadow: 'none',
                        boxShadow: 'none',
                        resize: 'none',
                    }}
                />
            </Collapsible>
        </Box>
    )
}