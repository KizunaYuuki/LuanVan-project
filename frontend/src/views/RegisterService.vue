<template>
    <main>
        <section
            class="flex flex-col max-w-[calc(1280px-64px)] mx-auto my-[16px] min-h-[calc(100vh)]">

            <!-- Nav Steps -->
            <div class="bg-[#fff] rounded-[0.375rem]">
                <div class="mx-auto px-[2rem]">
                    <nav aria-label="Progress">
                        <ol role="list" class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                            <li class="relative flex flex-1">
                                <a href="#" class="flex w-full items-center">
                                    <span class="flex items-center py-[1rem] px-[1.5rem] font-[500]">
                                        <span
                                            class="flex items-center justify-center content-center bg-[#0096fa] w-[2.5rem] h-[2.5rem] rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
                                                fill="currentColor" aria-hidden="true" class="text-[#fff]">
                                                <path fill-rule="evenodd"
                                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-[16px]">Thông Tin Dịch Vụ</span>
                                    </span>
                                </a>
                                <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block" aria-hidden="true">
                                    <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                        preserveAspectRatio="none">
                                        <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                            </li>
                            <li class="relative flex flex-1">
                                <a href="#" class="flex items-center py-[1rem] px-[1.5rem]"
                                    aria-current="step">
                                    <span class="flex items-center text-[#0096fa] font-[500]">
                                        <span
                                            class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2.5rem] h-[2.5rem] rounded-full">
                                            <span class="">02</span>
                                        </span>
                                        <span class="ml-[16px]">Thanh Toán</span>
                                    </span>
                                </a>
                                <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block" aria-hidden="true">
                                    <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                        preserveAspectRatio="none">
                                        <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </div>
                            </li>
                            <li class="relative flex flex-1">
                                <a href="#" class=" flex items-center py-[1rem] px-[1.5rem]">
                                    <span class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                        <span
                                            class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2.5rem] h-[2.5rem] rounded-full">
                                            <span class="">03</span>
                                        </span>
                                        <span class="ml-[16px]">Hoàn Thành</span>
                                    </span>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <!-- Form Đăng ký dịch vụ -->
            <form action="POST">
                
            </form>
        </section>
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
</script>

<style scoped>
ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
}

</style>