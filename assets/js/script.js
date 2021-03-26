// var requestUrl = 'https://api.github.com/orgs/Youtube/repos';


function getMp3Api(event) {
  event.preventDefault()
  var ytubelink = $("#ytubelink").val()
  var ytubeid = ytubelink.split("=")[1]
  console.log(ytubeid)
  
  
  
  fetch("https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3?video_id="+ytubeid, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "07b716bb2emsh382bc8e82fbdaf7p127359jsnef1151c99ba8",
      "x-rapidapi-host": "youtube-to-mp32.p.rapidapi.com"
    }
  })
  .then(response => {
    // console.log(response.json());
    return response.json();
  })
  .then(jsonresponse => {
    console.log(jsonresponse);
  var button = $(`<a href=${jsonresponse.Download_url}>download</a>`)
    $("#download").append(button)
  })
  .catch(err => {
    console.error(err);
  });
  
  }
  function getlyrics(event){
    event.preventDefault()
    var lyriclink = $("#lyricInput").val()
    var spaceforapi = lyriclink.replaceAll(" ", "%20" );
    fetch(`https://genius.p.rapidapi.com/search?q=${spaceforapi}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "07b716bb2emsh382bc8e82fbdaf7p127359jsnef1151c99ba8",
        "x-rapidapi-host": "genius.p.rapidapi.com"
      }
    })
    
    // var image = $(`<img>=${jsonresponse.hits.0.header_image_url}`</img>)
    
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
    }
  
  
  
  
  var mp3Button = document.getElementById("downLBtn")
  mp3Button.addEventListener("click", getMp3Api)
  var lyricButton = document.getElementById("lyricBtn")
  lyricButton.addEventListener("click", getlyrics)
  
  // var mp3Button = document.getElementById("mp4")

