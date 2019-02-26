import * as actions from '../actions';

export const initialState = {
    notes: [],
    activeNoteIndex: null
}

function notes(state = initialState, action) {
    switch (action.type) {
        case actions.ACTIVATE_NOTE:
            return {...state, activeNoteIndex: action.payload.noteIndex}

        case actions.EDIT_COMPLETE:
            const notes = [...state.notes]

            notes[state.activeNoteIndex] = action.payload.note
            
            return {...state, notes: notes}
        
        default:
            return state
    }
}

export default notes