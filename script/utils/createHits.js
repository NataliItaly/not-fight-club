import { character, opponent } from '../state.js';
import updateSpheres from './updateSpheres.js';
import updatePoints from './updatePoints.js';
import winnerPopup from '../winnerPopup.js';

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
    characterResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';
  } else {
    characterResult =
      ', <strong class="fight__output-result">attack was blocked</strong>';
  }

  const opponentAttack = opponent.attackZones[0];
  if (!character.defenceZones.includes(opponentAttack)) {
    character.points = updatePoints(character.points, 10);

    const characterHealth = document.getElementById(
      `health-value-${character.name}-${character.id}`,
    );
    characterHealth.textContent = `${character.points}%`;
    opponentResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';
  } else {
    opponentResult =
      ', <strong class="fight__output-result">attack was blocked</strong>';
  }

  const characterOutput = `<p class="fight__output-text"><strong class="fight__output-character">${character.name}</strong> attacked <strong class="fight__output-opponent">${opponent.name}</strong> to <strong class="fight__output-body">${characterAttack}</strong>${characterResult}</p>`;
  const opponentOutput = `<p class="fight__output-text"><strong class="fight__output-opponent">${opponent.name}</strong> attacked <strong class="fight__output-character">${character.name}</strong> to <strong class="fight__output-body">${opponentAttack}</strong>${opponentResult}</p>`;

  character.gameOutput.push(characterOutput, opponentOutput);
  fightOutput.innerHTML += characterOutput;
  fightOutput.innerHTML += opponentOutput;

  updateSpheres(opponent);
  updateSpheres(character);

  if (character.points <= 0 || opponent.points <= 0) {
    character.isGameStarted = false;
    winnerPopup(character.points);
    if (character.points === 0 && opponent.points > 0) {
      character.lost += 1;
    } else if (character.points === 0 && opponent.points === 0) {
      character.draw += 1;
    } else if (character.points > 0 && opponent.points === 0) {
      character.wins += 1;
    }
  }
}
