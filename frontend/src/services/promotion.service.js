import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getPromotions = async () => {
    const config = {
        url: `${apiServerUrl}/api/promotion`,
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

export const getPromotionById = async (promotion_id) => {
    const config = {
        url: `${apiServerUrl}/api/promotion/${promotion_id}`,
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


export const createPromotion = async (accessToken, promotionData) => {
    const config = {
        url: `${apiServerUrl}/api/promotion`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: promotionData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const detelePromotion = async (accessToken, promotion_id) => {
    const config = {
        url: `${apiServerUrl}/api/promotion/${promotion_id}`,
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