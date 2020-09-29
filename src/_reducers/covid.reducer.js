import { covidConstants } from '../_constants';

export function covid(state = {}, action) {
    switch (action.type) {
        case covidConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case covidConstants.GETALL_SUCCESS:
            return {
                items: action.data
            };
        case covidConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}