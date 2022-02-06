$(document).ready(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 156) {
          $('header').addClass('menu-fixed');
        }
        if ($(window).scrollTop() < 156) {
          $('header').removeClass('menu-fixed');
        }
    });

    $(document)
        .off("click", "#search-toggle")
        .on("click", "#search-toggle", function (e) {
            e.stopPropagation();
            $(".search-innr").toggleClass("visible");
            $("header").removeClass("show");
              $("body").removeClass("ml-hidden");
    });
    if ($(".menu-toggle").length > 0) {
        $(document)
          .off("click", ".menu-toggle")
          .on("click", ".menu-toggle", function (e) {
            e.stopPropagation();
            $("body").toggleClass("ml-hidden");
            $("header").toggleClass("show");
            $(".search-innr").removeClass("visible");
          });
        $(document).click(function (e) {
          if (!$(e.target).is(".menu-toggle, header .bottom, header .bottom * ")) {
            if ($("header .bottom").is(":visible")) {
              $("header").removeClass("show");
              $("body").removeClass("ml-hidden");
            }
          }
        });
    }
    $(document)
        .off("click", ".close-nav")
        .on("click", ".close-nav", function (e) {
            e.stopPropagation();
            $("header").removeClass("show");
            $("body").removeClass("ml-hidden");
    });
    $(document)
        .off("click", ".search-close-btn")
        .on("click", ".search-close-btn", function (e) {
            e.stopPropagation();
            $(".search-innr").removeClass("visible");
    });

    function setSliderSss() {
        function getViewport() {
            var headerContainer = $('header').height();
            $('header').get(0).style.setProperty("--height", headerContainer+"px");
            $('body').get(0).style.setProperty("--headheight", headerContainer+"px");
        }
        getViewport();
    }
    $(window).on('load resize', function() {
        setSliderSss();
    });

    $(document)
        .off("click", ".banner-btn")
        .on("click", ".banner-btn", function (e) {
            e.stopPropagation();
            $("body").toggleClass("mol-hidden");
            $(".apply-model").toggleClass("show");
    });
    $(document)
        .off("click", ".model-close")
        .on("click", ".model-close", function (e) {
            e.stopPropagation();
            $("body").removeClass("mol-hidden");
            $(".apply-model").removeClass("show");
    });

    $('.banner-innr').slick({
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      });

    $(document).ready(function(){
      $(".scroll-up").click(function(){
          $("html,body").animate({scrollTop:0}, 800);
          return false
      })
    });


});