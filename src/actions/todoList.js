// Action Types

export const PICK_COLOR = 'PICK_COLOR';
export const NEW_TODO = 'NEW_TODO';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE = 'COMPLETE';

// Action Creators 

export function pickColor(payload){
    return {
        type: PICK_COLOR,
        payload
    }
}

export function newTodo(payload) {
    return {
        type: NEW_TODO,
        payload
    }
}

export function addTodo() {
    return {
        type: ADD_TODO,
    }
}

export function removeTodo(payload) {
    return {
        type: REMOVE_TODO,
        payload
    }
}

export function completeTodo(payload) {
    return {
        type: COMPLETE,
        payload
    }
}
