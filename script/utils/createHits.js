import getRandomNumber from './getRandomNumber.js';
import { character, opponent, constants } from '../state.js';

export default function createHits() {
  const fightOutput = document.getElementById('fight-output');

  const characterAttack = character.attackZones[0];
  //constants.body[getRandomNumber(constants.body.length - 1)];
  console.log('character attack', characterAttack);
  if (!opponent.defenceZones.includes(characterAttack)) {
    opponent.points -= 10;

    const opponentHealth = document.getElementById(
      `health-value-${opponent.name}-${opponent.id}`,
    );
    opponentHealth.textContent = `${opponent.points}%`;

    const currentOutput = `<p class="fight__output-text">${character.name} attacked ${opponent.name} to ${characterAttack} and deal 10 damage</p>`;
    fightOutput.innerHTML += currentOutput;
  }

  const opponentAttack = opponent.attackZones[0];
  //constants.body[getRandomNumber(constants.body.length - 1)];
  console.log('opponent attack', opponentAttack);
  if (!character.defenceZones.includes(opponentAttack)) {
    character.points -= 10;

    const characterHealth = document.getElementById(
      `health-value-${character.name}-${character.id}`,
    );
    characterHealth.textContent = `${character.points}%`;

    const currentOutput = `<p class="fight__output-text">${opponent.name} attacked ${character.name} to ${opponentAttack} and deal 10 damage</p>`;
    fightOutput.innerHTML += currentOutput;
  }
}
