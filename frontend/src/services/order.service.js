import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getOrders = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/order/`,
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

// Lấy doanh thu theo khoảng thời gian by created của order
export const getSales = async (accessToken, startDate, endDate) => {
    const config = {
        url: `${apiServerUrl}/api/order/sales?startDate=${startDate}&endDate=${endDate}`,
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

// Lấy đơn hàng theo khoảng thời gian by created của order với trạng thái đã đăng ký
export const getCompleteOrders = async (accessToken, startDate, endDate) => {
    const config = {
        url: `${apiServerUrl}/api/order/complete-order?startDate=${startDate}&endDate=${endDate}`,
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


// Lấy số đơn hàng đang trờ xác nhận
export const getWaitOrders = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/api/order/wait-order`,
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

export const getOrdersByUserId = async (accessToken, user_id) => {
    const config = {
        url: `${apiServerUrl}/api/order/user/${user_id}`,
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


export const createOrder = async (accessToken, orderData) => {
    const config = {
        url: `${apiServerUrl}/api/order`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: orderData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const cancelOrder = async (accessToken, orderData, order_id) => {
    const config = {
        url: `${apiServerUrl}/api/order/${order_id}`,
        method: "PUT",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        data: orderData,
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const deteleOrder = async (accessToken, order_id) => {
    const config = {
        url: `${apiServerUrl}/api/order/${order_id}`,
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