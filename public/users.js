$(document).ready(function () {
  $.ajax({
    url: "https://randomuser.me/api?results=100",
  }).then(function (data) {
    $("#users").append("<ol>");
    for (let i = 0; i < data.results.length; i++) {
      $("ol").append("<li>" + data.results[i].location.city + "</li>");
    }
    $("#users").append("</ol>");
  });
});
