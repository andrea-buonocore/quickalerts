const InitialState = {
    country: ''
}


const CountryReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'CHANGE_COUNTRY':
            return {
                country: action.payload
            }

        default: return state
    }
}

export default CountryReducer;