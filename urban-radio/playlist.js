var audio;
var playlist;
var tracks;
var current;

function playlistInit(){
    current = 0;
    audio = $('#audio');
    playlist = $('#playlist');
    tracks = playlist.find('a.playlist-item-link');
    len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function changeTitle(){
    $('#current-title').empty();
  table_row = $('.table-active');
  if (table_row.length){
    song = table_row.children(".playlist-item-song").text();
    artist = table_row.children(".playlist-item-artist").text();
    distance = table_row.children(".playlist-item-distance").text();
    comment = table_row.attr("data-comment");
    $('#current-title').append( "<h1>"+ song +" von " + artist +" - " + distance + " </h1><p>" + comment + "</p>");
  }
}
function run(link, player){
        player.src = link.attr('href');
        row = link.parent().parent();
        row.addClass('table-active').siblings().removeClass('table-active');
        changeTitle();
        audio[0].load();
        audio[0].play();
}


