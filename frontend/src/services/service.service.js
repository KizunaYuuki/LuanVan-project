import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getServices = async () => {
    const config = {
        url: `${apiServerUrl}/api/service`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getInfoReviews = async () => {
    const config = {
        url: `${apiServerUrl}/api/service/reviews-info`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getServiceById = async (service_id) => {
    const config = {
        url: `${apiServerUrl}/api/service/${service_id}`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};


export const createService = async (accessToken, serviceData) => {
    const config = {
        url: `${apiServerUrl}/api/service`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: serviceData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const updateService = async (accessToken, serviceData, service_id) => {
    const config = {
        url: `${apiServerUrl}/api/service/${service_id}`,
        method: "PUT",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: serviceData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const deteleService = async (accessToken, service_id) => {
    const config = {
        url: `${apiServerUrl}/api/service/${service_id}`,
        method: "DELETE",
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