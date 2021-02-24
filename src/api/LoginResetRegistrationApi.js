import { apiPost, apiPut } from './api';

export const submitPhoneNumber = (body) => {
    return apiPost('api/v1/sms/send', body)
};

export const verifyPhoneNumber = (body) => {
    return apiPost('api/v1/sms/verify', body)
};

export const signUpUser = (body) => {
    return apiPost('api/v1/signup/client', body)
};

export const submitEmail = (body) => {
    return apiPost('api/v1/users/forgot-password', body);
};


export const verifyForgotPassword = (body) => {
    return apiPost('api/v1/users/forgot-password/verify', body);
};

export const changePassword = (body) => {
    return apiPut('api/v1/users/forgot-password', body);
};