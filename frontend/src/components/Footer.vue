<template>
    <footer class="relative border-t-[1.5px] border-[#0f172a1a]">
        <div class="absolute inset-x-0 flex items-center justify-center -top-3">
            <div class="relative flex justify-center h-10 w-[9.17rem]">
                <div class="absolute w-full h-full inset-0 -top-[2px] backdrop-blur-sm u-bg-white rounded-full">
                    <p class="-m-1.5 p-1.5 text-[1rem] font-[700] tracking-[.125rem] text-[#0097f9] subpixel-antialiased">Moving Service</p>
                </div>
                <!-- <svg
                    width="135" height="90" viewBox="0 0 135 90" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="relative w-5 h-5 u-text-gray-200">
                    <title>Website Logo</title>
                    <path
                        d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z"
                        fill="#00DC82"></path>
                </svg> -->
            </div>
        </div>
        <div class="container pt-[2.5rem] pb-[16px] mx-auto">
            <div class="sm:relative flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <div class="flex flex-col-reverse items-center gap-3 sm:flex-row sm:w-40 md:w-60">
                    <!-- Dark mode -->
                    <!-- <input type="checkbox" hidden="" readonly="" name="theme"
                        style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                    <button class="app-toggle theme-select z-10 order-1 sm:order-none" size="sm" id="headlessui-switch-3"
                        role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state=""><span
                            style="transform: translateX(0px);"><span aria-hidden="true"
                                style="opacity: 0; transition-timing-function: ease-out; transition-duration: 0.1s;"><svg
                                    data-v-40670dad="" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="icon icon-on" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z">
                                    </path>
                                </svg></span><span aria-hidden="true"
                                style="opacity: 1; transition-timing-function: ease-in; transition-duration: 0.2s;"><svg
                                    data-v-40670dad="" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="icon icon-off" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z">
                                    </path>
                                </svg></span><span class="sr-only">Toggle theme</span></span>
                    </button> -->
                    <span class="text-sm u-text-gray-500">© 2023 Moving Service</span>
                </div>
                <ul class="flex flex-wrap justify-center text-sm gap-x-6 gap-y-2"><!--[-->
                    <li><a href="/support"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Vận chuyển</a>
                    </li>
                    <li><a href="/tracking"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Theo dõi</a>
                    </li>
                    <li><a href="/support" rel="noopener noreferrer"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Trợ giúp & Hỗ trợ</a>
                    </li>
                    <li><a href="/contact" rel="noopener noreferrer"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Liên hệ với chúng tôi</a>
                    </li><!--]-->
                </ul>
                <ul class="flex items-center justify-end gap-1.5 sm:-mr-0 sm:gap-3 z-10 sm:w-40 md:w-60">
                    <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-MowtcP !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Follow Nuxt on Twitter" data-v-d64ec27c=""><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon icon-leading" data-v-d64ec27c="" style="" width="1em" height="1em"
                                viewBox="0 0 24 24" data-v-40670dad="">
                                <path fill="currentColor"
                                    d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z">
                                </path>
                            </svg><span data-v-d64ec27c=""><!--[--><span class="sr-only">Follow Us on
                                    Twitter</span><!--]--></span><!----></a></li>
                    <li><a href="tel:+84332006710" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-lW04s6 !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Call Us" data-v-d64ec27c="">
                            <svg xmlns="http://www.w3.org/2000/svg" id="phone" width="1em" height="1em" version="1.1" viewBox="0 0 29 29" xml:space="preserve">
                                <path d="M5.661 23.339c4.882 4.882 12.796 4.882 17.678 0 4.882-4.882 4.882-12.796 0-17.678s-12.796-4.882-17.678 0C.78 10.543.78 18.457 5.661 23.339zm5.545-16.613l1.86 1.86c.372.372.451.947.193 1.406l-.699 1.241a.781.781 0 0 0 .129.937l4.141 4.141a.781.781 0 0 0 .937.128l1.241-.699a1.173 1.173 0 0 1 1.406.193l1.861 1.861a1.175 1.175 0 0 1 0 1.66l-.881.881a3.135 3.135 0 0 1-3.786.493l-.084-.048a24.54 24.54 0 0 1-8.868-8.681l-.423-.706a3.128 3.128 0 0 1 .469-3.823l.844-.844a1.173 1.173 0 0 1 1.66 0z"></path></svg>
                            <span data-v-d64ec27c=""><!--[--><span class="sr-only">Call Us</span><!--]--></span><!---->
                    </a></li>
                    <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-YXWsTw !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Follow Us on Facebook" data-v-d64ec27c="">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="1em" height="1em" viewBox="0 0 24 24" id="facebook">
                                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
                            <span data-v-d64ec27c=""><!--[--><span class="sr-only">Follow Us on Facebook</span><!--]--></span><!---->
                    </a></li>
                </ul>
            </div>
        </div>

        <!-- Dia chi -->
        <address class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
            <div
                class="text-center flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                <a href="/terms-of-use ">Điều khoản sử dụng</a>
                <div class="h-4 w-px bg-slate-500/20"></div><a href="/privacy-policy">Chính sách bảo mật</a>
            </div>
            <p class="mt-[16px] text-center text-sm leading-6 text-slate-500">
                Địa chỉ: Toà nhà XXX, Ngõ 15 XXX, Quận 1, Thành Phố Hồ Chí Minh - Email: cskh@movingservice.com.vn - Điện
                thoại liên hệ: 0332006710
            </p>
        </address>
    </footer>
</template>