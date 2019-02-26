import React from 'react';
import { connect } from 'react-redux';

import { AppBar } from './appbar'
import * as actions from '../../actions';

const AppBarContainerComponent = ({addNote}) => (
    <AppBar onClickAdd={addNote}/>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addNote: () => {
        dispatch({type: actions.ADD_NOTE})
    }
})

export const AppBarContainer = connect(mapStateToProps, mapDispatchToProps)(AppBarContainerComponent)