import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

// Thông tin về tỉnh vùng miền của Việt Nam để tính giá dịch vụ theo bảng giá của nhà cung cấp khi tạo dịch vụ
export const getLocationsForCreateService = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/location`,
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

export const getLocations = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/location`,
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

export const getLocationsByServicId = async (service_id) => {
    const config = {
        url: `${apiServerUrl}/api/location/service/${service_id}`,
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


export const createLocation = async (accessToken, LocationData) => {
    const config = {
        url: `${apiServerUrl}/api/location`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: LocationData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const updateLocation = async (accessToken, locationData, location_id) => {
    const config = {
        url: `${apiServerUrl}/api/location/${location_id}`,
        method: "PUT",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: locationData,
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