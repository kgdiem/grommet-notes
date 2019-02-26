import React from 'react';
import { Anchor, Box, Grid, InfiniteScroll, Paragraph } from 'grommet';
import { Erase } from 'grommet-icons';

const getNotePreview = note => note.content && note.content.slice(0, 20) || 'New note'

const NoteListItem = ({note, onClick, onClickDelete}) => (
    <Box
        alignContent="start"
        flex={false}
        pad="small"
    >
        <Grid
            rows={['xxsmall']}
            columns={['small', 'xxsmall']}
            areas={[
                { name: 'preview', start: [0, 0], end: [0, 0] },
                { name: 'actions', start: [1,0], end: [1, 0]}
            ]}
        >
            <Box gridArea="preview">
                <Anchor onClick={onClick}>
                    {getNotePreview(note)}
                </Anchor>
            </Box>

            <Box gridArea="actions">
                <Anchor onClick={onClickDelete}>
                    <Erase/>
                </Anchor>
            </Box>
        </Grid>
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