// Create Map

var map;

function createMap () {
  var options = {
    center: { lat: 40.4165, lng: -3.70256},
    zoom: 3,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  // Event Markers

    // var marker = new google.maps.Marker({
    // position: { lat: 40.95576, lng: 0.31501},
    // map: map,
    // title: 'Cursa de les Roques',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 52.9547831, lng: -1.1581086},
    // map: map,
    // title: 'The 5k and 10k MoRun Wollaton Park Nottingham',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 41.0718746, lng: 14.3358285},
    // map: map,
    // title: 'Mezza Maratona Internazionale',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 50.4088207 , lng: -4.1595797},
    // map: map,
    // title: 'Stowe Pace Setter',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 44.81866, lng:9.98812899 },
    // map: map,
    // title: 'Ultra K Marathon',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 52.0406224, lng:-0.7594171 },
    // map: map,
    // title: 'The 5k and 10k MoRun Milton Keynes',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 60.23085, lng: 24.9150179 },
    // map: map,
    // title: 'Turkey Trot Helsinki',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 29.557669, lng: 34.951925 },
    // map: map,
    // title: 'Eilat Desert Marathon',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // var marker = new google.maps.Marker({
    // position: { lat: 38.8260965, lng: 16.3135033 },
    // map: map,
    // title: '100 km dei Due Mari',
    // animation: google.maps.Animation.BOUNCE,
    // });

    // // var marker = new google.maps.Marker({
    // // position: { lat: 51.4825765, lng: -0.0076589 },
    // // map: map,
    // // title: 'The 10k MoRun Greenwich Park London',
    // // animation: google.maps.Animation.BOUNCE,
    // // });


    var runevent = [
        {title: 'Joulujuoksu', location:{lat: 60.1733244, lng: 24.9410248}}
        {title: 'GRIM Challenge Aldershot', location:{lat: 51.2662802, lng: -0.7853785}}
        {title: 'Half Marathon Valley of Springs', location:{lat: 32.494236, lng: 35.519936}}
        {title: 'Mispo Winter Marathon', location:{lat: 58.3858079, lng: 24.4965768}}
        {title: 'Lemelerberg Trailrun', location:{lat: 52.4583452, lng: 6.3971765}}
        {title: 'KLM Curacao Marathon', location:{lat: 12.0889603, lng: -68.899292}}
        {title: 'Padenghe Half Marathon', location:{lat: 45.5066181, lng: 10.5007705}}
        {title: 'Half Marathon of Famalicão', location:{lat: 41.4079082, lng: -8.5082539}}
        {title: 'Espoo Rantamaraton', location:{lat: 60.1851737, lng: 24.83719}}
        {title: 'Santa Dash Galway', location:{lat: 53.270668, lng: -9.0567905}}
        {title: 'Circuito Trail Valencia - Navarrés', location:{lat: 39.1015607, lng: -0.6950987}}
        {title: 'The 5k and 10k MoRun Sumner Park Brighton', location:{lat: 50.82253, lng: -0.137163}}
        {title: 'Maratona della Via Egnatia', location:{lat: 41.3328072, lng: 19.4616074}}
        {title: 'Trail del Cinghiale', location:{lat: 44.2237608, lng: 11.6238183}}
        {title: 'Moral Trail Race', location:{lat: 40.4167754, lng: -3.7037902}}
        {title: 'The 10k MoRun Greenwich Park London', location:{lat: , lng: }}
        {title: 'Name', location:{lat: 51.4825765, lng: -0.0076589}}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        {title: 'Name', location:{lat: , lng: }}
        

    
    
    
    ]

    var markers = runevent.map(function(data, i) {
          return new google.maps.Marker({
            position: data.location,
            title: data.title,
            animation: google.maps.Animation.BOUNCE,
          });
        });


var markercluster = new MarkerClusterer (map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
