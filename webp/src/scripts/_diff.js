export function diff() {
    console.log('%c avcexyegonet ', 'background: #010101; color: #ededed');
    const gWindowWidth = window.innerWidth
    const gIsAdaptive = gWindowWidth < 1200

    function setVh() {
        document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
    }

    document.addEventListener('DOMContentLoaded', () => setVh())
    window.addEventListener('resize', () => setVh())

    const footerDate = document.getElementById('footerDate')

    if (footerDate) {
        let date = new Date()
        footerDate.innerHTML = `${date.getFullYear()}`
    }

    const footerLogo = document.getElementById('footerLogo')
    const banner = document.querySelector('.banner')

    if (footerLogo) {
        footerLogo.addEventListener('click', () => banner.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
}
