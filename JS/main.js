function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}

$(document).ready(function () {
  // window.onload = function () {
  //   setTimeout(function(){
  //     $('body').addClass('loaded');
  //   });
  // }
  // $('.js--nav').waypoint(function(direction) {
  //     if(direction == 'down'){
  //         $('nav').addClass('sticky-top');
  //     }else{
  //         $('nav').removeClass('sticky-top');
  //     }
  // });
  // $('.js--fixed-nav').waypoint(function(direction) {
  //   $('nav').toggleClass('fixed-theme');
  // },{
  //   offset:'35%'
  // });
  $(".js--partners").waypoint(
    function (direction) {
      $(".js--partners").addClass("animated pulse");
    },
    {
      offset: "80%",
    }
  );
  $(".js--para").waypoint(
    function (direction) {
      $(".js--para").addClass("animated fadeInLeft");
    },
    {
      offset: "80%",
    }
  );
  $(".js--tag").waypoint(
    function (direction) {
      $(".js--tag").addClass("animated fadeInUp");
    },
    {
      offset: "90%",
    }
  );
  $(".js--box1").waypoint(
    function (direction) {
      $(".js--box1").addClass("animated fadeInDown");
    },
    {
      offset: "50%",
    }
  );
  $(".js--box2").waypoint(
    function (direction) {
      $(".js--box2").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    }
  );
  $("#js--ico1").waypoint(
    function (direction) {
      $("#js--ico1").addClass("animated zoomIn");
    },
    {
      offset: "100%",
    }
  );
  $("#js--ico2").waypoint(
    function (direction) {
      $("#js--ico2").addClass("animated zoomIn");
    },
    {
      offset: "100%",
    }
  );
  $("#js--ico3").waypoint(
    function (direction) {
      $("#js--ico3").addClass("animated zoomIn");
    },
    {
      offset: "100%",
    }
  );
  $(".js--contact").waypoint(
    function (direction) {
      $(".js--contact").addClass("animated zoomIn");
    },
    {
      offset: "90%",
    }
  );
  $(".js--whatsapp").waypoint(
    function (direction) {
      $(".js--whatsapp").addClass("animated zoomIn");
    },
    {
      offset: "100%",
    }
  );
  // animating call button
  animateCSS(".js--call", "zoomIn", function () {
    setInterval(() => {
      animateCSS(".js--call", "tada", function () {
        setTimeout(() => {}, 2000); //seconds to keep animation live
      });
    }, 2000); //seconds to delay animation
  });

  // const element =  document.querySelector('.js--call');
  // element.addEventListener('animationend', function() {
  //   this.classList.remove('animated');
  //   this.classList.remove('zoomIn');
  //   this.classList.add('animated');
  //   this.classList.add('infinite');
  //   this.classList.add('tada');
  //   this.classList.add('delay-2s');

  // });

  /**************** 
      Sidebar Navigation for Mobile
     ******************/
  var nav = $(".sidenav");
  var icon = $(".js--nav i");
  // Menu Icon In SIde Bar
  var menuIcon = function () {
    icon.removeClass("fa-bars");
    icon.addClass("fa-times");
    nav.removeClass("animated slideOutRight");
    nav.addClass("animated slideInRight");
    $("body").css("overflow", "hidden");
    // nav.css('display','block');
  };
  // Close Icon In SIde Bar
  var closeIcon = function () {
    icon.removeClass("fa-times");
    icon.addClass("fa-bars");
    nav.removeClass("animated slideInRight");
    nav.addClass("animated slideOutRight");
    $("body").css("overflow", "");
  };

  $(".js--nav").click(function (event) {
    // nav.css('display','block');
    //  nav.toggle('display',"block");
    // nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      menuIcon();
    } else {
      closeIcon();
    }
  });
  /**************** 
      Scroll Navigation
     ******************/
  $(".js--scroll-to-cont").click(function () {
    closeIcon();
    $("html ,body").animate(
      {
        scrollTop: $(".contact").offset().top,
      },
      1000
    );
  });
  $(".js--scroll-to-mcont").click(function () {
    closeIcon();
    $("html ,body").animate(
      {
        scrollTop: $("#form").offset().top,
      },
      1000
    );
  });

  /**************** 
      Form Submission & Validation
     ******************/
  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  //Form Validation
});
function form_validation() {
  var name = document.forms["submit-to-google-sheet"]["name"];
  var email = document.forms["submit-to-google-sheet"]["email"];
  var phone = document.forms["submit-to-google-sheet"]["phone"];
  var msg = document.forms["submit-to-google-sheet"]["message"];

  if (name.value == "") {
    name.focus();
    return false;
  }

  if (email.value == "") {
    email.focus();
    return false;
  }

  if (phone.value == "") {
    phone.focus();
    return false;
  }

  if (msg.value == "") {
    msg.focus();
    return false;
  }

  return true;
}
/**************** 
      Window Resize
     ******************/
jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 1023) {
      $(".js--cont").removeClass("col-md-4");
      $(".js--cont").addClass("col-md-5");
    } else if (ww >= 1023) {
      $(".js--cont").removeClass("col-md-5");
      $(".js--cont").addClass("col-md-4");
      $(".sidenav").removeClass("animated");
      $("body").css("overflow", "");
      $(".mobile-call").hide();
      $(".mobile-whatsapp").hide();
    }
    if (ww < 767) {
      $(".heading").removeClass("d-flex");
      $("nav").addClass("shadow");

      $(".js--para").removeClass("col-sm-5");
      $(".js--para").removeClass("col");
      $(".js--tag").removeClass("container");
      $("#block").removeClass("row");
      $("#block").addClass("flex-column");
      $(".mobile-call").show();
      $(".mobile-whatsapp").show();
    } else if (ww >= 767) {
      $(".heading").addClass("d-flex");

      $("nav").removeClass("shadow");
      $(".js--para").addClass("col-sm-5");
      $(".js--tag").addClass("container");
      $("#block").addClass("row");
      $("#block").removeClass("flex-column");
      $(".sidenav").removeClass("animated");
      $(".mobile-call").hide();
      $(".mobile-whatsapp").hide();
    }
  };

  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

// Send Form to Google sheets

var $form = $("form#test-form"),
  url =
    "https://script.google.com/macros/s/AKfycbxo-_6_adFtAL2o2BFT4Rk68R_6nt9-Mvej-ONXCnzNBMtZ4UE/exec";

$("#submit-form").on("click", function (e) {
  if (form_validation() == true) {
    window.location.href = "./thank-you";
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
      success: function () {
        // document.getElementById('thankyou_message').style.display='block';
      },
    });
  } else {
    console.log("Form Error");
  }
});
