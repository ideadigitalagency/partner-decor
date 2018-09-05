var mymap = L.map('map', {scrollWheelZoom:false}).setView([48.463811, 35.055115], 18);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqbG5zemNxcDFoaHUzd25qZ2JvdzNzdWgifQ.XqvnumCgrZolpN55Tjsfug', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqbG5zemNxcDFoaHUzd25qZ2JvdzNzdWgifQ.XqvnumCgrZolpN55Tjsfug'
}).addTo(mymap);

var mainIcon = L.icon({
    iconUrl:'https://simejnyj.vn.ua/wp-content/themes/simejnyj_comfort/source/build/images/infrastructure/school_icon.png',
    iconSize: [36, 58],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -90],
    shadowUrl: 'https://simejnyj.vn.ua/wp-content/themes/simejnyj_comfort/source/build/images/infrastructure/school_icon.png',
    shadowSize: [34, 8],
    shadowAnchor: [0, 40]
});

L.marker([48.463811, 35.055115], {icon: mainIcon}).addTo(mymap);

var prodIcon = L.icon({
    iconUrl:'https://simejnyj.vn.ua/wp-content/themes/simejnyj_comfort/source/build/images/infrastructure/school_icon.png',
    iconSize: [36, 58],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -90],
    shadowUrl: 'https://simejnyj.vn.ua/wp-content/themes/simejnyj_comfort/source/build/images/infrastructure/school_icon.png',
    shadowSize: [34, 8],
    shadowAnchor: [0, 40]
});

var promise = $.getJSON("ness");
    promise.then(function(data) {
        //var allbusinesses = L.geoJson(data);
        var prodIcon = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Main";
            },
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, {
                        icon: schoolIcon
                    }).on('mouseover', function() {
                        this.bindPopup(feature.properties.Name).openPopup();
                    });
                }
            });
        var mainIcon = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Production";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: hospitalIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });         
        
        $("#mainIcon").click(function() {
            mymap.addLayer(mainIcon)
            mymap.removeLayer(prodIcon)
        });
        
        $("#prodIcon").click(function() {
            mymap.addLayer(prodIcon)
            mymap.removeLayer(mainIcon)
        });
});






// var mymap = L.map('infrastructure', {scrollWheelZoom:false}).setView([49.220372, 28.561154], 14);
// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqZTF3NmY2aDUzODcyd3FvbmFxcmswNnYifQ.Dq2XLQBb_NNhEMw87zLjkg', {
//     attribution: 'Map data &copy; <a href="//openstreetmap.org">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 22,
//     id: 'your.mapbox.project.id',
//     accessToken: 'your.mapbox.public.access.token'
// }).addTo(mymap);
