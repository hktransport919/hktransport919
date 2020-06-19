$(document).ready(function () {
  $("select.loadType").change(function () {
    var selectedLoadType = $(this).children("option:selected").val();
    if (selectedLoadType === "ftl") {
      $("select.vehicleType").show();
    } else {
      $("select.vehicleType").hide();
    }
  });
});
