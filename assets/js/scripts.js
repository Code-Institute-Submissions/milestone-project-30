// Create Map

var map;

function createMap () {
  var options = {
    center: { lat: 40.4165, lng: -3.70256},
    zoom: 3,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  // Event Markers

    var marker = new google.maps.Marker({
    position: { lat: 40.95576, lng: 0.31501},
    map: map,
    title: 'Cursa de les Roques',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 52.9547831, lng: -1.1581086},
    map: map,
    title: 'The 5k and 10k MoRun Wollaton Park Nottingham',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 41.0718746, lng: 14.3358285},
    map: map,
    title: 'Mezza Maratona Internazionale',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 50.4088207 , lng: -4.1595797},
    map: map,
    title: 'Stowe Pace Setter',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 44.81866, lng:9.98812899 },
    map: map,
    title: 'Ultra K Marathon',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 52.0406224, lng:-0.7594171 },
    map: map,
    title: 'The 5k and 10k MoRun Milton Keynes',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 60.23085, lng: 24.9150179 },
    map: map,
    title: 'Turkey Trot Helsinki',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 29.557669, lng: 34.951925 },
    map: map,
    title: 'Eilat Desert Marathon',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 38.8260965, lng: 16.3135033 },
    map: map,
    title: '100 km dei Due Mari',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 51.4825765, lng: -0.0076589 },
    map: map,
    title: 'The 10k MoRun Greenwich Park London',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 40.4167754, lng: -3.7037902 },
    map: map,
    title: 'Moral Trail Race',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 44.2237608, lng: 11.6238183 },
    map: map,
    title: 'Trail del Cinghiale',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 41.3328072, lng: 19.4616074 },
    map: map,
    title: 'Maratona della Via Egnatia',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 50.82253, lng: -0.137163 },
    map: map,
    title: 'The 5k and 10k MoRun Sumner Park Brighton',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 39.1015607, lng: -0.6950987 },
    map: map,
    title: 'Circuito Trail Valencia - Navarrés',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 53.270668, lng: -9.0567905 },
    map: map,
    title: 'Santa Dash Galway',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 60.1851737, lng: 24.83719 },
    map: map,
    title: 'Espoo Rantamaraton',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 41.4079082, lng: -8.5082539 },
    map: map,
    title: 'Half Marathon of Famalicão',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 45.5066181, lng: 10.5007705 },
    map: map,
    title: 'Padenghe Half Marathon',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 12.0889603, lng: -68.899292 },
    map: map,
    title: 'KLM Curacao Marathon',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 52.4583452, lng: 6.3971765 },
    map: map,
    title: 'Lemelerberg Trailrun',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 58.3858079, lng: 24.4965768 },
    map: map,
    title: 'Mispo Winter Marathon',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 32.494236, lng: 35.519936 },
    map: map,
    title: 'Half Marathon Valley of Springs',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 51.2662802, lng: -0.7853785 },
    map: map,
    title: 'GRIM Challenge Aldershot',
    animation: google.maps.Animation.BOUNCE,
    });

    var marker = new google.maps.Marker({
    position: { lat: 60.1733244, lng: 24.9410248 },
    map: map,
    title: 'Joulujuoksu',
    animation: google.maps.Animation.BOUNCE,
    });



}
