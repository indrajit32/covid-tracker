import { covidConstants } from '../_constants';

export function country(state = {}, action) {
    switch (action.type) {
        case covidConstants.GETALL_COUNTRIES_REQUEST:
            return {
                loading: true
            };
        case covidConstants.GETALL_COUNTRIES_SUCCESS:
            return {
                items: action.data
            };
        case covidConstants.GETALL_COUNTRIES_FAILURE:
            return {
                error: action.error
            };
        case covidConstants.SET_REQUESTED_COUNTRY:
            return {
                ...state, setcountry: action.countrycode
            }
        default:
            return state
    }
}