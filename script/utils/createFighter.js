import createSpheres from './createSpheres.js';

export default function createFighter(fighter) {
  const reflectClass = fighter.location ? 'fighter__img_reflect' : '';

  return `
    <div class="fighter" id="${fighter.name}-${fighter.id}">
      <h3 class="fighter__name">${fighter.name}</h3>
      <div class="fighter__float">
        <img class="fighter__img ${reflectClass}" src="./assets/aliens/${fighter.id}.png" alt="" class="fighter__img">
      </div>
      <div class="health" id="health-${fighter.name}-${fighter.id}">
        <div class="health__bar">
          <div class="health__bar-container" id="progess-${fighter.name}-${fighter.id}">
            ${createSpheres(fighter)}
          </div>
        </div>
        <div class="health__value" id="health-value-${fighter.name}-${fighter.id}">100%</div>
      </div>
    </div>
  `;
}
