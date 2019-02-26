import { select, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';

function* editRequested() {
    const notes = yield select(state => state.notes);
    
    localStorage.setItem('notes', JSON.stringify(notes));
}

function* notesSaga() {
    yield takeLatest(actions.EDIT_REQUESTED, editRequested);
}

export default notesSaga;