import { character, opponent } from '../state.js';
import updateSpheres from './updateSpheres.js';
import updatePoints from './updatePoints.js';

export default function createHits() {
  const fightOutput = document.getElementById('fight-output');

  const characterAttack = character.attackZones[0];

  let characterResult = '';
  let opponentResult = '';

  if (!opponent.defenceZones.includes(characterAttack)) {
    opponent.points = updatePoints(opponent.points, 10);

    const opponentHealth = document.getElementById(
      `health-value-${opponent.name}-${opponent.id}`,
    );
    opponentHealth.textContent = `${opponent.points}%`;
    characterResult = ' with damage of 10%';
  } else {
    characterResult = ', attack was blocked';
  }

  const opponentAttack = opponent.attackZones[0];
  if (!character.defenceZones.includes(opponentAttack)) {
    character.points = updatePoints(character.points, 10);

    const characterHealth = document.getElementById(
      `health-value-${character.name}-${character.id}`,
    );
    characterHealth.textContent = `${character.points}%`;
    opponentResult = ' with damage of 10%';
  } else {
    opponentResult = ', attack was blocked';
  }

  const characterOutput = `<p class="fight__output-text">${character.name} attacked ${opponent.name} to ${characterAttack}${characterResult} ${character.points}-${opponent.points}</p>`;
  const opponentOutput = `<p class="fight__output-text">${opponent.name} attacked ${character.name} to ${opponentAttack}${opponentResult} ${character.points}-${opponent.points}</p>`;

  fightOutput.innerHTML += characterOutput;
  fightOutput.innerHTML += opponentOutput;

  console.log(
    'normal hit',
    'character points',
    character.points,
    'opponent points',
    opponent.points,
  );
  updateSpheres(opponent);
  updateSpheres(character);
}
