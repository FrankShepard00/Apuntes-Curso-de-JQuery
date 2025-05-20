
function ejecutarAJAX(q){
    $.get("https://www.googleapis.com/youtube/v3/search",{
        part:'snippet, id', 
        q: q, 
        pageToken: '', 
        type:'video', 
        key: 'AIzaSyCxVnBdWgoYsnSXX51lUfNBVDICKflaXQI'
    }, function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            var ouput = getVideo(item);
            $("#listaDeVideos").append(ouput);
        });
    });
}

function buscarVideo(){
    var q = $("#usuarioInput").val();
    ejecutarAJAX(q);
}

function getVideo(item){
    var videoId = item.id.videoId; 
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle; 
    var videoDate = item.snippet.publishedAt;

    var ouput = 
    '<li>' + 
        '<div class="lista-izquierda">' +
            '<a><img href="http://youtube.com/embed/'+videoId+'" src="'+thumb+'"/></a>'+
            '<div class="lista-derecha">'+
                '<h3><a href="http://youtube.com/embed/'+videoId+'"><span>'+title+'</span></a></h3>'+
                '<h5><span class="autor">'+channelTitle+'</span>Fecha: '+videoDate+'</h5>'+
                '<p>'+description+'</p>'+ 
            '</div>'+

        '</div>'+
    '</li>'+
    '';

    return ouput;

    
}