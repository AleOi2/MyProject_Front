let initialState = {
    count:0
}
const secondReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case 'Second':
            return ({
                ...state,
                count: state.count + 2
            })
        default:
            return state;
    }

}

export default secondReducer;