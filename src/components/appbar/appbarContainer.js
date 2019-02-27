import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContext } from 'grommet';

import { AppBar } from './appbar'
import * as actions from '../../actions';

const AppBarContainerComponent = ({addNote, activeNote, closeNote}) => (
    <ResponsiveContext.Consumer>
        {size => (
            <AppBar 
                activeNote={activeNote} 
                onAddClick={addNote} 
                onCloseClick={closeNote} 
                size={size}
            />
        )}
    </ResponsiveContext.Consumer>
)

const mapStateToProps = state => ({
    activeNote: state.activeNoteIndex !== null
})

const mapDispatchToProps = dispatch => ({
    addNote: () => dispatch({type: actions.ADD_NOTE}),
    closeNote: () => dispatch({type: actions.CLEAR_ACTIVE_NOTE})
})

export const AppBarContainer = connect(mapStateToProps, mapDispatchToProps)(AppBarContainerComponent)