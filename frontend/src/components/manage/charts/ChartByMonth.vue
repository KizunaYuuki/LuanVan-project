<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { getCompleteOrders } from "@/services/order.service";

import format from 'date-fns/format'
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
// get the token
const { getAccessTokenSilently } = useAuth0();

const chart = ref();

let dataDrop = ref({
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Line",
                type: "line",
                data: [],
                backgroundColor: '#0096fa',
                borderColor: '#0096fa',
                pointBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 3,
            },
            {
                label: "Bar",
                type: "bar",
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132, 0.1)',
                ],
                pointBackgroundColor: [
                    'rgb(255, 99, 132, 0.5)',
                ],
                borderWidth: 3,
                fill: 'start'
            },
        ]
    },
    options: {
        responsive: true,
        lineTension: 0.4,
        scales: {
        },
    }
})

onMounted(() => {
    getCompleteOrdersAxios(format(startOfMonth(new Date()), 'yyyy-MM-dd'), format(endOfMonth(new Date()), 'yyyy-MM-dd'));
    // console.log(format(startOfMonth(new Date()), 'yyyy-MM-dd'));
    // console.log(format(endOfMonth(new Date()), 'yyyy-MM-dd'));
})

const getCompleteOrdersAxios = async (startDate, endDate) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getCompleteOrders(accessToken, startDate, endDate);

    if (data) {
        // console.log(data)
        // Xử lý data
        dataDrop.value.data.labels = [];
        dataDrop.value.data.datasets[0].data = [];
        dataDrop.value.data.datasets[1].data = [];

        data.forEach(element => {
            // console.log(format(new Date(element.created), 'yyyy/MM/dd'));
            let temp = dataDrop.value.data.labels[dataDrop.value.data.labels.length - 1];
            if (temp != undefined && temp === format(new Date(element.created), 'yyyy/MM/dd')) {
                // edit
                let total_amount = dataDrop.value.data.datasets[0].data.pop();
                dataDrop.value.data.datasets[1].data.pop();

                // add
                dataDrop.value.data.datasets[0].data.push(element.total_amount + total_amount);
                dataDrop.value.data.datasets[1].data.push(element.total_amount + total_amount);
            } else {
                dataDrop.value.data.labels.push(format(new Date(element.created), 'yyyy/MM/dd'));
                dataDrop.value.data.datasets[0].data.push(element.total_amount);
                dataDrop.value.data.datasets[1].data.push(element.total_amount);
            }

        });
        // console.log(dataDrop.value);
        // render chart
        const ChartByWeek = new Chart(chart.value, dataDrop.value);
    }

    if (error) {
        // console.log(error)
    }
};

</script>