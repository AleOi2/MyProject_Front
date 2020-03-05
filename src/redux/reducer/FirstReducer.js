let initialState = {
    count:0
}

const firstReducer = (state = initialState, action) =>{
     
    switch (action.type) {
        case 'First':
            return ({
                ...state,
                count: state.count + 1
            })
        default:
            return state;
    }

}

export default firstReducer;