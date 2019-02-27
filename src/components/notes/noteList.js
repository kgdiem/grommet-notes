import React from 'react';
import { Anchor, Box, Grid, InfiniteScroll, Collapsible } from 'grommet';
import { Erase } from 'grommet-icons';

const getNotePreview = note => (note.content && note.content.slice(0, 20)) || 'New note'

const NoteListItem = ({note, onClick, onClickDelete}) => (
    <Box
        alignContent="start"
        flex={false}
        fill
        pad="small"
    >
        <Box direction="row">
            <Box>
                <Anchor onClick={onClick}>
                    {getNotePreview(note)}
                </Anchor>
            </Box>

            <Box flex>
                <Anchor onClick={onClickDelete} alignSelf="end">
                    <Erase/>
                </Anchor>
            </Box>
        </Box>
    </Box>
)

export const NoteList = ({notes, onNoteClick, onDeleteNoteClick, visible}) => (
    <Box
        background="light-3"
        fill
        flex
        overflow="auto"
    >
        <Collapsible open={visible}>
            <InfiniteScroll items={notes}>
                {(note, index) => (
                    <NoteListItem 
                        note={note}
                        onClick={() => onNoteClick(index)}
                        onClickDelete={() => onDeleteNoteClick(index)}
                        key={index} 
                    />
                )}
            </InfiniteScroll>
        </Collapsible>
    </Box>
)