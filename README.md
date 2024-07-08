# Earthquake Data Visualization

## Overview
This project visualizes earthquake data from the past 7 days using Leaflet.js and D3.js. The data is fetched from the USGS (United States Geological Survey) API in GeoJSON format. The visualization includes an interactive map with markers representing earthquakes, where the size of each marker corresponds to the earthquake's magnitude and the color corresponds to its depth. Additionally, each marker has a popup with detailed information about the earthquake.

## Features
- **TileLayer**: Uses OpenStreetMap tiles to display the base map.
- **GeoJSON Data Fetching**: Fetches earthquake data from the USGS API.
- **Interactive Markers**: Markers on the map represent earthquakes, with size based on magnitude and color based on depth.
- **Popups**: Each marker has a popup showing the location, magnitude, and depth of the earthquake.
- **Legend**: Displays the depth ranges and their corresponding colors for easy reference.

## Requirements
### Map (60 points)
1. **TileLayer loads without error (20 points)**:
   - Ensures the base map is displayed correctly using OpenStreetMap tiles.

2. **Connects to GeoJSON API using D3 without error (20 points)**:
   - Fetches data from the USGS API and handles it without errors.

3. **Markers with size corresponding to earthquake magnitude (10 points)**:
   - Marker sizes reflect the magnitude of the earthquakes.

4. **A legend showing the depth and their corresponding color (10 points)**:
   - Provides a visual guide for understanding marker colors based on earthquake depth.

### Data Points (40 points)
1. **Data points scale with magnitude level (10 points)**:
   - Marker sizes are scaled according to the magnitude of the earthquakes.

2. **Data points colors change with depth level (10 points)**:
   - Marker colors vary based on the depth of the earthquakes.

3. **Each point has a tooltip with the Magnitude, the location, and depth (10 points)**:
   - Popups display the magnitude, location, and depth for each earthquake.

4. **All data points load in the correct locations (10 points)**:
   - Earthquake data points are accurately plotted on the map.

## Setup Instructions
1. **Clone the Repository**:
   ```sh
   git clone <repository-url>
