<template>
    <div ref="card" :id="test" class="card rounded-t-[16px] rounded-b-[8px] bg-white" @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove">
        <!-- Hinh anh -->
        <div class="card-img rounded-[16px]">
            <div class="part-hidden " style="padding-top:35%"></div>
            <img class="img"
                src="https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_2_8bf6ed1d78/Rectangle_23_2_8bf6ed1d78.png"
                alt="">
            <div class="absolute top-[32px] left-[8px] z-10 text-white"><span class="text-[15px]">Vận chuyển
                    từ</span><br><span class="text-xl font-semibold">Đà Lạt</span></div>
        </div>
        <!-- Noi dung card -->
        <div class="card-text hover:bg-[#0096fa0d]">
            <div class="flex justify-between items-baseline">
                <h1 class="text-[20px] text-[#202124] font-[400]">Về TP. Hồ Chí Minh</h1>
                <h2 class="text-[16px] text-[#202124] font-[500] whitespace-nowrap">{{ (280000).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }) }}</h2>
            </div>
            <h5 class="text-[12px] text-[#757575]">310km - 8 giờ - 19/08/2023</h5>

            <!-- So sánh dịch vụ -->
            <div class="text-[12px] text-[#757575]">
                <!-- Xử lý if - else -->
                <span class="hover:text-[#0096fa] inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                        class="bi bi-plus rounded-[50%] border" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <span class="inline-flex pl-[4px]">So sánh</span>
                </span>

                <!-- <span class="hover:text-[#0096fa] inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-check rounded-[50%] border" viewBox="0 0 16 16">
                        <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                    <span class="inline-flex pl-[4px]">Đã thêm so sánh</span>
                </span> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// const card = ref(null)
const test = 'card'

const handleMouseMove = (event) => {
    // const card = document.getElementById(test);
    // card.style.transition = 'transform .1s ease';
    // const { clientX, clientY } = event;

    // const cardRect = card.getBoundingClientRect();
    // const cardWidth = card.offsetWidth;
    // const cardHeight = card.offsetHeight;

    // // Transform  
    // const mouseXs = event.clientX;
    // const mouseYs = event.clientY;

    // const mouseX = event.clientX - card.offsetLeft;
    // const mouseY = event.clientY - card.offsetTop;

    // const centerX = cardWidth / 2;
    // const centerY = cardHeight / 2;

    // const rotateX = (mouseY - centerY) / cardHeight * 10;
    // const rotateY = (mouseX - centerX) / cardWidth * 10;

    // const translateX = (mouseX - centerX) / cardWidth * 5;
    // const translateY = (mouseY - centerY) / cardHeight * 5;

    // const translateZ = -10; // Điều chỉnh giá trị theo nhu cầu
    // card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // // card.value.style.transform = `perspective(100000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
};

const handleMouseLeave = () => {
    // const card = document.getElementById('card');
    // card.style.transition = 'transform .5s ease';
    // card.style.transform = 'perspective(100000px)';
};
</script>

<style scoped>
/* Xu ly Animation cho card-skew, Github */
.card {
    color: #fff;
    margin: 8px;
    border: 1px solid #dadce0;
    width: 287.773px;
    /* height: 260.117px; */
    overflow: hidden;
    cursor: pointer;
    transition: transform .1s ease;
    /* transition: opacity 3s ease; */
}

.card:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Text animation */
.card-text {
    padding: 8px;
    overflow: hidden;
}

.card-img {
    display: block;
    overflow: hidden;
    position: relative;
}

.img {
    left: 0;
    min-height: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    position: absolute;
}

.part-hidden {
    visibility: hidden;
    width: 100%;
}

.rating {
    color: #fbbc04;
    fill: currentColor;
    flex-shrink: 0;
}
</style>