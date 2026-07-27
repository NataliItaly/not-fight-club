import { character, opponent } from '../state.js';
import updateSpheres from './updateSpheres.js';
import updatePoints from './updatePoints.js';

export default function createCriticalHits() {
  const fightOutput = document.getElementById('fight-output');
  let characterResult = '';
  let opponentResult = '';

  const characterAttack = character.attackZones[0];

  const opponentHealth = document.getElementById(
    `health-value-${opponent.name}-${opponent.id}`,
  );
  if (opponent.defenceZones.includes(characterAttack)) {
    opponent.points = updatePoints(opponent.points, 10);
    characterResult = ' with damage of 10%';
  } else {
    opponent.points = updatePoints(opponent.points, 20);
    characterResult = ' with damage of 20%';
  }
  opponentHealth.textContent = `${opponent.points}%`;

  const opponentAttack = opponent.attackZones[0];

  const characterHealth = document.getElementById(
    `health-value-${character.name}-${character.id}`,
  );
  if (character.defenceZones.includes(opponentAttack)) {
    character.points = updatePoints(character.points, 10);
    opponentResult = ' with damage of 10%';
  } else {
    character.points = updatePoints(character.points, 20);
    opponentResult = ' with damage of 20%';
  }
  characterHealth.textContent = `${character.points}%`;

  const characterOutput = `<p class="fight__output-text">${character.name} made <strong>CRITICAL HIT</strong> ${opponent.name} to ${characterAttack}${characterResult} ${character.points}-${opponent.points}</p>`;
  const opponentOutput = `<p class="fight__output-text">${opponent.name} made <strong>CRITICAL HIT</strong> ${character.name} to ${opponentAttack}${opponentResult} ${character.points}-${opponent.points}</p>`;

  fightOutput.innerHTML += characterOutput;
  fightOutput.innerHTML += opponentOutput;
  console.log(
    'CRITICAL',
    'character points',
    character.points,
    'opponent points',
    opponent.points,
  );
  updateSpheres(character);
  updateSpheres(opponent);
}
