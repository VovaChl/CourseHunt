// let header = document.querySelector('#header');
// let headerHeight = header.offsetHeight;
// let windowHeight = document.documentElement.clientHeight;

// function onScroll (e) {

//     let pos = window.pageYOffset;

//     if (pos > headerHeight + 100) {
//         // Set position fixed header
//         header.style.position = 'fixed';
//         header.style.top = '-75px';
//         header.style.backgroundColor = 'black';
//     }

//     if (pos > windowHeight) {
//         header.style.top = '0';
//         header.style.transition = 'top .3s ease-out';
//     }

//     if (pos < headerHeight + 100) {
//         header.style.position = 'absolute';
//         header.style.top = '-0';
//         header.style.backgroundColor = 'transparent';
//         header.style.transition = 'none';
//     }
// }

// window.addEventListener('scroll', onScroll);
// window.addEventListener('load', onScroll);

const header = $('#header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

function onScroll (e) {

    let pos = $(window).scrollTop();

    if (pos > headerHeight + 100) {
        header.css({
            'position' : 'fixed',
            'top' : '-75px',
            'background-color' : 'black',
        })
    }

    if (pos > windowHeight) {
        header.css({
            'top':'0',
            'transition': 'top .3s ease-out',
        })
     }

     if (pos < headerHeight + 100) { 
        header.css({
            'position' : 'absolute',
            'top' : '0',
            'background-color' : 'transparent', 
            'transition': 'none',
        })
    }
}

$(window).on('scroll', onScroll);
$(window).on('load', onScroll);


// Scroll to element from menu
const scrollBtn = $('[data-scroll]');

function onClick(e) {
    e.preventDefault();

    let target = $(this).attr('data-scroll');
    let dist = $(target).offset().top;

    if (target == '.about-studio') {
        // fixes header transition
        dist += 3;
    }
    
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
}

scrollBtn.on('click', onClick);