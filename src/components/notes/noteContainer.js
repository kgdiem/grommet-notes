import React from 'react';
import { Box, Collapsible, Grid, ResponsiveContext } from 'grommet';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { NoteArea, NoteList } from './';

const getGridSize = size => {
    return {
        areas: [
            { name: 'list', start: [0, 0], end: [1, 0] },
            { name: 'note', start: [1, 0], end: [1, 0] },
        ],
        rows: ['full'],
        columns: ['1/4', '3/4']
    }
}

const NoteContainerBody = ({activeNote, activateNote, deleteNote, editNote, notes, note, size}) => (
    <Grid
        {...getGridSize(size)}
        fill={true}
        gap="small"
        justify="center"
        style={{
            height: 'calc(100vh -  48px)',
            width: '99.1vw'
        }}
    >
        <Collapsible direction="horizontal" open={size !== 'small' || !activeNote}>
            <Box gridArea="list" fill={true}>
                <NoteList notes={notes} onNoteClick={activateNote} onDeleteNoteClick={deleteNote}/>
            </Box>
        </Collapsible>

        <Collapsible direction="horizontal" open={size !== 'small' || activeNote}>
            <Box gridArea="note" fill={true}>
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