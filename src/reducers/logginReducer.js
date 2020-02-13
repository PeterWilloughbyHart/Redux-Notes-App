const initState = {
    loggedIn: false
}

const logginReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state, loggedIn: true
            };
        default: 
            return state
    };
};

export default logginReducer;