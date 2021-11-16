function initMap(){

    let zoom = window.innerWidth >= 1200 ? 16 : 15

    const mapInst = new ymaps.Map("map", {
        center: [55.961490, 38.037589],
        zoom: zoom,
        controls: []
    })

    const placemark = new ymaps.Placemark([55.961490, 38.037589], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/media/map.png',
        iconImageSize: [45, 45],
        iconImageOffset: [-10, -40]
    });

    mapInst.geoObjects.add(placemark);
}

document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map')

    if(map) {
        ymaps.ready(initMap); 
    }
})
