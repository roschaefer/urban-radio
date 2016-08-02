var current_location = [52.39241,13.11978]
var mymap = L.map('mapid').setView(current_location, 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);



var radius = 1000;
L.circle(current_location, radius, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5

    }).addTo(mymap);

var songs = [
[52.3955048 , 13.1274601 ,"My Song 1"] ,
[52.3924943 , 13.1175327 ,"My Song 2"] ,
[52.3844169 , 13.1159965 ,"My Song 3"] ,
[52.406968  , 13.0918544 ,"My Song 4"] ,
[52.3918982 , 13.12999   ,"My Song 5"] ,
]
_.each(songs, function(song) {
  L.marker(song).addTo(mymap)
});

var closest_songs = _.filter(songs, function(song) {
  c = L.latLng(song.slice(0,2));
  return c.distanceTo(current_location) <= radius;
});

_.each(closest_songs, function(song) {
  $('#playlist').append( "<li><a href="+ song[4]+">"+ song[2] +"</a></li>" );
});
