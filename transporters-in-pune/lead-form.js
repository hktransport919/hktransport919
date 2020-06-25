$(document).ready(function () {
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
