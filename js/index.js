$(document).ready(function() {
  $("body").on("click", "#srch", function() {
    $("form").submit(function(e) {
      e.preventDefault();
    });
    $(".results").html("");
    let fieldValue = $("#searchText").val();
    $.getJSON(
      "https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=" +
        fieldValue,
      function(search) {
        let title = search[1];
        let descr = search[2];
        let links = search[3];

        // let test = JSON.stringify(search[3][0]);
        // console.log(test);

        for (let i = 0; i < search[1].length; i++) {
          $(".results").append(
            '<a href="' +
              links[i] +
              '" target="_blank">' +
              '<div class="outputs bg-light">' +
              '<span class="titel bg-dark">' +
              title[i] +
              " </span><br>" +
              descr[i] +
              "</div></a>"
          );
        } // for loop end
      }
    );
  });
});