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
        offset:'50%'
      });
      $('.js--tag').waypoint(function(direction) {
        $('.js--tag').addClass('animated fadeInUp');
      },{
        offset:'50%'
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
        offset:'50%'
      });
      $('#js--ico2').waypoint(function(direction) {
        $('#js--ico2').addClass('animated zoomIn');
      },{
        offset:'50%'
      });
      $('#js--ico3').waypoint(function(direction) {
        $('#js--ico3').addClass('animated zoomIn');
      },{
        offset:'50%'
      });
});