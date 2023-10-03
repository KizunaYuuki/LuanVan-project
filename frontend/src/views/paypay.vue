<template>
    <div v-if="USDToVND">
        <div v-if="!paidFor">
            <h1>Buy this Lamp - ${{ product.price }} OBO</h1>

            <p>{{ product.description }}</p>

        </div>

        <div v-if="paidFor">
            <h1>Noice, you bought a beautiful lamp!</h1>
        </div>

        <div v-if="USDToVND" style="width: 200px" ref="paypal"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "HelloWorld",

    data: function () {
        return {
            USDToVND: undefined,
            loaded: false,
            paidFor: false,
            product: {
                price: 772227.77,
                description: "leg lamp from that one movie",
                img: "./assets/lamp.jpg"
            }
        };
    },
    mounted: async function () {
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
                    this.USDToVND = parseFloat(exchangeRate, 10) * 1000;
                }
                // console.log(JSON.stringify(response.data));
            })
        console.log(this.USDToVND);

        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AQKDZ7Sr1AS-DGFMAHFDd3m8BLPDuCL8v8zjU9iesZO2H0zk8g2Dh1D-9gO-Uq3wNmIIBuxKfqJ5ADCT";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    methods: {
        setLoaded: function () {
            this.loaded = true;
            this.product.price = parseFloat(this.product.price / this.USDToVND).toFixed(2);
            window.paypal
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
                                    description: this.product.description,
                                    amount: {
                                        currency_code: "USD",
                                        value: this.product.price,
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
                        const order = await actions.order.capture();
                        this.paidFor = true;
                        console.log(order);
                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    }
};
</script>