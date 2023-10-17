import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getPriceListsByServiceTypeId = async (accessToken, service_type_id) => {
    const config = {
        url: `${apiServerUrl}/api/price-list/service-type/${service_type_id}`,
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