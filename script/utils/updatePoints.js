export default function updatePoints(points, damage) {
  return points - damage <= 0 ? 0 : points - damage;
}
