const EARTH_RADIUS = 3889.8
const { cos, PI, sin } = Math
const numColors = 255*255*255

export function cycleIndex(current, max, cycleBy) {
  let total = current + cycleBy
  let index = ((total % max) + max) % max
  return index
}

export function makeCircle(center, radius, points) {
  let radiusInLat = rad_to_deg(radius) / EARTH_RADIUS;
  let radiusInLng = radiusInLat / cos( deg_to_rad( center.lat() ) );
  let anglePerCircleRegion = 2 * PI / points.length;

  return points.map( i => {
    let theta = i * anglePerCircleRegion;
    let lat = center.lat() + (radiusInLat * sin(theta));
    let lng = center.lng() + (radiusInLng * cos(theta));

    return({lat, lng})
  });
}

export function colorStream(numRings) {
  let increment = Math.floor(numColors / numRings)
  return [ ...Array(numRings).keys() ].map( ringNum => bigToHex(ringNum * increment))
}

export function deg_to_rad(num) {
  return (PI / 180) * num
}

export function rad_to_deg (num) {
  return (180 / PI) * num
}

function bigToHex(num) {
  let b = num % 255
  let g = Math.floor(num / 255) % 255
  let r = Math.floor((num / 255) / 255)
  return `#${medToHex( r )}${medToHex( g )}${medToHex( b )}`
}

function medToHex(num) {
  let big = Math.floor(num / 16)
  let little = num % 16
  return `${smallToHex( big )}${smallToHex( little )}`
}

function smallToHex(num) {
  let nonDigits = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  }
  return nonDigits[num] || num
}
