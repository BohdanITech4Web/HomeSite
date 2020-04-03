$(document).ready(function () {
  $(function () {
// Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: false,
      navText: [
        '<span class="arrow-owl arrow-left"><img src="img/ready_project/keyboard-right-arrow-button_(4)_копия.png"> </span>',
        '<span class="arrow-owl arrow-right"><img src="img/ready_project/keyboard-right-arrow-button_(4).png"></span>'
      ],
      nav: true,
      dots: true
    });
    $("#tabs .btn").click(function () {
      var category = $(this).data('owl-filter');
      $("#tabs .btn").removeClass('active');
      $(this).addClass('active');
      owl.owlcarousel2_filter( category );
      /* $(".owl-theme.blockreadyproject .item").hide();
      $(".owl-theme.blockreadyproject ." + category).show();
      owl.trigger('refreshed.owl.carousel');*/
    });
    $('.owl-carousel .owl-dots').each(function() {
      $(this).appendTo($(this).prev('.owl-nav'));
    })
    
  });
});
