import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getUsers = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/user/`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getUsersByAuth0Api = async (accessToken) => {
    const config = {
        // url: `${apiServerUrl}/api/user/`,
        url: 'https://freight-service.us.auth0.com/api/v2/users/auth0%7C653672c974bf5dc6a211da67',
        method: "GET",
        maxBodyLength: Infinity,
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getQuantityUser = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/user/quantity`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getUserByEmail = async (accessToken, email) => {
    const config = {
        url: `${apiServerUrl}/api/user/email`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: email
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const createUser = async (accessToken, userData) => {
    const config = {
        url: `${apiServerUrl}/api/user`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: userData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};