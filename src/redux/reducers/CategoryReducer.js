const InitialState = {
    category: ''
}


const CategoryReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                category: action.payload
            }

        default: return state
    }
}

export default CategoryReducer;