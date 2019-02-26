import React from 'react';
import { Box, Grid } from 'grommet';
import { NoteArea, NoteList } from './';
import { connect } from 'react-redux';

const NoteContainer = ({notes, note}) => (
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
            height: '100vh',
            width: '98.8vw'
        }}
    >
        <Box gridArea="list" fill={true}>
            <NoteList notes={notes}/>
        </Box>
        <Box gridArea="note" fill={true}>
            <NoteArea note={note}/>
        </Box>
    </Grid>
)

function mapStateToProps(state) {
    return {
        notes: state.notes,
        note: state.notes[state.activeNoteIndex]
    }
}

export default connect(mapStateToProps)(NoteContainer)