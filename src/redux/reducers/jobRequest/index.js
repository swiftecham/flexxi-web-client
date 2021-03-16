import { UPDATE_SELECTED_SERVICES } from '../../ActionTypes';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case UPDATE_SELECTED_SERVICES:
            return {
                ...state,
                selectedServices:action.selectedServices
            };
        case 'd':  return {};
        default: return {...state, selectedServices:[]}
    }
}