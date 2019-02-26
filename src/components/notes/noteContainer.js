import React from 'react';
import { Box, Grid } from 'grommet';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { NoteArea, NoteList } from './';

const NoteContainerComponent = ({notes, note, activateNote, deleteNote, editNote}) => (
    <Grid
        areas={[
            { name: 'list', start: [0, 0], end: [1, 0] },
            { name: 'note', start: [1, 0], end: [1, 0] },
        ]}
        rows={['full']}
        columns={['1/4', '3/4']}
        fill={true}
        gap="small"
        justify="center"
        style={{
            height: 'calc(100vh -  48px)',
            width: '99.1vw'
        }}
    >
        <Box gridArea="list" fill={true}>
            <NoteList notes={notes} onNoteClick={activateNote} onDeleteNoteClick={deleteNote}/>
        </Box>
        <Box gridArea="note" fill={true}>
            <NoteArea note={note} onChange={note && editNote}/>
        </Box>
    </Grid>
)

const mapStateToProps = state => ({
    notes: state.notes,
    note: state.notes[state.activeNoteIndex]
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