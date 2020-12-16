$(document).ready(function () {
  // Send Form to Google sheets

  var $leadform = $("form#hydrabadLeadForm"),
    $mLeadForm = $("form#mobile-hydrabadLeadForm"),
    leadUrl =
      "https://script.google.com/macros/s/AKfycbwfyxkaA7yXRjLiEDKf9v3Wpfer-RkyGXtptQNnFqLTYQlgjPdwBUeK/exec";

  // $.ajaxSetup({ cache: false });

  $.fn.serializeForm = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };

  $("#hydrabadLeadFormSubmit").on("click", function (e) {
    if (leadForm_validation("submit-leadForm-to-google-sheet") == true) {
      e.preventDefault();
      var jqxhr = $.ajax({
        url: leadUrl,
        method: "POST",
        dataType: "json",
        data: $leadform.serializeForm(),
        success: function () {
          console.log($leadform.serializeForm());
          window.location.href = "/thank-you";

          // document.getElementById('thankyou_message').style.display='block';
        },
        error: function (e) {
          console.log(e);
        },
      });
    } else {
      console.log("Form Error");
    }
  });
  $("#mobile-hydrabadLeadFormSubmit").on("click", function (e) {
    if (leadForm_validation("mobile-submit-leadForm-to-google-sheet") == true) {
      e.preventDefault();

      // $(this).hide();

      var jqxhr = $.ajax({
        url: leadUrl,
        method: "POST",
        dataType: "json",
        data: $mLeadForm.serializeObject(),
        success: function () {
          console.log($leadform.serializeForm());
          window.location.href = "/thank-you";

          // alert("Message Sent");
          // document.getElementById("thankyou_message").style.display = "block";
        },
      });
    } else {
      console.log("Form Error");
    }
  });

  $("select.loadType").change(function () {
    var selectedLoadType = $(this).children("option:selected").val();
    if (selectedLoadType === "Full Truck Load") {
      $("select.vehicleType").show();
    } else {
      $("select.vehicleType").hide();
    }
  });

  // $("#desktop-loadingPlace").on("input", async function () {
  //   var value = $(this).val();
  //   if (value.length > 0) {
  //     var availableCities = await places(value);
  //     $(this).autocomplete({
  //       source: availableCities,
  //     });
  //   }
  // });
  // $("#desktop-unloadingPlace").on("input", async function () {
  //   var value = this.value;
  //   if (value.length > 0) {
  //     var availableCities = await places(value);
  //     $(this).autocomplete({
  //       source: availableCities,
  //     });
  //   }
  // });
  // $("#loadingPlace").on("input", async function () {
  //   var value = $(this).val();
  //   if (value.length > 0) {
  //     var availableCities = await places(value);
  //     $(this).autocomplete({
  //       source: availableCities,
  //     });
  //   }
  // });
  // $("#unloadingPlace").on("input", async function () {
  //   var value = this.value;
  //   if (value.length > 0) {
  //     var availableCities = await places(value);
  //     $(this).autocomplete({
  //       source: availableCities,
  //     });
  //   }
  // });
  // async function places(search) {
  //   var availableCities = [];
  //   var platform = new H.service.Platform({
  //     apikey: config.HERE_API,
  //   });
  //   var service = await platform.getSearchService();
  //   // Call the "autosuggest" method with the search parameters,
  //   // the callback and an error callback function (called if a
  //   // communication error occurs):
  //   await service.autosuggest(
  //     {
  //       // Search query
  //       q: search,
  //       // Center of the search context
  //       at: "19.0969,72.8669",
  //     },
  //     (result) => {
  //       let results = result.items.slice(0, 3);
  //       results.map(function (val) {
  //         availableCities.push(val.title);
  //       });
  //     },
  //     alert
  //   );
  //   return availableCities;
  // }
});
