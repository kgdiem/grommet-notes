import React from 'react';
import { Anchor, Box, InfiniteScroll, Paragraph } from 'grommet';
import { Erase } from 'grommet-icons';

const getNotePreview = note => note.content && note.content.slice(0, 20) || 'New note'

const NoteListItem = ({note, onClick, onClickDelete}) => (
    <Box
        flex={false}
        pad="medium"
    >
        <Paragraph margin="none">
            <Anchor onClick={onClick}>
                {getNotePreview(note)}
            </Anchor>
            <Anchor onClick={onClickDelete}>
                <Erase/>
            </Anchor>
        </Paragraph>
    </Box>
)

export const NoteList = ({notes, onNoteClick, onDeleteNoteClick}) => (
    <Box
        background="light-3"
        fill={true}
        overflow="auto"
    >
        <InfiniteScroll items={notes}>
            {(note, index) => (
                <NoteListItem 
                    note={note}
                    onClick={() => onNoteClick(index)}
                    onClickDelete={() => onDeleteNoteClick(index)}
                    key={note.id} 
                />
            )}
        </InfiniteScroll>
    </Box>
)