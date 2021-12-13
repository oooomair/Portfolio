// navbar burger

$('.navbar__burger').on('click', function () {
    $('.navbar__burger').toggleClass('navbar__burger--open')
    $('.navbar__links--small').toggleClass('navbar__links--small--close')
    $('.navbar__logo').toggleClass('navbar__logo--blue')
})

$('html').on('click', '.navbar__links--small--close', function () {
    $('.navbar__links--small--close').removeClass('navbar__links--small--close')
    $('.navbar__burger').removeClass('navbar__burger--open')


})

// parallax effect

$('html').on('mousemove', function (e) {

    const layer = $('.home__parallax')
    const layer1 = $('.parallax')

    const speed = layer.attr('data-speed')
    const speed1 = layer1.attr('data-speed')


    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100

    const x1 = (window.innerWidth - e.pageX*speed1)/100
    const y1 = (window.innerHeight - e.pageY*speed1)/100

    layer.css('transform', `translateX(${x}px) translateY(${y}px)`) 
    layer1.css('transform', `translateX(${x1}px) translateY(${y1}px)`) 

})

// navbar scroll

let lastTopScroll = 0;
window.addEventListener('scroll', function () {

    let curScroll = window.pageYOffset;

    if (curScroll > lastTopScroll) {
        $('.navbar').css('background-color', '#edf5e1');
        $('.navbar').css('top', '-30vh');
    }
    else if (curScroll <= 0) {
        $('.navbar').css('background-color', 'rgba(251, 255, 255, 0.055)')
        $('.navbar').css('top', '0');
        $('.navbar__logo').css('color', '#5cdb95');
    }
    else if (curScroll < lastTopScroll) {
        $('.navbar').css('top', '0');
        $('.navbar__logo').css('color', '#05386b');
    }

    lastTopScroll = curScroll
    })

// project effect  

// 1

$('#project-1-img').on('click', function () {
    if (window.matchMedia("(min-width: 600px)")) {
    $('#project-1-img').removeClass('projects__img--unclick-for')
    $('#project-1-img').addClass('projects__img--click-for')
    $('.projects__img--after').css('visibility', 'hidden')
    setTimeout(() => {
        $('#project-1-desc').css('display', 'flex')
        $('#project-img-res-1').css('display', 'block')
        $('#project-1-img').css('display', 'none')
    }, 450); 
    setTimeout(() => {
        $('#project-1-desc').css('opacity', '1')
        $('#project-1-desc').css('transform', 'translate(0, 0)')
        $('#project-img-res-1').css('opacity', '1')
        $('#project-img-res-1').css('transform', 'translate(0, 0)')
    }, 500);
}})

$('#show-less-1').on('click', function () {
    if (window.matchMedia("(min-width: 600px)")) {
    $('#project-img-res-1').css('opacity', '0')
    $('#project-img-res-1').css('transform', 'translate(60px, 0)')
    $('#project-1-desc').css('opacity', '0')
    $('#project-1-desc').css('transform', 'translate(60px, 0)')
    $('#project-1-img').removeClass('projects__img--click-for')
    setTimeout(() => {
        $('#project-img-res-1').css('transform', 'translate(-60px, 0)')
        $('#project-img-res-1').css('display', 'none')
        $('#project-1-desc').css('display', 'none')
        $('#project-1-desc').css('transform', 'translate(-60px, 0)')
    }, 650); 
    setTimeout(() => {
        $('#project-1-img').css('display', 'block')
        $('#project-1-img').addClass('projects__img--unclick-for')
    }, 650); 
}})

// 2

$('#project-2-img').on('click', function () {
    if (window.matchMedia("(min-width: 600px)")) {
    $('#project-2-img').removeClass('projects__img--unclick-back')
    $('#project-2-img').addClass('projects__img--click-back')
    $('.projects__img--after').css('visibility', 'hidden')
    setTimeout(() => {
        $('#project-2-desc').css('display', 'flex')
        $('#project-img-res-2').css('display', 'block')
        $('#project-2-img').css('display', 'none')

    }, 450); 
    setTimeout(() => {
        $('#project-2-desc').css('opacity', '1')
        $('#project-2-desc').css('transform', 'translate(0, 0)')
        $('#project-img-res-2').css('opacity', '1')
        $('#project-img-res-2').css('transform', 'translate(0, 0)')
    }, 500);
}})

$('#show-less-2').on('click', function () {
    if (window.matchMedia("(min-width: 600px)")) {
    $('#project-img-res-2').css('opacity', '0')
    $('#project-img-res-2').css('transform', 'translate(-60px, 0)')
    $('#project-2-desc').css('opacity', '0')
    $('#project-2-desc').css('transform', 'translate(-60px, 0)')
    $('#project-2-img').removeClass('projects__img--click-back')
    setTimeout(() => {
        $('#project-img-res-2').css('transform', 'translate(60px, 0)')
        $('#project-img-res-2').css('display', 'none')
        $('#project-2-desc').css('display', 'none')
        $('#project-2-desc').css('transform', 'translate(60px, 0)')
        $('#project-2-img').css('display', 'block')
        $('#project-2-img').addClass('projects__img--unclick-back')
    }, 650); 
}})