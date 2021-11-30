// core version + navigation modules:
import Swiper, { Navigation } from 'swiper'

// configure Swiper to use modules
Swiper.use([Navigation])

export default class SwiperSlider {
    constructor(opts) {
        this.root = opts.root 
        this.index = opts.index

        this.slidesCount = this.root.querySelectorAll('.swiper-slide').length
        this.textBlocksArr = this.root.querySelectorAll('.services__text')

        this.slider = undefined
        this.sliderClassName = undefined
    }

    init = () => {
        this.addSpecSelectors();

        let options = {
            slidesPerView: 1,
            loop: false,
            autoplay: false,
            spaceBetween: 0,
            lazy: {
                loadPrevNext: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                },
                1199: {
                    slidesPerView: 1,
                }
            },
            on: {
                activeIndexChange: () => {
                  this.toggleDescription()
                },
            }
        };


        this.slider = new Swiper(`.${this.sliderClassName}`, options);
    }

    toggleDescription() {
        for(let text of this.textBlocksArr) {
            text.style.opacity = 0
        }

        if(this.slider) {
          this.textBlocksArr[this.slider.activeIndex].style.opacity = 1
        }
    }

    addSpecSelectors = () => {
        this.sliderClassName = `swiper-container-${this.index}`;
        this.root.querySelector('.swiper-container').classList.add(this.sliderClassName);
    }
}
