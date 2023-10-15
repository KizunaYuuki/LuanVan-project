export const ChartData = {
    type: "line",
    data: {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        datasets: [
            {
                label: "2023",
                type: "line",
                data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514, 22, 10, 11, 2304],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
                borderWidth: 3,
                fill: 'start'
            },
            {
                label: "2022",
                type: "line",
                data: [0.166, 2.081, 3.003, 323, 954.792, 2985.886, 43.662, 51.514, 22, 10, 11, 204],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#f1754e",
                borderWidth: 3,
                fill: 'start'
            }
        ]
    },
    options: {
        responsive: true,
        lineTension:  0.4,
        scales: {
        },
        
    }
};

export default ChartData;