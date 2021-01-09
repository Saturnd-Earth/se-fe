const EARTH_RADIUS = 3889.8
const { cos, PI, sin } = Math
let addRing;

function initMap(lat = 0, lng = 0) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat, lng },
  });

  addRing = function(
    center = map.center,
    innerRadius = 100,
    outerRadius = 150,
    resolution = 30,
    color = "#FFC107",
  ) {
    let points = [...Array(resolution).keys()];
    const outerCoords = makeCircle( center, outerRadius, points);
    const innerCoords = makeCircle( center, innerRadius, points.reverse());

    const ring = new google.maps.Polygon({
      paths: [outerCoords, innerCoords],
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
    });

    ring.setMap(map);
  }
}

function makeCircle(center, radius, points) {
  let radiusInLat = (180 / PI) * (radius / EARTH_RADIUS);
  let radiusInLng = radiusInLat / cos(center.lat() * (PI / 180));
  let anglePerCircleRegion = 2 * PI / points.length;

  return points.map( i => {
    let theta = i * anglePerCircleRegion;
    let lat = center.lat() + (radiusInLat * sin(theta));
    let lng = center.lng() + (radiusInLng * cos(theta));

    return({lat, lng})
  });
}

window.setTimeout( () => {
  addRing()
  addRing(undefined, 50, 60)
  let pos = () => .5
  addRing({lat: pos, lng: pos}, 50, 60, 4, '#888')
}, 10);
