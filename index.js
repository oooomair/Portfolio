$('.navbar__burger').on('click', function () {
    $('.navbar__burger').toggleClass('navbar__burger--open')
    $('.navbar__links--small').toggleClass('navbar__links--small--close')
    $('.navbar__logo').toggleClass('navbar__logo--blue')
})

$('html').on('mousemove', function (e) {

    const layer = $('.home__parallax')

    const speed = layer.attr('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/200
    const y = (window.innerHeight - e.pageY*speed)/200

    layer.css('transform', `translateX(${x}px) translateY(${y}px)`) 
})

let lastTopScroll = 0;
window.addEventListener('scroll', function () {

    let top = 0;
    let curScroll = window.pageYOffset;

    if (curScroll > lastTopScroll) {
        $('.navbar').css('background-color', '#fef5ed');
        $('.navbar').css('top', '-30vh');
    }
    else if (top === curScroll) {
        $('.navbar').css('background-color', 'rgba(251, 255, 255, 0.055)')
        $('.navbar').css('top', '0');
    }
    else if (curScroll < lastTopScroll) {
        $('.navbar').css('top', '0');
    }

    lastTopScroll = curScroll
    })

