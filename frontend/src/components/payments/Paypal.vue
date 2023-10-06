<template>
    <div v-if="USDToVND">
        <!-- <div v-if="!paidFor">
            <h1>Buy this Lamp - ${{ service.price }} OBO</h1>
        </div>

        <div v-if="paidFor">
            <h1>Noice, you bought a beautiful lamp!</h1>
        </div> -->

        <div style="width: 500px" ref="paypal"></div>
    </div>
    <!-- <div style="width: 500px" ref="paypal"></div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
const paypal = ref(null);
const USDToVND = ref();
const paidFor = ref(false);
const loaded = ref(false);


onMounted(async () => {
    // Load ty le ngoai le
    await axios
        .get(`http://localhost:6060/google-finance`, {
            // withCredentials: true
        })
        .then((response) => {
            const data = response.data;
            const exchangeRateRegex = /<div class="YMlKec fxKbKc">([\d.,]+)<\/div>/;
            const exchangeRateMatch = data.match(exchangeRateRegex);
            if (exchangeRateMatch) {
                const exchangeRate = exchangeRateMatch[1];
                USDToVND.value = parseFloat(exchangeRate, 10) * 1000;

                let script = document.createElement('script');
                script.setAttribute("data-namespace", "paypal_sdk");
                script.src =
                    "https://www.paypal.com/sdk/js?client-id=Af1NckO7mVTPI_VUoRGDxRhWQKwxkvFrbISLch5alNr06SslxwxiorKzaHNIxg8qGdPvwcWk6_-eerwW";

                // Tải button Paypal
                script.addEventListener('load', () => {
                    // loaded.value = true;
                    // let price = parseFloat(service.value.price / USDToVND.value).toFixed(2);
                    // changedPrice.value = price
                    paypal_sdk
                        .Buttons({
                            style: {
                                // layout: 'horizontal',
                                color: 'blue',
                                shape: 'rect',
                                size: 'responsive',
                                label: 'checkout',
                                tagline: false,
                            },
                            createOrder: (data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            // items: [{
                                            //     name: 'Tên dịch vụ',
                                            //     description: "Mô tả",
                                            //     quantity: 1,
                                            //     unit_amount: {
                                            //         currency_code: "USD",
                                            //         value: this.product.price,
                                            //     }
                                            // }],
                                            description: service.value.service_name,
                                            amount: {
                                                currency_code: "USD",
                                                value: price,
                                                // breakdown: {
                                                //     item_total: {
                                                //         currency_code: "USD",
                                                //         value: this.product.price
                                                //     }
                                                // }
                                            }
                                        }
                                    ]
                                });
                            },
                            onApprove: async (data, actions) => {
                                const result = await actions.order.capture();
                                paidFor.value = true;
                                createOrderAxios(order.value)
                                console.log(result);
                            },
                            onError: err => {
                                console.log(err);
                            }
                        })
                        .render(paypal.value)
                })
                document.body.appendChild(script);
            }
        })
    console.log(USDToVND.value);
})
</script>