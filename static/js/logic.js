// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 5); // Centered on San Francisco for example

// Add a tile layer to the map (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to get color based on earthquake depth
function getColor(depth) {
    return depth > 500 ? '#800026' :
           depth > 300 ? '#BD0026' :
           depth > 200 ? '#E31A1C' :
           depth > 100 ? '#FC4E2A' :
           depth > 50  ? '#FD8D3C' :
           '#FFEDA0';
}

// Function to get radius based on earthquake magnitude
function getRadius(magnitude) {
    return magnitude * 2; // Adjust this value for appropriate marker size
}

// Fetch earthquake data from USGS API for the last 7 days using fetch API
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(response => response.json())
    .then(data => {
        // Log the entire data object to check its structure
        console.log('Data fetched: ', data);

        // Verify if the features array exists and has elements
        if (data && data.features) {
            console.log('Number of features: ', data.features.length); // Check the number of features

            // Plot the earthquake data on the map
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {
                        radius: getRadius(feature.properties.mag),
                        fillColor: getColor(feature.geometry.coordinates[2]),
                        color: "#000",
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                    });
                },
                onEachFeature: function (feature, layer) {
                    layer.bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p><p>Magnitude: " + feature.properties.mag + "</p><p>Depth: " + feature.geometry.coordinates[2] + " km</p>");
                }
            }).addTo(map);

            // Create a legend
            var legend = L.control({ position: 'bottomright' });

            legend.onAdd = function (map) {
                var div = L.DomUtil.create('div', 'info legend'),
                    depths = [0, 50, 100, 200, 300, 500],
                    labels = [];

                div.innerHTML = '<strong>Depth (km)</strong><br>';

                for (var i = 0; i < depths.length; i++) {
                    div.innerHTML +=
                        '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                        depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
                }

                return div;
            };

            legend.addTo(map);
        } else {
            console.log('No features found in the data');
        }
    })
    .catch(error => {
        console.log('Error fetching data: ', error);
    });









