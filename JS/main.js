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
        offset:'90%'
      });
      $('#js--ico2').waypoint(function(direction) {
        $('#js--ico2').addClass('animated zoomIn');
      },{
        offset:'90%'
      });
      $('#js--ico3').waypoint(function(direction) {
        $('#js--ico3').addClass('animated zoomIn');
      },{
        offset:'90%'
      });
      $('.js--contact').waypoint(function(direction) {
        $('.js--contact').addClass('animated zoomIn');
      },{
        offset:'90%'
      });
      /**************** 
      Form Submission
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