var mymap = L.map('map', {scrollWheelZoom:false}).setView([48.463811, 35.055115], 18);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqbG5zemNxcDFoaHUzd25qZ2JvdzNzdWgifQ.XqvnumCgrZolpN55Tjsfug', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYm9saWxpeWVsIiwiYSI6ImNqbG5zemNxcDFoaHUzd25qZ2JvdzNzdWgifQ.XqvnumCgrZolpN55Tjsfug'
}).addTo(mymap);



var mainIcon = L.icon({
    iconUrl:'//partnerdecor.com.ua/wp-content/themes/partnerdecor/source/build/images/contacts/icon.png',
    iconSize: [27, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -90],
    shadowUrl: '//partnerdecor.com.ua/wp-content/themes/partnerdecor/source/build/images/contacts/iconShadow.png',
    shadowSize: [34, 8],
    shadowAnchor: [0, 40]
});

//L.marker([48.463811, 35.055115], {icon: mainIcon}).addTo(mymap);

var prodIcon = L.icon({
    iconUrl:'//partnerdecor.com.ua/wp-content/themes/partnerdecor/source/build/images/contacts/icon.png',
    iconSize: [27, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -90],
    shadowUrl: '//partnerdecor.com.ua/wp-content/themes/partnerdecor/source/build/images/contacts/iconShadow.png',
    shadowSize: [34, 8],
    shadowAnchor: [0, 40]
});

var promise = $.getJSON("//partnerdecor.com.ua/wp-content/themes/partnerdecor/source/business.json");
    promise.then(function(data) {
        var allbusinesses = L.geoJson(data);
        var mainOffice = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "MainOffice";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: mainIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });
        var stock = L.geoJson(data, {
            filter: function(feature, layer) {
                return feature.properties.BusType == "Stock";
            },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: prodIcon
                }).on('mouseover', function() {
                    this.bindPopup(feature.properties.Name).openPopup();
                });
            }
        });


        mymap.fitBounds(allbusinesses.getBounds(), {
            padding: [20, 20]
        });

        mainOffice.addTo(mymap)

         
        $("#mainIcon").click(function() {
            mymap.addLayer(mainOffice)
            mymap.removeLayer(stock)
        });
        $("#prodIcon").click(function() {
            mymap.addLayer(stock)
            mymap.removeLayer(mainOffice)
        });
        $("#allbus").click(function() {
            mymap.addLayer(mainOffice)
            // mymap.addLayer(gas)
            // mymap.addLayer(mail)
            // mymap.addLayer(park)
            // mymap.addLayer(bank)
            // mymap.addLayer(hospital)
            // mymap.addLayer(shop)
        });

        
    });