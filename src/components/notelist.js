import React from 'react';
import { Box, InfiniteScroll, Paragraph } from 'grommet';

const NoteListItem = ({note}) => (
    <Box
        flex={false}
        pad="medium"
    >
        <Paragraph margin="none">{note.content}</Paragraph>
    </Box>
)

export default ({notes}) => (
    <Box
        background="light-3"
        fill={true}
        overflow="auto"
    >
        <InfiniteScroll items={notes}>
            {note => <NoteListItem note={note} key={note.id}/>}
        </InfiniteScroll>
    </Box>
)