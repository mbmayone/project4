var selectedSource = "";

$( document ).ready(function() {
    loadArticles();
});


function loadArticles(){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/everything?q=olympics&apiKey="",
            dataType:"json",
            success: parseArticles
});


}



function parseArticles(data){
  console.log(data);
  var html = "<h1>" + selectedSource + "</h1>"
  var articles = [];
  var tempPath = data["articles"];

  for (var i = 0, len = tempPath.length; i < 12; ++i) {
        //console.log(i);
         //sets data to arrays for charts
         articles.push(tempPath[i]);
        console.log(articles[0]["title"]);
        if (tempPath[i]["description"] == null){
          var description = "";
        }else{
          description = tempPath[i]["description"];
        }
        html += '<div><h3><a href="' + articles[0]["url"] + '">' + tempPath[i]["title"] + '</a></h3><p>' + description  + '</p></div>'

  }
  $("#news-container").html(html);
  console.log(html);


}
