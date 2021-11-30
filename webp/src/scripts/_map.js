function initMap(){

    let zoom = window.innerWidth >= 1200 ? 17 : 16
    const mapImage = require('../images/media/map.png')

    const mapInst = new ymaps.Map("map", {
        center: [55.904942, 37.984893],
        zoom: zoom,
        controls: []
    })

    const placemark = new ymaps.Placemark([55.904942, 37.984893], {}, {
        iconLayout: 'default#image',
        iconImageHref: mapImage,
        iconImageSize: [90, 90],
        iconImageOffset: [-15, -75]
    });

    mapInst.geoObjects.add(placemark);
}

export function initMapInst() {
    document.addEventListener('DOMContentLoaded', () => {
        const map = document.getElementById('map')
    
        if(map) {
            ymaps.ready(initMap); 
        }
    })
}
