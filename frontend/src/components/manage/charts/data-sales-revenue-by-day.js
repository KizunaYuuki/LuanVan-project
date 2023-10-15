export const ChartData = {
    type: "line",
    data: {
        labels: ["Tháng 1"],
        datasets: [
            {
                label: "2023",
                type: "line",
                data: [2323],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
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