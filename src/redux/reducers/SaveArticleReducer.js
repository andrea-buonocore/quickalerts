const InitialState = {
    saved: []
}


const SaveArticleReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'SAVE_ARTICLE':
            return {
                saved: [...state.saved, action.payload]
            }

        case 'REMOVE_ARTICLE':
            return {
                saved: state.saved.filter(article => article !== action.payload)
            }

        default: return state
    }
}

export default SaveArticleReducer;