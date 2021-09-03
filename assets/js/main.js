$('.topbar-categories').click(function() {
    $(this).find('.ti-angle-down').toggleClass('active-arrow-categories');
    $(this).find('.nav-topbar-categories').toggleClass('active-categories');
})

$('.btn-nav-categories').click(function() {
    $(this).find('.ti-angle-down').toggleClass('active-arrow-categories');
    $(this).siblings('.nav-detail-categories').toggleClass('active-nav-detail');
})

$('.btn-topbar-list').click(function() {
    $(this).siblings('.form-topbar-list').toggleClass('active-topbar-list');
})

$('.close-topbar-list').click(function() {
    $('.form-topbar-list').removeClass('active-topbar-list');
})

$('.nav-topbar-categories').find('.nav-link').click(function() {
    $('.select-categories-focus').text($(this).text());
})

$(window).click(function(e) {
    if(!$(e.target).is('.btn-select-categories, .btn-select-categories > span'+ 
    ', .ti-angle-down')) {
        $('.nav-topbar-categories').removeClass('active-categories');
    }
    // console.log($(e.target)[0].nodeName.toLowerCase());
    if(!$(e.target).is('.btn-nav-categories, .btn-nav-categories h3, .ti-align-left, .ti-angle-down')
    && !$(e.target).is(`.nav-detail-categories ${$(e.target)[0].nodeName.toLowerCase()}`)) {
        $('.nav-detail-categories').removeClass('active-nav-detail');
        $('.ti-angle-down').removeClass('active-arrow-categories');
    }
    if(!$(e.target).is('.topbar-cart-amount, .ti-shopping-cart, .btn-topbar-cart, .form-cart')
    && !$(e.target).is(`.form-cart ${$(e.target)[0].nodeName.toLowerCase()}`)) {
        $('.form-cart').css('display', 'none');
        $('.form-cart').removeClass('active-block');
    }
    if(!$(e.target).is('.btn-topbar-user, .ti-user, .form-login')
    && !$(e.target).is(`.form-login ${$(e.target)[0].nodeName.toLowerCase()}`)) {
        $('.form-login').css('display', 'none');
        $('.form-login').removeClass('active-block');
    }
})

// Slides
$('.hero-slides-wrap').slick({
    prevArrow: $('.btn-prev-slide'),
    nextArrow: $('.btn-next-slide'),
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.popular-slides').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false
});

$('.btn-topbar-cart, .btn-topbar-user').click(function() {
    // $(this).siblings('.form-topbar').fadeToggle(function() {
    $(this).siblings('.form-topbar').fadeToggle();
        $(this).siblings('.form-topbar').toggleClass('active-block');
    // })
})

$('.hottrend-products').slick({
    dots: true,
    prevArrow: $('.btn-back-trend'),
    nextArrow: $('.btn-next-trend'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
});

$('.feedback-products').slick({
    dots: true,
    prevArrow: $('.btn-back-feedback'),
    nextArrow: $('.btn-next-feedback'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
});

$('.btn-scroll-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
})

window.addEventListener('scroll', function() {
  $('.header-topbar').addClass('shadow');
  if(document.documentElement.scrollTop == 0) {
      $('.header-topbar').removeClass('shadow');
  }  
  if (document.documentElement.scrollTop > 300) {
    $('.btn-scroll-top').addClass('scrolled');
  }  else {
    $('.btn-scroll-top').removeClass('scrolled');
  } 
})

$('.accordion-btn').click(function() {
    if($(this).hasClass("collapsed")) {
        $(this).find('i').attr('class', 'ti-angle-down');
    } else {
        $(this).find('i').attr('class', 'ti-angle-up');
    }
})

if(document.getElementById('shop-page')) {
    $('.filter-price-slider').slider({max: 1500000
        ,step: 10000, range: true, values:[50000, 1500000], change: function() {
        let currentRangePrice = $('.filter-price-slider').slider('option', 'values');
        $('.filter-price-range').text(`${currentRangePrice[0]}đ - ${currentRangePrice[1]}đ`);
    }});
}