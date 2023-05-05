# leaflet-challenge

# Earthquake Data Visualization Using Leaflet

![1-Logo](https://user-images.githubusercontent.com/119986667/236019967-bae389bd-1249-44e1-917c-a0321381be78.png)

## Hypothetical Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I was tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Create the Earthquake Visualization
1. Get your dataset:
  * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and choose a dataset to visualize.
  * Choose a dataset and use the URL for its JSON to pull in the data for the visualization.

2. Import and visualize the data by doing the following:
  * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude. The data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
  * Include popups that provide additional information about the earthquake when clicking the associated marker.
  * Create a legend that will provide context for your map data.

<img width="1279" alt="Screen Shot 2023-05-04 at 7 37 07 PM" src="https://user-images.githubusercontent.com/119986667/236354353-b364613d-7797-4881-b359-7d54fb136a96.png">

<img width="1282" alt="Screen Shot 2023-05-04 at 7 38 06 PM" src="https://user-images.githubusercontent.com/119986667/236354439-0c0dc2f2-9a1d-4b5a-9d3d-d2997d31b16b.png">

<img width="1280" alt="Screen Shot 2023-05-04 at 7 40 08 PM" src="https://user-images.githubusercontent.com/119986667/236354452-f9458b2c-2baf-469a-a336-b4948b898fd8.png">
