import { apiPost } from './api';

export const submitPhoneNumber = (body) => {
    return apiPost('api/v1/sms/send', body)
};

export const verifyPhoneNumber = (body) => {
    return apiPost('api/v1/sms/verify', body)
};

export const signUpUser = (body) => {
    return apiPost('api/v1/signup/client', body)
};