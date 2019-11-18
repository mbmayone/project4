// var selectedSource = "";

$( document ).ready(function() {
    loadTwitterData();
});


function loadTwitterData(){
  $.ajax({
    type:"GET",
    url:"tweets.json",
    dataType:"json",
    success: parseTwitterData
});


}

function parseTwitterData(data){
  console.log(data);

  var sources = [];
  var html = "";

  for (var i = 0, len = data.length; i < 8; ++i) {
        //console.log(i);
         //sets data to arrays
         //sources.push(tempPath[i]["name"]);
        sources.push(data[i]);

        html += '<div class="tweet"><img src="' + sources[i]["profileImage"] + '" align="left">' + '<h5>' + sources[i]["screenName"] + '</h5>' + '<p>' + sources[i]["text"] + '</p></br></div>';


          // html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles(\''  + sources[i]["id"] + '\')">' + sources[i]["name"] + '</a></li>'
          //html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles('  + String(sources[i]["id"]) + ')">' + sources[i]["name"] + '</a></li>'

  }

  $("#twitter-container").html(html);

}
