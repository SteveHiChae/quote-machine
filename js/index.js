function getQuote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "X-Mashape-Key", "eT0vDwYlHqmsh5DXLeHhcO3NpY6qp15XOXujsnhlB8UPFquC1P",
        "Content-Type", "application/x-www-form-urlencoded",
        "Accept", "application/json")
    },
    success: function(data) {
      $(".message").html(data);
      var obj = JSON && JSON.parse(data) || $.parseJSON(data);
      $(".quote").html(obj.quote);
      $(".author").html('- ' + obj.author);
      $(".category").html('( Category : ' + obj.category + ' )');
    }
  }); // ajax  
}; // function getQuote()

getQuote(); // for the init
$(document).ready(function() {
  $("#getMessage").on("click", getQuote);
});