var requestUrl = 'https://api.github.com/orgs/Youtube/repos';



function getApi(event) {
  event.preventDefault()
  console.log('called the function')

fetch(requestUrl).then(function(res){
  return res.json()

}).then(function(response){
  console.log(response)
})


}


var mp3Button = document.getElementById("mp3")
mp3Button.addEventListener("click", getApi)


var mp3Button = document.getElementById("mp4")

