import * as actions from '../actions';

let loadedNotes = localStorage.getItem('notes');

if(loadedNotes)
    loadedNotes = JSON.parse(loadedNotes);

export const initialState = {
    notes: loadedNotes || [{content: 'test', id: 1}],
    activeNoteIndex: 0
}

function notes(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_NOTE: {
            const id = state.notes.length

            const notes = [...state.notes, {id, content: ' '}]

            return {...state, notes, activeNoteIndex: id}
        }
        case actions.ACTIVATE_NOTE: {
            return {...state, activeNoteIndex: action.payload.noteIndex}
        }
        case actions.EDIT_REQUESTED: {
            const notes = [...state.notes]

            notes[state.activeNoteIndex].content = action.payload.note
            
            return {...state, notes: notes}
        }
        default:
            return state
    }
}

export default notes