// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default function swiperSlider() {
    // init Swiper:
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        initialSlide: 2,
        spaceBetween: 20,
        centeredSlides: true,

        navigation: {
            nextEl: "#button-next",
            prevEl: "#button-prev",
        },

        mousewheel: true,
        keyboard: true,

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

