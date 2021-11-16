document.addEventListener('DOMContentLoaded', () => {
    function startMove() {

        if(!gIsAdaptive) {
            document.querySelector('video').play();
        }

        TweenMax.to(".overlay", 2, {
            delay: 1,
            top: "-100%",
            ease: Expo.easeInOut
        })
        TweenMax.to(".overlay__title", 2, {
            opacity: 0,
            y: -60,
            ease: Expo.easeInOut
        })

        /* menu__title */
        TweenMax.from(".menu__title", 1, {
            delay: 3,
            opacity: 0,
            y: -100,
            ease: Expo.easeInOut
        })

        /* menu__list li */
        TweenMax.staggerFrom(".menu__list li", 1, {
            delay: 3.2,
            opacity: 0,
            x: -100,
            ease: Expo.easeInOut
        }, 0.08)

        /* left-block-bottom */
        TweenMax.from(".left-block-bottom", 1, {
            delay: 3.5,
            opacity: 0,
            y: 200,
            ease: Expo.easeInOut
        })

        if (gIsAdaptive) {
            return;
        }

        /* content-block */
        rightBlockTop()

        /* right-block */
        TweenMax.from(".right-block", 1, {
            delay: 5,
            opacity: 0,
            y: 200,
            ease: Expo.easeInOut
        })

        /* crack */
        TweenMax.from(".crack", 1, {
            delay: 3.5,
            opacity: 0,
            ease: Expo.easeInOut
        })

        /* right-block-bottom */
        TweenMax.staggerFrom(".right-block-bottom li", 1, {
            delay: 3,
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut
        }, 0.08)
    }
});
