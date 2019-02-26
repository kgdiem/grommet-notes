import React from 'react';
import { Box, InfiniteScroll, Paragraph } from 'grommet';

const NoteListItem = ({note, onClick}) => (
    <Box
        flex={false}
        pad="medium"
        onClick={() => onClick()}
    >
        <Paragraph margin="none">{note.content}</Paragraph>
    </Box>
)

export const NoteList = ({notes, onNoteClick}) => (
    <Box
        background="light-3"
        fill={true}
        overflow="auto"
    >
        <InfiniteScroll items={notes}>
            {(note, index) => <NoteListItem note={note} key={note.id} onClick={() => onNoteClick(index)}/>}
        </InfiniteScroll>
    </Box>
)