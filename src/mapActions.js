import { makeCircle } from './helperFx.js'

const RING_SIZES = [
  [0, 1], [1, 2], [2, 4], [4,8],
  [8, 16], [16, 32], [32, 64], [64, 128],
  [128, 256], [256, 512], [512, 1024],
  [1024, 2000], [2000, 4000], [4000, 6000],
  [6000, 8000], [8000, 10000], [10000, 12500]
];

export function addLike (center = window.earthMap.center, radius = 200, color = "#fa66ba") {
  const like = new window.google.maps.Circle({
    center,
    fillColor: color,
    fillOpacity: 0.8,
    radius,
    strokeColor: '#780000',
    strokeOpacity: 0.9,
    strokeWeight: 1,
  });
  like.setMap(window.earthMap);
  window.earthLikes.push(like)
}

export function addRing (center = window.earthMap.center, innerRadius = 100, outerRadius = 150, resolution = 30, color = "#FFC107") {
  let points = [ ...Array(resolution).keys() ];
  const outerCoords = makeCircle( center, outerRadius, points);
  const innerCoords = makeCircle( center, innerRadius, points.reverse());
  const ring = new window.google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    fillColor: color,
    fillOpacity: 0.35,
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 1,
  });
  ring.setMap(window.earthMap);
  window.earthRings.push(ring)
}

export function addShowPosition (center) {
  if (window.thisPosition) window.thisPosition.setMap(null)
  let icon = 'https://www.google.com/mapfiles/marker_white.png';
  let position = new window.google.maps.Marker({
    position: center,
    map: window.earthMap,
    icon: icon
  })
  window.thisPosition = position;

  window.google.maps.event.addListener(window.earthMap, 'zoom_changed', () => {
    if (window.thisPosition) window.thisPosition.setMap(null)
    let position = new window.google.maps.Marker({
      position: center,
      map: window.earthMap,
      icon: icon
    })
    window.thisPosition = position;
  })
}

export function hideMap() {
  document.getElementById('map').classList.add('hidden')
}

export function increaseRingSize( currentMax, center ) {
  let indexCurrentSize = RING_SIZES.findIndex( size => size[1] === currentMax )
  let [min, max] = RING_SIZES[ indexCurrentSize + 1 ]
  let points = [ ...Array(30).keys() ];
  const outerCoords = makeCircle( center, max, points);
  const innerCoords = makeCircle( center, min, points.reverse());
  window.earthRings[0].setPaths([outerCoords, innerCoords])
}

export function removeAllLikes() {
  window.earthLikes.forEach( like => {
    like.setMap(null)
  })
  window.earthLikes = []
}

export function removeAllRings() {
  window.earthRings.forEach( ring => {
    ring.setMap(null)
  })
  window.earthRings = []
}

export function setZoomToMaxDisplay() {
  let mapDiv = document.getElementById('map');
  let height = mapDiv.offsetHeight
  let width = mapDiv.offsetWidth
  let minDim = Math.min(width, height)
  let smallestRatio = (minDim / 256) + 2.5
  window.earthMap.setZoom(smallestRatio)
}

export function setZoomToFitCenter(userCenter, ringCenter) {
  if (document.querySelector('.gm-err-title')) return
  let s = Math.min(userCenter.lat, ringCenter.lat())
  let n = Math.max(userCenter.lat, ringCenter.lat())
  let e = Math.max(userCenter.lng, ringCenter.lng())
  let w = Math.min(userCenter.lng, ringCenter.lng())
  var allowedBounds = new window.google.maps.LatLngBounds(
  	new window.google.maps.LatLng(n, w),	// top left corner of map
  	new window.google.maps.LatLng(s, e)	// bottom right corner
  );

  let k = 1.0;
  n = allowedBounds .getNorthEast().lat() - k;
  e = allowedBounds .getNorthEast().lng() - k;
  s = allowedBounds .getSouthWest().lat() + k;
  w = allowedBounds .getSouthWest().lng() + k;
  let neNew = new window.google.maps.LatLng( n, e );
  let swNew = new window.google.maps.LatLng( s, w );
  let boundsNew = new window.google.maps.LatLngBounds( swNew, neNew );
  window.earthMap .fitBounds(boundsNew);
}

export function shrinkToHalf() {
  let mapDiv = document.getElementById('map');
  mapDiv.style.position = 'relative'
}

export function showMap() {
  if (document.getElementById('map')) {
    document.getElementById('map').classList.remove('hidden')
  }
}

export function spreadToFull() {
  let mapDiv = document.getElementById('map');
  mapDiv.style.position = 'static'
}
