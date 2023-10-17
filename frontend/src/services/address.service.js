import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

// Thông tin về tỉnh vùng miền của Việt Nam để đăng ký đơn hàng
export const getAddressForCreateOrder = async () => {
    const config = {
        url: `${apiServerUrl}/address`,
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

export const getAllAddress = async () => {
    const config = {
        url: `${apiServerUrl}/api/address`,
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

export const getAddressById = async (id) => {
    const config = {
        url: `${apiServerUrl}/api/address/${id}`,
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


export const createAddress = async (accessToken, addressData) => {
    const config = {
        url: `${apiServerUrl}/api/address`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: addressData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const updateAddress = async (accessToken, serviceData, service_id) => {
    const config = {
        url: `${apiServerUrl}/api/address/${service_id}`,
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

export const deteleAddress = async (accessToken, service_id) => {
    const config = {
        url: `${apiServerUrl}/api/address/${service_id}`,
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