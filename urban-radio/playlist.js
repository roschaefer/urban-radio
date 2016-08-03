var audio;
var playlist;
var tracks;
var current;

function playlistInit(){
    current = 0;
    audio = $('#audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
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
function changeTitle(link){
  $('#current-title').empty();
  $('#current-title').append( "<h1>"+ link.text() +"</h1><p>" + link.attr('data-comment') + "</p>");
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        changeTitle(link);
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}


