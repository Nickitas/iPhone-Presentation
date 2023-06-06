import gsap from 'gsap'

export const scrollAnimation = (position, target, isMobileOrTablet, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: !isMobileOrTablet ? -3.38 : -7.0, 
        y: !isMobileOrTablet ?-10.74 : -12.2, 
        z: !isMobileOrTablet ? -5.93 : -6.0, 
        scrollTrigger: {
            trigger: '#sound', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
        onUpdate
    })
    .to(target, {
        x: !isMobileOrTablet ? 1.52 : 0.7, 
        y: !isMobileOrTablet ? 0.77: 1.9, 
        z: !isMobileOrTablet ? -1.08 : 0.7, 
        scrollTrigger: {
            trigger: '#sound', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })
    .to('#jumbotron', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#sound', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })
    .to('#sound', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#sound', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })

    .to(position, {
        x: !isMobileOrTablet ? 1.56 : 9.36, 
        y: !isMobileOrTablet ? 5.0 : 10.95, 
        z: !isMobileOrTablet ? 0.01 : 0.09, 
        scrollTrigger: {
            trigger: '#display', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
        onUpdate
    })
    .to(target, {
        x: !isMobileOrTablet ? -0.55 : -1.62, 
        y: !isMobileOrTablet ? 0.32 : 0.02, 
        z: !isMobileOrTablet ? 0.0 : -0.06, 
        scrollTrigger: {
            trigger: '#display', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })
    .to('#jumbotron', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#sound', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })
    .to('#display', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#display', 
            start: 'top bottom', 
            end: 'top top',
            scrub: 2, 
            immediateRender: false
        }, 
    })
}