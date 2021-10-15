function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("sqft");
    var bhk = document.getElementById("bhk")
    var bathrooms = document.getElementById("bath")
    var location = document.getElementById("uiLocations");
    var area = document.getElementById("uiAreas");
    var availability = document.getElementById("uiAvailability");
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "/api/predict"; 
    var data = {
      total_sqft: parseFloat(sqft.value),
      bhk: parseFloat(bhk.value),
      bath: parseFloat(bathrooms.value),
      location: location.value,
      area: area.value,
      availability: availability.value
    }

    console.log(data)

    $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: parseFloat(bhk.value),
      bath: parseFloat(bathrooms.value),
      location: location.value,
      area: area.value,
      availability: availability.value
    },function(data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
    });
}

function onPageLoad() {
  console.log( "document loaded" );
  // var url = "/api/get_location_names"; 
  var url = "/get_location_names"; 
  $.get(url, function(data, status) {
      console.log("got response for get_location_names request");
      if(data) {
          var locations = data.locations;
          var uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          for(var i in locations) {
              var opt = new Option(locations[i]);
              $('#uiLocations').append(opt);
          }
      }
  });

  var url2 = "/api/get_area_names"; 
  $.get(url2, function(data, status) {
      console.log("got response for get_area_names request");
      if(data) {
          var area = data.area;
          var uiArea = document.getElementById("uiAreas");
          $('#uiArea').empty();
          for(var i in area) {
              var opt = new Option(area[i]);
              $('#uiArea').append(opt);
          }
      }
  });

  var url3 = "/api/get_availability_names"; 
  $.get(url3, function(data, status) {
      console.log("got response for get_availability_names request");
      if(data) {
          var availability = data.availability;
          var uiAvailability = document.getElementById("uiAvailability");
          $('#uiAvailability').empty();
          for(var i in availability) {
              var opt = new Option(availability[i]);
              $('#uiAvailability').append(opt);
          }
      }
  });

}

window.onload = onPageLoad;
