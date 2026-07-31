export default function createSpheres(fighter) {
  const spheresNum = fighter.points / 10;
  let spheresHtml = '';
  let healthEffect = '<div class="health__effect">';

  let sphereClass = '';
  if (spheresNum <= 7) sphereClass = 'health__sphere_carefull';
  if (spheresNum <= 5) sphereClass = 'health__sphere_warning';
  if (spheresNum <= 2) sphereClass = 'health__sphere_alert';

  for (let i = 0; i < spheresNum; i++) {
    spheresHtml += `<div class="health__sphere ${sphereClass} health__sphere${i + 1}" id="sphere${i + 1}-${fighter.name}-${fighter.id}"></div>`;
  }
  for (let i = 0; i < spheresNum; i++) {
    healthEffect += `<div class="health__shadow health__shadow${i + 1}" id="shadow${i + 1}-${fighter.name}-${fighter.id}"></div>`;
  }
  healthEffect += '</div>';

  return spheresHtml + healthEffect;
}
