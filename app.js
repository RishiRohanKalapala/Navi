// Initialize the map with central coordinates of the Ganga River
var map = L.map('map').setView([25.0, 83.0], 6);  // Ganga Basin center

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Define layers for Ganga River and its tributaries
var gangaRiverLayer = L.geoJSON({
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [78.2676, 30.0869],  // Rishikesh
            [78.1642, 29.9457],  // Haridwar
            [80.3319, 26.4499],  // Kanpur
            [82.9739, 25.3176],  // Varanasi
            [85.1376, 25.5941],  // Patna
            [87.0160, 25.2424],  // Bhagalpur
            [88.3639, 22.5726]   // Kolkata
        ]
    }
}, {
    style: { color: 'blue', weight: 4 }
}).bindPopup("Ganga River");

// Define a layer for Yamuna River
var yamunaRiverLayer = L.geoJSON({
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [81.8463, 25.4358],  // Allahabad
            [77.2090, 28.6139]   // Delhi
        ]
    }
}, {
    style: { color: 'green', weight: 4 }
}).bindPopup("Yamuna River");

// Define a layer for Ghaghara River
var ghagharaRiverLayer = L.geoJSON({
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [82.1391, 26.7733],  // Faizabad
            [84.1277, 26.6671]   // Ballia
        ]
    }
}, {
    style: { color: 'purple', weight: 4 }
}).bindPopup("Ghaghara River");

// Add more tributaries as needed...

// Create a layer group for cities
var citiesLayer = L.layerGroup([
    L.marker([30.0869, 78.2676]).bindPopup("Rishikesh"),
    L.marker([29.9457, 78.1642]).bindPopup("Haridwar"),
    L.marker([26.4499, 80.3319]).bindPopup("Kanpur"),
    L.marker([25.3176, 82.9739]).bindPopup("Varanasi"),
    L.marker([25.5941, 85.1376]).bindPopup("Patna"),
    L.marker([25.2424, 87.0160]).bindPopup("Bhagalpur"),
    L.marker([22.5726, 88.3639]).bindPopup("Kolkata")
]);

// Layer controls to toggle rivers
var baseMaps = {
    "Ganga River": gangaRiverLayer,
    "Yamuna River": yamunaRiverLayer,
    "Ghaghara River": ghagharaRiverLayer
};

var overlayMaps = {
    "Cities": citiesLayer
};

// Add layer control
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Add the default layers to the map
gangaRiverLayer.addTo(map);
citiesLayer.addTo(map);
