export default function createSpheres(fighter) {
  const spheresNum = fighter.points / 10;
  console.log('fighter', fighter.name, 'fighter points', spheresNum);
  let spheresHtml = '';
  let healthEffect = '<div class="health__effect">';

  let sphereClass = '';
  if (spheresNum <= 7) sphereClass = 'health__sphere_carefull';
  if (spheresNum <= 5) sphereClass = 'health__sphere_warning';
  if (spheresNum <= 2) sphereClass = 'health__sphere_alert';
  console.log(sphereClass);

  for (let i = 0; i < spheresNum; i++) {
    spheresHtml += `<div class="health__sphere ${sphereClass} health__sphere${i + 1}" id="sphere${i + 1}-${fighter.name}-${fighter.id}"></div>`;
  }
  for (let i = 0; i < spheresNum; i++) {
    healthEffect += `<div class="health__shadow health__shadow${i + 1}" id="shadow${i + 1}-${fighter.name}-${fighter.id}"></div>`;
  }
  healthEffect += '</div>';

  return spheresHtml + healthEffect;
}

/**
   *        <div class="health__sphere" id="sphere1"></div>
            <div class="health__sphere" id="sphere2"></div>
            <div class="health__sphere" id="sphere3"></div>
            <div class="health__sphere" id="sphere4"></div>
            <div class="health__sphere" id="sphere5"></div>
            <div class="health__sphere" id="sphere6"></div>
            <div class="health__sphere" id="sphere7"></div>
            <div class="health__sphere" id="sphere8"></div>
            <div class="health__sphere" id="sphere9"></div>
            <div class="health__sphere" id="sphere10"></div>
            <div class="health__effect">
                <div class="health__shadow" id="shadow1"></div>
                <div class="health__shadow" id="shadow2"></div>
                <div class="health__shadow" id="shadow3"></div>
                <div class="health__shadow" id="shadow4"></div>
                <div class="health__shadow" id="shadow5"></div>
                <div class="health__shadow" id="shadow6"></div>
                <div class="health__shadow" id="shadow7"></div>
                <div class="health__shadow" id="shadow8"></div>
                <div class="health__shadow" id="shadow9"></div>
                <div class="health__shadow" id="shadow10"></div>
            </div>
   */
