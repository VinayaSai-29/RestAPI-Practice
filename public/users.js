$(document).ready(function () {
  $.ajax({
    url: "https://randomuser.me/api?results=3",
  }).then(function (data) {
    $("#users").append("<table>");
    $('table').append("<tr>");
    $('tr').append("<th>Name</th>" + "<th>thumbnail</th>")
    for (let i = 0; i < data.results.length; i++) {
      $("table").append("<tr><td>" + data.results[i].name.first + "</td>" + "<td>" + data.results[i].name.last + "</td>" + data.results[i].picture.thumbnail + "</td></tr>");
    }
    $("#users").append("</table>");
  });
});
