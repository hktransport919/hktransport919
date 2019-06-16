$(document).ready(function(){
    // $('.js--nav').waypoint(function(direction) {
    //     if(direction == 'down'){
    //         $('nav').addClass('sticky-top');
    //     }else{
    //         $('nav').removeClass('sticky-top'); 
    //     }
    // }); 
    $('.js--partners').waypoint(function(direction) {
        $('.js--partners').addClass('animated pulse');
      },{
        offset:'80%'
      });
    $('.js--para').waypoint(function(direction) {
        $('.js--para').addClass('animated fadeInLeft');
      },{
        offset:'80%'
      });
      $('.js--tag').waypoint(function(direction) {
        $('.js--tag').addClass('animated fadeInUp');
      },{
        offset:'90%'
      });
      $('.js--box1').waypoint(function(direction) {
        $('.js--box1').addClass('animated fadeInDown');
      },{
        offset:'50%'
      });
      $('.js--box2').waypoint(function(direction) {
        $('.js--box2').addClass('animated fadeInUp');
      },{
        offset:'75%'
      });
      $('#js--ico1').waypoint(function(direction) {
        $('#js--ico1').addClass('animated zoomIn');
      },{
        offset:'100%'
      });
      $('#js--ico2').waypoint(function(direction) {
        $('#js--ico2').addClass('animated zoomIn');
      },{
        offset:'100%'
      });
      $('#js--ico3').waypoint(function(direction) {
        $('#js--ico3').addClass('animated zoomIn');
      },{
        offset:'100%'
      });
      $('.js--contact').waypoint(function(direction) {
        $('.js--contact').addClass('animated zoomIn');
      },{
        offset:'90%'
      });

      $(".js--nav").click(function( event ){
        var nav=$('.web-nav');
          // nav.toggleClass('animated slideInLeft');
        //  nav.toggle('display',"block");
        nav.slideToggle(200);
      });
      /**************** 
      Form Submission & Validation
     ******************/
      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
   
});
 /**************** 
      Window Resize
     ******************/
    jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 1023) {
          $('.js--cont').removeClass('col-md-4');
          $('.js--cont').addClass('col-md-5');  
        }else if (ww >= 1023) {
          $('.js--cont').removeClass('col-md-5');
          $('.js--cont').addClass('col-md-4');
        };
        if (ww < 767) {
          $('.heading').removeClass('d-flex');
          $('.js--para').removeClass('col-sm-5');
          $('.js--para').removeClass('col');
          $('.js--tag').removeClass('container');
          $('#block').removeClass('row');
          $('#block').addClass('flex-column');
        }else if (ww >= 767) {
          $('.heading').addClass('d-flex');
          $('.js--para').addClass('col-sm-5');
          $('.js--tag').addClass('container');
          $('#block').addClass('row');
          $('#block').removeClass('flex-column');
        };
      };

      $(window).resize(function(){
        alterClass();
      });
      //Fire it when the page first loads:
      alterClass();
    });