import { character, opponent } from '../state.js';
import updateSpheres from './updateSpheres.js';
import updatePoints from './updatePoints.js';
import winnerPopup from '../winnerPopup.js';

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
    characterResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';
  } else {
    opponent.points = updatePoints(opponent.points, 20);
    characterResult =
      ' <strong class="fight__output-result">with damage of 20%</strong>';
  }
  opponentHealth.textContent = `${opponent.points}%`;

  const opponentAttack = opponent.attackZones[0];

  const characterHealth = document.getElementById(
    `health-value-${character.name}-${character.id}`,
  );
  if (character.defenceZones.includes(opponentAttack)) {
    character.points = updatePoints(character.points, 10);
    opponentResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';
  } else {
    character.points = updatePoints(character.points, 20);
    opponentResult =
      ' <strong class="fight__output-result">with damage of 20%</strong>';
  }
  characterHealth.textContent = `${character.points}%`;

  const characterOutput = `<p class="fight__output-text"><strong class="fight__output-character">${character.name}</strong> made <strong class="fight__output-critical">CRITICAL HIT</strong> <strong class="fight__output-opponent">${opponent.name}</strong> to <strong class="fight__output-body">${characterAttack}</strong>${characterResult}</p>`;
  const opponentOutput = `<p class="fight__output-text"><strong class="fight__output-opponent">${opponent.name}</strong> made <strong class="fight__output-critical">CRITICAL HIT</strong> <strong class="fight__output-character">${character.name}</strong> to <strong class="fight__output-body">${opponentAttack}</strong>${opponentResult}</p>`;

  fightOutput.innerHTML += characterOutput;
  fightOutput.innerHTML += opponentOutput;

  updateSpheres(character);
  updateSpheres(opponent);

  if (character.points <= 0 || opponent.points <= 0) {
    winnerPopup(character.points);
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
