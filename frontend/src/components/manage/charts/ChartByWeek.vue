<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue';
import ChartData from '@/components/manage/charts/data-sales-revenue-by-week.js'
import { useAuth0 } from "@auth0/auth0-vue";
import { getOrders } from "@/services/order.service";
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import { vi } from 'date-fns/locale';
import isSameWeek from 'date-fns/isSameWeek';

import isMonday from 'date-fns/isMonday';
import isTuesday from 'date-fns/isTuesday';
import isWednesday from 'date-fns/isWednesday';
import isThursday from 'date-fns/isThursday';
import isFriday from 'date-fns/isFriday';
import isSaturday from 'date-fns/isSaturday';
import isSunday from 'date-fns/isSunday';

// get the token
const { getAccessTokenSilently } = useAuth0();

const chart = ref();

const mon = ref();
const tue = ref();
const wed = ref();
const thu = ref();
const fri = ref();
const sat = ref();
const sun = ref();

let dataDrop = ref({
    type: "line",
    data: {
        labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
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
                // fill: 'start'
            },
            {
                label: "Bar",
                type: "bar",
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
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
    // const ChartByWeek = new Chart(chart.value, dataDrop.value);
    getOrdersIdAxios();
})

const getOrdersIdAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getOrders(accessToken);

    if (data) {
        console.log(data)
        // Xử lý data
        let start = startOfWeek(new Date(), { weekStartsOn: 1 }, { locale: vi });
        // let end = endOfWeek(new Date(), { weekStartsOn: 1 }, { locale: vi });

        console.log(startOfWeek(new Date(), { weekStartsOn: 1 }, { locale: vi }));
        console.log(endOfWeek(new Date(), { weekStartsOn: 1 }, { locale: vi }));

        data.forEach(element => {
            if (isSameWeek(start, new Date(element.order_created), {
                weekStartsOn: 1
            }) && element.status_name === 'Hoàn thành') {
                // Xử lý từng ngày trong tuần
                console.log(new Date(element.order_created));
                if (isMonday(new Date(element.order_created))) {
                    console.log('2');
                    mon.value = element.total_amount;
                }
                else if (isTuesday(new Date(element.order_created))) {
                    console.log('3');
                    tue.value = element.total_amount;
                }

                else if (isWednesday(new Date(element.order_created))) {
                    console.log('4');
                    wed.value = element.total_amount;
                }

                else if (isThursday(new Date(element.order_created))) {
                    console.log('5');
                    thu.value = element.total_amount;
                }

                else if (isFriday(new Date(element.order_created))) {
                    console.log('6');
                    fri.value = element.total_amount;
                }

                else if (isSaturday(new Date(element.order_created))) {
                    console.log('7');
                    sat.value = element.total_amount;
                }

                else if (isSunday(new Date(element.order_created))) {
                    console.log('8');
                    sun.value = element.total_amount;
                    console.log(sun.value);
                }
            }
        });

        // Thêm data vào dataDrop
        dataDrop.value.data.datasets[0].data = [];
        dataDrop.value.data.datasets[1].data = [];
        for (let i = 0; i < 7; i++) {
            if (i === 0) {
                if (mon.value) {
                    dataDrop.value.data.datasets[0].data.push(mon.value);
                    dataDrop.value.data.datasets[1].data.push(mon.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }
            else if (i === 1) {
                if (tue.value) {
                    dataDrop.value.data.datasets[0].data.push(tue.value);
                    dataDrop.value.data.datasets[1].data.push(tue.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

            else if (i === 2) {
                if (wed.value) {
                    dataDrop.value.data.datasets[0].data.push(wed.value);
                    dataDrop.value.data.datasets[1].data.push(wed.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

            else if (i === 3) {
                if (thu.value) {
                    dataDrop.value.data.datasets[0].data.push(thu.value);
                    dataDrop.value.data.datasets[1].data.push(thu.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

            else if (i === 4) {
                if (fri.value) {
                    dataDrop.value.data.datasets[0].data.push(fri.value);
                    dataDrop.value.data.datasets[1].data.push(fri.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

            else if (i === 5) {
                if (sat.value) {
                    dataDrop.value.data.datasets[0].data.push(sat.value);
                    dataDrop.value.data.datasets[1].data.push(sat.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

            else {
                if (sun.value) {
                    dataDrop.value.data.datasets[0].data.push(sun.value);
                    dataDrop.value.data.datasets[1].data.push(sun.value);
                } else {
                    dataDrop.value.data.datasets[0].data.push(0);
                    dataDrop.value.data.datasets[1].data.push(0);
                }
            }

        }
        console.log(dataDrop.value.data.datasets[0]);

        const ChartByWeek = new Chart(chart.value, dataDrop.value);

    }

    if (error) {
        console.log(error)
    }
};

</script>