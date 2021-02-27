import { apiPost, apiPut } from './api';
import uuidGenerator  from '../utils/uuidGenerator'
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

export const signInByEmail = (body) => {
    const browserName = navigator.sayswho.split(' ')[0];
    const browserVersion = navigator.sayswho.split(' ')[1];

    const device = {
            appType: "CLIENT",
            name: browserName,
            type: "WEB",
            uniqueId: uuidGenerator(),
            version: browserVersion
    };

    return apiPost('api/v1/signin/email', {device, ...body});
};