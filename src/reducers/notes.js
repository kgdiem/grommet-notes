import * as actions from '../actions';

let loadedNotes = localStorage.getItem('notes');

if(loadedNotes)
    loadedNotes = JSON.parse(loadedNotes);

export const initialState = {
    notes: loadedNotes || [],
    activeNoteIndex: 0
}

export const notes = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_NOTE: {
            const id = state.notes.length + 1

            const notes = [{id}, ...state.notes]

            return {...state, notes, activeNoteIndex: 0}
        }
        case actions.ACTIVATE_NOTE: {
            return {...state, activeNoteIndex: action.payload.noteIndex}
        }
        case actions.DELETE_NOTE: {
            const activeNoteIndex = state.activeNoteIndex
            const notes = [...state.notes]
            
            const deleteIndex = action.payload.noteIndex
            
            notes.splice(deleteIndex, 1)

            const nextState = {...state, notes}

            if(deleteIndex === activeNoteIndex) {
                nextState.activeNoteIndex = 0
            } else if(deleteIndex < activeNoteIndex) {
                nextState.activeNoteIndex--
            }

            return nextState
        }
        case actions.EDIT_REQUESTED: {
            const notes = [...state.notes]
            const {activeNoteIndex} = state

            if(activeNoteIndex === 0) {
                notes[activeNoteIndex].content = action.payload.note

                return {...state, notes}
            }
            
            const note = notes.splice(activeNoteIndex, 1)[0]

            note.content = action.payload.note

            notes.unshift(note)

            return {...state, notes, activeNoteIndex: 0}
        }
        default:
            return state
    }
}
