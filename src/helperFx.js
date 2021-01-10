const EARTH_RADIUS = 3889.8
const { cos, PI, sin } = Math

export function cycleIndex(current, max, cycleBy) {
  let total = current + cycleBy
  let index = ((total % max) + max) % max
  return index
}

export function makeCircle(center, radius, points) {
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
