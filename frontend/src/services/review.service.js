import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getReviewsByServiceId = async (service_id) => {
    const config = {
        url: `${apiServerUrl}/api/review/service/${service_id}`,
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

export const getReviews = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/review`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getReviewById = async (accessToken, service_id) => {
    const config = {
        url: `${apiServerUrl}/api/review/${service_id}`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};


export const createReview = async (accessToken, reviewData) => {
    const config = {
        url: `${apiServerUrl}/api/review`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: reviewData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const updateReview = async (accessToken, reviewData, review_id) => {
    const config = {
        url: `${apiServerUrl}/api/review/${review_id}`,
        method: "PUT",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: reviewData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const deteleReview = async (accessToken, review_id) => {
    const config = {
        url: `${apiServerUrl}/api/review/${review_id}`,
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