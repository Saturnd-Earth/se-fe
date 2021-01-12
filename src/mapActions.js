import { makeCircle } from './helperFx.js'

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

export function removeAllRings() {
  window.earthRings.forEach( ring => {
    ring.setMap(null)
  })
  window.earthRings = []
}

export function showMap() {
  if (document.getElementById('map')) {
    document.getElementById('map').classList.remove('hidden')
  }
}
