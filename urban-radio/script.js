var current_location = [52.39241,13.11978]
var mymap = L.map('mapid').setView(current_location, 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);



L.circle(current_location, 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5

    }).addTo(mymap);

songs = [
[52.3924943,13.1175327],
[52.3955048,13.1274601],
[52.3844169,13.1159965],
[52.406968, 13.0918544],
[52.3918982,13.12999],
]
_.each(songs, function(song) {
  L.marker(song).addTo(mymap)
});
