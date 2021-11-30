import './styles/index.scss'

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation'

import { diff } from './scripts/_diff.js'
import { initHeader } from './scripts/_header.js'
import { initMapInst } from './scripts/_map.js'
import SwiperSlider from './scripts/_swiper.js'


diff()
initHeader()
initMapInst()

document.addEventListener('DOMContentLoaded', () => {
    let sliderArr = document.querySelectorAll('.js-slider')

    sliderArr.forEach((slider, index) => {
        let options = {
            root: slider,
            index: index 
        }
        let sliderInst = new SwiperSlider(options)
        sliderInst.init()
    })
})
