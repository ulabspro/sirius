    var infowindow = null;
    var gmarkers = [];

    var defaultIcon = {
        url: '../static/images/general/map-pic.png',
        size: new google.maps.Size(58, 71),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(58, 71)
    }

    var activeIcon = {
        url: '../static/images/general/map-pic-active.png',
        size: new google.maps.Size(58, 71),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(58, 71)
    }
    
    var shape = {
        coord: [9,0,6,1,4,2,2,4,0,8,0,12,1,14,2,16,5,19,7,23,8,26,9,30,9,34,11,34,11,30,12,26,13,24,14,21,16,18,18,16,20,12,20,8,18,4,16,2,15,1,13,0],
        type: 'poly'
    };

    $(document).ready(function () { initialize();  });

    function initialize() {

        var centerMap = new google.maps.LatLng(55.75378149, 37.65143394);

        var myOptions = {
            zoom: 14,
            center: centerMap,
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"saturation":"18"},{"lightness":"-55"},{"visibility":"simplified"},{"color":"#4484a1"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"saturation":"28"},{"lightness":"42"},{"gamma":"2.01"},{"weight":"1"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aaced9"},{"visibility":"on"}]}]
        }

        var map = new google.maps.Map(document.getElementById("partners-map"), myOptions);

        setMarkers(map, sites);
        infowindow = new google.maps.InfoWindow({
            content: "loading..."
        });

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
    }

    var sites = [
        ['Магнит', 55.75541546, 37.60704323, 1, '._first'],
        ['Пятерочка', 55.75971385, 37.62738511, 2, '._second']
    ];



    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites[0],
                icon: defaultIcon,
                zIndex: sites[3],
                html: sites[4],
                zoom: 11,
                scrollwheel: false
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                for (var i=0; i<gmarkers.length; i++) {
                   gmarkers[i].setIcon(defaultIcon);
                }
                this.setIcon(activeIcon);

                $(this.html).addClass('show').siblings().removeClass('show');
            });
            gmarkers.push(marker);


        }

        marker.setIcon(activeIcon);

        $('.partners-map-layer__close').click(function () {
            $('.partners-map-layer').removeClass('show');
            for (var i=0; i<gmarkers.length; i++) {
               gmarkers[i].setIcon(defaultIcon);
            }
        });
    }