$(document).ready(function () {
  $("select.loadType").change(function () {
    var selectedLoadType = $(this).children("option:selected").val();
    if (selectedLoadType === "ftl") {
      $("select.vehicleType").show();
    } else {
      $("select.vehicleType").hide();
    }
  });

  $("#place").autocomplete({
    source: placeAC,
    minLength: 2,
    select: function (event, ui) {
      console.log(
        "Selected: " + ui.item.value + " with LocationId " + ui.item.id
      );
    },
  });

  function placeAC(query, callback) {
    $.getJSON(
      "https://places.cit.api.here.com/places/v1/autosuggest?at=" +
        coordinates +
        "&q=" +
        query.term +
        "&app_id=" +
        APP_ID_HERE +
        "&app_code=" +
        APP_CODE_HERE,
      function (data) {
        var places = data.results.filter((place) => place.vicinity);

        places = places.map((place) => {
          return {
            title: place.title,
            value:
              place.title +
              ", " +
              place.vicinity.replace(/<br\/>/g, ", ") +
              " (" +
              place.category +
              ")",
            id: place.id,
          };
        });
        return callback(places);
      }
    );
  }
});
