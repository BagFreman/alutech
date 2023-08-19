document.addEventListener('DOMContentLoaded', () => {

   /**
    * Блок s-11
    */

   // Подключение слайдера наша команда

   const sliderTeam = new Swiper('.team', {
      spaceBetween: 20,
      slidesPerView: 'auto',

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },
   });


   /**
    * Блок s-12
    */

   // Подключение слайдера сертификата

   const sliderCer = new Swiper('.certificate', {
      spaceBetween: 20,
      slidesPerView: 3.5,
      breakpoints: {

         0: {
            slidesPerView: 2,
         },

         900: {
            slidesPerView: 2.5,
         },

         1000: {
            slidesPerView: 3,
         },

         1200: {
            slidesPerView: 3.5,
         }
      },

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },
   });

   // Подключение fancybox

   Fancybox.bind("[data-fancybox]", {});

   // Маска для телефона

   const phone = document.querySelector('.phone');
   const maskOptions = {
      mask: '+{7}(000)000-00-00'
   };

   let mask = IMask(phone, maskOptions);


   /**
    * Блок s-8
    */

   //Подключение слайдера выполненные проекты

   const sliderProject = new Swiper('.project', {
      spaceBetween: 20,
      slidesPerView: 1,

      pagination: {
         el: ".project-swiper-pagination",
         type: "fraction",
         renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
               ' / ' +
               '<span class="' + totalClass + '"></span>';
         }
      },

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },
   });


   // Подключение слайдера наша команда

   const sliderCorporate = new Swiper('.corporate', {
      spaceBetween: 20,
      slidesPerView: 'auto',

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },
   });

   /**
   * Блок s-7
   */

   const sliderOption = new Swiper('.option', {
      spaceBetween: 40,
      slidesPerView: 2.3,

      breakpoints: {

         0: {
            slidesPerView: 1.2,
         },

         900: {
            slidesPerView: 2.3,
         },

      },

      pagination: {
         el: ".project-swiper-pagination-1",
         type: "fraction",
      },

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },
   });

})

$(document).ready(function () {

   $('.calc-top-item').on('click', function () {
      $(this).closest('.calc-top').find('.calc-top-item__active').removeClass('calc-top-item__active');
      $(this).addClass('calc-top-item__active');

      let dataImg = $(this).data('img');
      $('.calc-middle__img-img').attr('src', 'img/calc/' + dataImg);
   });

   $('.calc-colors__color').on('click', function () {
      $(this).closest('.calc-colors').find('.calc-colors__color-active').removeClass('calc-colors__color-active');
      $(this).addClass('calc-colors__color-active');

      let styleColor = $(this).attr('style');
      $('.calc-middle__bgc').attr('style', styleColor);
   });


   $('.tabs-wrapper').each(function () {
      let ths = $(this);
      ths.find('.tab-item').not(':first').hide();
      ths.find('.tab').click(function () {
         ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
         ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');
   });

   $('.calc-bottom-item').on('click', function () {
      $(this).parent().find('.calc-bottom-item-active').removeClass('calc-bottom-item-active');
      $(this).addClass('calc-bottom-item-active');
   });
});