function search() {

  var apiKey = "6wQGedfigIKwuiQTnYUr9y4RnX3FXH58RLZseQdy"
  var term = document.getElementById('search')
  $(".display").html("")

  $.ajax({
    url: "https://api.fda.gov/drug/event.json?api_key=" + apiKey + "&search=" + term.value + "&count=patient.reaction.reactionmeddrapt.exact",
    dataType: "json",
    type: 'GET',

    success: function(data, err) {
      console.log(this.url, data)

      for (var i = 0; i < 16; i++) {
        //store side effect
        var result = (data.results[i].term)

        if (result == 'DRUG INEFFECTIVE') {
            result = ""
        } else if(result === 0) {
            alert("Try another search")
        } else {
          var newDiv = '<div class="box"><p>' + result + '</p></div>'
          $('.display').append(newDiv)
        }
      } // the end of loops
    } // the end of success function
  }) // the end of ajax
}

document.getElementById('searchBtn').addEventListener('click', search, false)
