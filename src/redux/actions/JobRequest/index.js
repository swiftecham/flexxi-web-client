import { UPDATE_SELECTED_SERVICES } from '../../ActionTypes';

const updateSelectedServices = (selectedServices) => ({
    type: UPDATE_SELECTED_SERVICES,
    selectedServices
});


export {
    updateSelectedServices,
};