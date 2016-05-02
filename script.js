//https://www.flickr.com/services/api/

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=trending&api_key=6cd8800d04b7e3edca0524f5b429042e&extras=url_s&format=json&nojsoncallback=1";
    var urlRequestTimeout = setTimeout(function() {
        alert("failed to get Flickr resources");
    }, 4000);

    $.ajax({
        url: url,
        dataType: "json",
        jsonp: "callback",
        success: function(response) {
          // console.log(response["photos"]["photo"]);
          var photos = response["photos"]["photo"]
          for (var photo in photos){
            console.log(photos[photo])
            $("body").append("<h1>" + photos[photo]['title'] + "</h1>" + "<img src=" +  photos[photo]['url_s'] +  ">")
            // $('newH1').html(photos[photo]["title"])
          }
          clearTimeout(urlRequestTimeout);
        }
    });