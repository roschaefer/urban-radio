var songs = [
[52.3955048 , 13.1274601 ,"John W. Myers", "You're As Welcome As The Flowers In May", "https://archive.org/download/JohnW.Myers-YoureAsWelcomeAsTheFlowersInMay/JohnWMyers-YoureAsWelcomeAsTheFlowersInMay.mp3"] ,
[52.3924943 , 13.1175327 ,"Movement Museum", "April 16, 2009", "https://archive.org/compress/20090416/formats=VBR%20MP3&file=/20090416.zip"] ,
[52.3844169 , 13.1159965 ,"Yerkes Southern Five", "Railroad Blues", "https://archive.org/download/YerkesSouthernFiveRailroadBlues1920/Yerkes_Southern_Five-Railroad_Blues-1920.mp3"] ,
[52.406968  , 13.0918544 ,"Carlo Serafini", "Someone to watch over me", "https://archive.org/download/someonetowatchoverme/someonetowatchoverme.mp3"] ,
[52.3918982 , 13.12999   ,"Eagle Eye Cherry", "Save Tonight", "http://8tracks.s3.amazonaws.com/tf/028/707/588/48436.mp3"] ,
]
var current_location = L.latLng([52.39241,13.11978]);


var radius = 1000;
var area = L.circle(current_location, radius, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5

})

function updatePlaylist () {
  $('#playlist').empty();
  var closest_songs = _.filter(songs, function(song) {
    c = L.latLng(song.slice(0,2));
    return c.distanceTo(area.getLatLng()) <= radius;
  });

  _.each(closest_songs, function(song) {
    $('#playlist').append( "<li><a href="+ song[4]+">"+ song[2] +"</a></li>" );
  });
}

function onMapClick(e) {
  area.setLatLng(e.latlng); 
  updatePlaylist();
}

var mymap = L.map('mapid').setView(current_location, 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

_.each(songs, function(song) {
  L.marker(song).addTo(mymap)
});

area.addTo(mymap);
updatePlaylist();

mymap.on('click', onMapClick);



