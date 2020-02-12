var map;

function createMap () {
  var options = {
    center: { lat: 40.4165, lng: -3.70256},
    zoom: 3,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

}

var runfinder;
