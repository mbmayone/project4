var map
var tokyo = {lat: 35.6735, lng: 139.7088};
var park = {lat: 35.637124,lng: 139.633554};
var gym= {lat: 35.679814, lng: 139.712370};

function initMap() {
  map = new google.maps.Map(document.getElementById('map-area'), {
    center: tokyo,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: tokyo,
    map: map,
    title: 'National Olympic Stadium',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
  });

  var marker2 = new google.maps.Marker({
    position: park,
    map: map,
    title: 'Equestrian Park',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });

  var marker3 = new google.maps.Marker({
    position: gym,
    map: map,
    title: 'Tokyo Metropolitan Gymnasium',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">National Olympic Stadium</h2>'+
    '<div id="bodyContent">'+
    '<p>This is the main venue for the games.</p>'+
    '</div>'+ '</div>';

  var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Equestrian Park</h2>'+
    '<div id="bodyContent">'+
    '<p>This is where the equestrains will compete.</p>'+
    '</div>'+ '</div>';

  var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Tokyo Metropolitan Gymnasium</h2>'+
    '<div id="bodyContent">'+
    '<p>This is where gymnastics will compete.</p>'+
    '</div>'+ '</div>';



    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
      });

    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
      });

}
