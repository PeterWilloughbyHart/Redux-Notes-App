// Initial State. Before Action Creators tell the Reducer 
// what to update the state (data) to.

const initState = {
    todoColor: '#f8da79',
    todo: {},
    todos: [
        {todo: "Write your first todo",  color:'#f8da79', completed: false}
    ]
}

// todoReducer, the Reducer that updates todo related state (data). The Reducer 
// checks the action.type, and returns the appropriate state.

const todoReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'PICK_COLOR':
            return {...state, todoColor: payload}
        case 'NEW_TODO':
            console.log(payload)
            return {...state, todo: {todo: payload.todo, color: state.todoColor, completed: payload.completed}};
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, state.todo] };
        case 'REMOVE_TODO':
            return {
                    ...state, todos: state.todos.filter(element => element !== state.todos[payload])
            };
        case 'COMPLETE':
            return { 
                ...state, todos: state.todos.map((element, index) => {
            return index === payload ? {...element, completed: !element.completed} : element
            })}
        default: 
            return state;
    }
};

export default todoReducer;

