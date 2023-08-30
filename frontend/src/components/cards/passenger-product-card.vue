<template>
    <div ref="card" :id="test" class="card rounded-[8px]" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
        <!-- Hinh anh -->
        <div class="card-img">
            <div class="part-hidden" style="padding-top:56.03%"></div>
            <img class="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBtMSfTsvjJ5L4fXF_xEBDT7kNaMWj6Xfmk6bYWlsvcyXhMdEK71-_VNBLwqc6nvUKVrqRGPusY5fEGVMQgMrbw"
                alt="">
        </div>
        <!-- Noi dung card -->
        <div class="card-text">
            <h1 class="text-[20px] text-[#202124] font-[400]">TP. Hồ Chí Minh đến Hà Nội</h1>
            <h2 class="text-[16px] text-[#202124] font-[500] whitespace-nowrap">{{ (860000).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }) }}</h2>
            <h5 class="text-[12px] text-[#757575]">Một chiều / Phổ thông - Vietnam Airlines</h5>
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
    height: 260.117px;
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
    padding: 12px;
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
</style>