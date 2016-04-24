'use strict';

let map, heatmap;

function initMap() {
  map = new google.maps.Map($("#map")[0], {
    zoom: 4,
    center: {lat: 4.2180, lng: 115.6628},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  let gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(27.24, 140.886),
    new google.maps.LatLng(18.369, 122.276),
    new google.maps.LatLng(18.37, 122.282),
    new google.maps.LatLng(17.954, 121.994),
    new google.maps.LatLng(17.954, 122),
    new google.maps.LatLng(17.955, 121.867),
    new google.maps.LatLng(17.279, 121.542),
    new google.maps.LatLng(17.277, 121.554),
    new google.maps.LatLng(16.73, 121.954),
    new google.maps.LatLng(16.761, 121.193),
    new google.maps.LatLng(16.603, 121.345),
    new google.maps.LatLng(16.593, 121.343),
    new google.maps.LatLng(16.46, 121.401),
    new google.maps.LatLng(16.458, 121.413),
    new google.maps.LatLng(16.125, 121.384),
    new google.maps.LatLng(16.04, 121.202),
    new google.maps.LatLng(14.889, 120.402),
    new google.maps.LatLng(14.34, 120.997),
    new google.maps.LatLng(13.091, 121.115),
    new google.maps.LatLng(11.148, 122.976),
    new google.maps.LatLng(11.245, 122.063),
    new google.maps.LatLng(12.472, 107.947),
    new google.maps.LatLng(11.963, 108.964),
    new google.maps.LatLng(11.964, 108.957),
    new google.maps.LatLng(5.264, 118.209),
    new google.maps.LatLng(5.262, 118.219),
    new google.maps.LatLng(5.256, 118.26),
    new google.maps.LatLng(5.376, 115.525),
    new google.maps.LatLng(4.768, 117.989),
    new google.maps.LatLng(4.752, 115.699),
    new google.maps.LatLng(4.365, 117.249),
    new google.maps.LatLng(4.503, 114.057),
    new google.maps.LatLng(4.043, 117.062),
    new google.maps.LatLng(3.981, 116.976),
    new google.maps.LatLng(5.443, 105.388),
    new google.maps.LatLng(4.073, 113.847),
    new google.maps.LatLng(4.035, 114.06),
    new google.maps.LatLng(2.704, 117.755),
    new google.maps.LatLng(3.765, 108.282),
    new google.maps.LatLng(3.761, 108.305),
    new google.maps.LatLng(1.492, 117.232),
    new google.maps.LatLng(0.532, 122.436),
    new google.maps.LatLng(1.226, 117.164),
    new google.maps.LatLng(0.811, 117.546),
    new google.maps.LatLng(0.563, 117.641),
    new google.maps.LatLng(0.245, 117.018),
    new google.maps.LatLng(0.277, 116.607),
    new google.maps.LatLng(-0.031, 117.148),
    new google.maps.LatLng(-0.147, 117.179),
    new google.maps.LatLng(-0.103, 116.81),
    new google.maps.LatLng(-0.104, 116.82),
    new google.maps.LatLng(-0.271, 116.642),
    new google.maps.LatLng(-0.806, 119.796),
    new google.maps.LatLng(-0.424, 116.984),
    new google.maps.LatLng(-3.009, 120.197),
    new google.maps.LatLng(-7.183, 111.691),
    new google.maps.LatLng(-8.106, 118.022),
    new google.maps.LatLng(-8.113, 112.921),
    new google.maps.LatLng(-8.114, 112.93),
    new google.maps.LatLng(-8.123, 112.928),
    new google.maps.LatLng(18.839, 98.17),
    new google.maps.LatLng(18.521, 99.657),
    new google.maps.LatLng(19.409, 94.092),
    new google.maps.LatLng(18.741, 98.201),
    new google.maps.LatLng(18.444, 99.777),
    new google.maps.LatLng(18.546, 99.002),
    new google.maps.LatLng(19.06, 95.793),
    new google.maps.LatLng(19.058, 95.803),
    new google.maps.LatLng(18.639, 97.838),
    new google.maps.LatLng(19.186, 94.294),
    new google.maps.LatLng(19.212, 94.058),
    new google.maps.LatLng(19.177, 94.292),
    new google.maps.LatLng(19.115, 94.151),
    new google.maps.LatLng(19.055, 94.19),
    new google.maps.LatLng(18.839, 94.271),
    new google.maps.LatLng(18.838, 94.28),
    new google.maps.LatLng(18.311, 97.335),
    new google.maps.LatLng(18.865, 93.718),
    new google.maps.LatLng(18.051, 98.326),
    new google.maps.LatLng(17.98, 98.394),
  ];
}

$(document).ready(() => {
  initMap();
  // toggleHeatmap();
  // changeRadius();
  // changeOpacity();
  // changeGradient();
});
