$(document).ready(function () {
  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
     // centerMode: true,
      items: 3,
      margin: 10,
      loop: true,
      navText: [
        '<span class="arrow-owl arrow-left"><div></div><img src="img/ready_project/keyboard-right-arrow-button_(4)_копия.png"> </span>',
        '<span class="arrow-owl arrow-right"><img src="img/ready_project/keyboard-right-arrow-button_(4).png"></span>'
      ],
      nav: true,
      dots: true
     // rewindNav:false
   /*   responsive: [
        {
          breakpoint: 768,
          settings: {
            itemToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            itemToShow: 1,
          }
        }
      ]*/
    });
  });

  $(function () {
    $("#tabs .btn").click(function () {
      var category = $(this).data("category");
      $("#tabs .btn").removeClass('active');
      $(this).addClass('active');
      $(".owl-theme.blockreadyproject .item").hide();
      $(".owl-theme.blockreadyproject ." + category).show();
    })
  });
});
