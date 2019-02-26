import * as actions from '../actions';

let loadedNotes = localStorage.getItem('notes');

if(loadedNotes)
    loadedNotes = JSON.parse(notes);

export const initialState = {
    notes: loadedNotes || [],
    activeNoteIndex: null
}

function notes(state = initialState, action) {
    switch (action.type) {
        case actions.ACTIVATE_NOTE:
            return {...state, activeNoteIndex: action.payload.noteIndex}

        case actions.EDIT_REQUESTED:
            const notes = [...state.notes]

            notes[state.activeNoteIndex] = action.payload.note
            
            return {...state, notes: notes}
        
        default:
            return state
    }
}

export default notes