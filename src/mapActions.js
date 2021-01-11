import { makeCircle } from './helperFx.js'

export function addLike (center = window.earthMap.center, radius = 150, color = "#940054") {
  const like = new window.google.maps.Circle({
    center,
    fillColor: color,
    fillOpacity: 0.8,
    radius,
    strokeColor: color,
    strokeOpacity: 0.8,
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

export function addLike ( center = window.earthMap.center, radius = 1000, fillColor = "#bf0066" ) {
  const like = new window.google.maps.Circle({
    center,
    fillColor,
    fillOpacity: 0.35,
    radius,
    strokeColor: fillColor,
    strokeOpacity: 0.8,
    strokeWeight: 1,
  });
  like.setMap(window.earthMap);
  window.earthLikes.push(like)
}

export function hideMap() {
  document.getElementById('map').classList.add('hidden')
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

export function showMap() {
  document.getElementById('map').classList.remove('hidden')
}
