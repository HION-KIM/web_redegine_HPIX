gsap.registerPlugin(ScrollTrigger);

function headerSidemenuBoxInit() {
    $('header .sidemenu-open-btn').click(function () {
        $('header .side-menu-box').addClass('active');
    })

    $('header .side-menu-box>.closed-btn>span').click(function () {
        $('header .side-menu-box').removeClass('active');
    })
}


var sec1swiper = new Swiper(".sec-1-banner-swiper", {
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
    },
});


var sec2swiper = new Swiper(".sec-2-swiper-box", {
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 8,
});

function sec3ScrollTriggerInit() {
    $('.sec-3-primarybrand > div').each(function () {


        const mm = gsap.matchMedia();
        var $pinSection = $(this);
        var $triggercontent = $pinSection.find('.content>ul');

        mm.add("(min-width: 1300px)", () => {
            gsap.to($triggercontent, {
                yPercent: -100,

                scrollTrigger: {
                    trigger: $pinSection,
                    start: "top top",
                    end: "+=1500",
                    pin: true,
                    scrub: true,
                    // markers: true,
                }
            });
        });


        mm.add("(max-width: 1300px) and (min-width: 1000px)", () => {
            gsap.to($triggercontent, {
                yPercent: -300,

                scrollTrigger: {
                    trigger: $pinSection,
                    start: "top top",
                    end: "+=4500",
                    pin: true,
                    scrub: true,
                    // markers: true,
                }
            });
        });
    });
}

function sec4EventInit() {
    var sec4Swiper = new Swiper(".sec-4-swiper", {
        speed: 400,
        slidesPerView: "auto",
        spaceBetween: 24,

    });

    $('.sec-4-swiper .swiper-slide').mouseenter(function () {
        $thisIndex = $(this).index();

        $('.sec-4-curated .viewbox>div').eq($thisIndex).addClass('active').siblings().removeClass('active');
    })
}

function sec7swiperEventInit() {
    var sec6swiper = new Swiper(".sec-6-swiper", {
        speed: 800,
        allowTouchMove: false,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });

    var sec6ContentSwiper1 = new Swiper(".sec-6-content-swiper-1", {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".slide-pagination-1",
        },
        on: {
            slideChangeTransitionEnd() {
                var $index = $('.sec-6-content-swiper-1 .swiper-slide-active').index();
                var $this = $('.sec-6-content-swiperBox-1>.background>.bg');

                $this.removeClass('bg-0 bg-1 bg-2').addClass("bg" + "-" + $index);
            }
        }
    });
    var sec6ContentSwiper2 = new Swiper(".sec-6-content-swiper-2", {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".slide-pagination-2",
        },
        on: {
            slideChangeTransitionEnd() {
                var $index = $('.sec-6-content-swiper-2 .swiper-slide-active').index();
                var $this = $('.sec-6-content-swiperBox-2>.background>.bg');

                $this.removeClass('bg-0 bg-1 bg-2').addClass("bg" + "-" + $index);
            }
        }
    });
    var sec6ContentSwiper3 = new Swiper(".sec-6-content-swiper-3", {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".slide-pagination-3",
        },
        on: {
            slideChangeTransitionEnd() {
                var $index = $('.sec-6-content-swiper-3 .swiper-slide-active').index();
                var $this = $('.sec-6-content-swiperBox-3>.background>.bg');

                $this.removeClass('bg-0 bg-1 bg-2').addClass("bg" + "-" + $index);
            }
        }
    });
}

function ftEvnetInit() {
    const mqEvent = window.matchMedia('(max-width:742px)');

    var $stmenu = $('footer .content>.menu-box>ul>li');

    function stEventRemover(e) {
        if (e.matches) {
            $stmenu.find('ul').removeAttr('style');
        } else {
            $stmenu.find('ul').stop().removeAttr('style');
        }
    }

    stEventRemover(mqEvent);

    mqEvent.addEventListener('change', stEventRemover);

    $stmenu.click(function (e) {

        e.preventDefault();

        if (mqEvent.matches) {
            $(this).find('ul').stop().slideToggle();
        }
    });


}



headerSidemenuBoxInit();
sec3ScrollTriggerInit();
sec4EventInit();
sec7swiperEventInit();
ftEvnetInit();