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
  let biggestRatio = minDim / 256
  window.earthMap.setZoom(biggestRatio)
}

export function shrinkToHalf() {
  console.log('SHRINK');
  let mapDiv = document.getElementById('map');
  mapDiv.style.position = 'relative'
}

export function showMap() {
  if (document.getElementById('map')) {
    document.getElementById('map').classList.remove('hidden')
  }
}

export function spreadToFull() {
  console.log('SPREAD');
  let mapDiv = document.getElementById('map');
  mapDiv.style.position = 'static'
}
