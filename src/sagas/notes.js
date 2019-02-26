import { all, select, takeLatest, takeEvery} from 'redux-saga/effects';

import * as actions from '../actions';

function* editRequested() {
    const notes = yield select(state => state.notes);
    
    localStorage.setItem('notes', JSON.stringify(notes));
}

export const noteSagas = [
    takeLatest(actions.EDIT_REQUESTED, editRequested),
    takeEvery(actions.DELETE_NOTE, editRequested),
    takeEvery(actions.ADD_NOTE, editRequested)
]

export function* noteSaga() {
    yield all(noteSagas)
}