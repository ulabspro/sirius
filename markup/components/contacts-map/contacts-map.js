// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initContactsMap);

function initContactsMap() {
    var myLatlng = new google.maps.LatLng(55.75049687,37.6247406);

    var mapOptions = {
      zoom: 11,
      center: myLatlng,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"saturation":"18"},{"lightness":"-55"},{"visibility":"simplified"},{"color":"#4484a1"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"saturation":"28"},{"lightness":"42"},{"gamma":"2.01"},{"weight":"1"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aaced9"},{"visibility":"on"}]}]
    }

    var mapElement = document.getElementById('contacts-map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var image = {
        url: '../static/images/general/map-pic.png',
        size: new google.maps.Size(58, 71),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(58, 71)
    };
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });
}
