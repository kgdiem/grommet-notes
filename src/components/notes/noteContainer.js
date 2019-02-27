import React from 'react';
import { Box, Collapsible, Grid, ResponsiveContext, ThemeContext } from 'grommet';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { NoteArea, NoteList } from './';

const defaultGridSize = {
    rows: ['full']
}

const getGridSize = (size, activeNote) => {
    if(size !== 'small') {
        return {
            ...defaultGridSize,
            areas: [
                { name: 'list', start: [0, 0], end: [1, 0] },
                { name: 'note', start: [1, 0], end: [1, 0] },
            ],
            columns: ['1/4', '3/4']
        }
    } else if(activeNote) {
        return {
            ...defaultGridSize,
            areas: [
                { name: 'list', start: [0, 0], end: [0, 0] },
                { name: 'note', start: [0, 0], end: [1, 0] },
            ],
            columns: ['auto', 'full']
        }
    } else {
        return {
            ...defaultGridSize,
            areas: [
                { name: 'list', start: [0, 0], end: [1, 0] },
                { name: 'note', start: [0, 0], end: [0, 0] },
            ],
            columns: ['full', 'auto']
        }
    }
}

const NoteContainerBody = ({activeNote, activateNote, deleteNote, editNote, notes, note, size}) => (
    <Grid
        {...getGridSize(size, activeNote)}
        fill
        flex
        gap="small"
        justify="center"
    >
        <Collapsible direction="horizontal" open={size !== 'small' || !activeNote}>
            <Box gridArea="list" fill flex>
                <NoteList notes={notes} onNoteClick={activateNote} onDeleteNoteClick={deleteNote}/>
            </Box>
        </Collapsible>

        <Collapsible direction="horizontal" open={size !== 'small' || activeNote}>
            <Box gridArea="note" fill flex>
                <NoteArea note={note} onChange={note && editNote}/>
            </Box>
        </Collapsible>
    </Grid>
)

const NoteContainerComponent = (props) => (
    <ResponsiveContext.Consumer>
        {size => <NoteContainerBody size={size} {...props}/>}
    </ResponsiveContext.Consumer>
)

const mapStateToProps = state => ({
    notes: state.notes,
    note: state.notes[state.activeNoteIndex || 0],
    activeNote: state.activeNoteIndex !== undefined
})

const mapDispatchToProps = dispatch => ({
    activateNote: index => {
        dispatch({type: actions.ACTIVATE_NOTE, payload: {noteIndex: index}})
    },
    deleteNote: index => {
        dispatch({type: actions.DELETE_NOTE, payload: {noteIndex: index}})
    },
    editNote: note => {
        dispatch({type: actions.EDIT_REQUESTED, payload: {note}})
    }
})

export const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteContainerComponent)