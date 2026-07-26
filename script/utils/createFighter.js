export default function createFighter(fighter) {
  return `
    <div class="fighter" id="${fighter.name}-${fighter.id}">
      <h3 class="fighter__name">${fighter.name}</h3>
      <img class="fighter__img" src="./assets/aliens/${fighter.id}.png" alt="" class="fighter__img">
    </div>
  `;
}
