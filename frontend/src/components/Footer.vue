<template>
    <footer class="relative border-t">
        <div class="absolute inset-x-0 flex items-center justify-center -top-3">
            <div class="relative flex justify-center h-10 w-14">
                <div class="absolute w-full h-full inset-0 -top-[2px] backdrop-blur-sm u-bg-white rounded-full"></div><svg
                    width="135" height="90" viewBox="0 0 135 90" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="relative w-5 h-5 u-text-gray-200">
                    <title>Nuxt logo</title>
                    <path
                        d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z"
                        fill="#00DC82"></path>
                </svg>
            </div>
        </div>
        <div class="container py-6 mx-auto">
            <div class="sm:relative flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <div class="flex flex-col-reverse items-center gap-3 sm:flex-row sm:w-40 md:w-60">
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
                    <li><a href="/enterprise/support"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Enterprise</a>
                    </li>
                    <li><a href="/design-kit"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Design Kit</a>
                    </li>
                    <li><a href="https://nuxtlabs.com" rel="noopener noreferrer"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">NuxtLabs</a>
                    </li>
                    <li><a href="https://nuxt.studio" rel="noopener noreferrer"
                            class="font-medium u-text-gray-500 hover:u-text-gray-900 focus:u-text-gray-900">Nuxt Studio</a>
                    </li><!--]-->
                </ul>
                <ul class="flex items-center justify-end gap-1 -mr-4 sm:-mr-0 sm:gap-3 z-10 sm:w-40 md:w-60">
                    <li><a href="https://twitter.com/nuxt_js" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-MowtcP !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Follow Nuxt on Twitter" data-v-d64ec27c=""><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon icon-leading" data-v-d64ec27c="" style="" width="1em" height="1em"
                                viewBox="0 0 24 24" data-v-40670dad="">
                                <path fill="currentColor"
                                    d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z">
                                </path>
                            </svg><span data-v-d64ec27c=""><!--[--><span class="sr-only">Follow Nuxt on
                                    Twitter</span><!--]--></span><!----></a></li>
                    <li><a href="https://discord.com/invite/ps2h6QT" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-lW04s6 !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Join Nuxt community on Discord" data-v-d64ec27c=""><svg
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon icon-leading" data-v-d64ec27c="" style=""
                                width="1em" height="1em" viewBox="0 0 640 512" data-v-40670dad="">
                                <path fill="currentColor"
                                    d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z">
                                </path>
                            </svg><span data-v-d64ec27c=""><!--[--><span class="sr-only">Join Nuxt community on
                                    Discord</span><!--]--></span><!----></a></li>
                    <li><a href="https://github.com/nuxt/nuxt" rel="noopener noreferrer" target="_blank"
                            class="app-button pv-WjEgmP pc-YXWsTw !p-0 u-text-gray-900 focus-visible:ring-2"
                            title="Go to Nuxt Github repo" data-v-d64ec27c=""><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon icon-leading" data-v-d64ec27c="" style="" width="1em" height="1em"
                                viewBox="0 0 24 24" data-v-40670dad="">
                                <path fill="currentColor"
                                    d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z">
                                </path>
                            </svg><span data-v-d64ec27c=""><!--[--><span class="sr-only">Go to Nuxt Github
                                    repo</span><!--]--></span><!----></a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>