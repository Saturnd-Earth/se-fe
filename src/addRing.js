const EARTH_RADIUS = 3889.8
const { cos, PI, sin } = Math

export function addRing (
  center = window.earthMap.center,
  innerRadius = 100,
  outerRadius = 150,
  resolution = 30,
  color = "#FFC107",
) {
  let points = [...Array(resolution).keys()];
  const outerCoords = makeCircle( center, outerRadius, points);
  const innerCoords = makeCircle( center, innerRadius, points.reverse());

  const ring = new window.google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
  });

  ring.setMap(window.earthMap);
  return ring
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
