// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

// Define a function to determine marker size by magnitude.
function markerSize(magnitude) {
  return magnitude;
};

// Define a function to determine marker color by depth.
function chooseColor(depth){
  if (depth < 10) return "#00FF00";
  else if (depth < 30) return "#ADFF2F";
  else if (depth < 50) return "#FFFF00";
  else if (depth < 70) return "#FFA500";
  else if (depth < 90) return "#FF4500";
  else return "#FF0000";
}

function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array.
  function onEachFeature(feature, layer) {

    // Give each feature a popup that describes the place, time, magnitude, and depth of the earthquake.
    layer.bindPopup(`<h3>Place: ${feature.properties.place}</h3><hr><p>Time: ${new Date(feature.properties.time)}</p></h3><hr><p>Magnitude: ${feature.properties.mag}</p></h3><hr><p>Depth (km): ${feature.geometry.coordinates[2]}</p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,

    // Point to layer used to alter markers
    pointToLayer: function (feature, latlng) {
      
      // Determine the style of markers based on properties
      var markers = {
        radius: markerSize(15000*feature.properties.mag),
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        color: "black",
        weight: 0.5,
        opacity: 1,
        stroke: true,
        fillOpacity: 0.75
      };
      return L.circle(latlng, markers);
    }
  });

  // Send our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
  Street: street,
  Topography: topo
  };

  // Create the overlay map object.
  var overlayMaps = {
  Earthquakes: earthquakes
  };

  // Create a map object, and set the default layers.
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4,
    layers: [street, earthquakes]
  });

  // Create a layer control with the baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);

  // Add legend
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {
  
      var div = L.DomUtil.create('div', 'info legend'),
      depth = [-10, 10, 30, 50, 70, 90];

      div.innerHTML+='<strong>Depth (km)</strong><br>'
  
      // Loop through density intervals 
      for (var i = 0; i < depth.length; i++) {
          div.innerHTML +=
          '<i style="background:' + chooseColor(depth[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</i> ' +
          depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  
  return div;
  };
  
  legend.addTo(myMap);
};