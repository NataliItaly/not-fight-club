import { character, opponent, saveGame } from '../state.js';
import updateSpheres from './updateSpheres.js';
import updatePoints from './updatePoints.js';
import winnerPopup from '../winnerPopup.js';
import createRandomZones from './createRandomZones.js';
import playSound from './playSound.js';

export default function createHits() {
  const opponentZones = createRandomZones();
  opponent.attackZones = opponentZones[0];
  opponent.defenceZones = opponentZones[1];
  console.log('opponent', opponent);

  const fightOutput = document.getElementById('fight-output');

  const characterAttack = character.attackZones[0];

  let characterResult = '';
  let opponentResult = '';

  const CRITICAL_CHANCE = 0.2;
  const characterCritical = Math.random() < CRITICAL_CHANCE;
  const opponentCritical = Math.random() < CRITICAL_CHANCE;

  if (characterCritical) {
    opponent.points = updatePoints(opponent.points, 20);

    const opponentHealth = document.getElementById(
      `health-value-${opponent.name}-${opponent.id}`,
    );
    opponentHealth.textContent = `${opponent.points}%`;
    characterResult =
      ' <strong class="fight__output-result">CRITICAL HIT with damage of 20%</strong>';

    playSound('critical');
  } else if (
    !opponent.defenceZones.includes(characterAttack) &&
    !characterCritical
  ) {
    opponent.points = updatePoints(opponent.points, 10);

    const opponentHealth = document.getElementById(
      `health-value-${opponent.name}-${opponent.id}`,
    );
    opponentHealth.textContent = `${opponent.points}%`;
    characterResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';

    playSound('hit');
  } else {
    characterResult =
      ', <strong class="fight__output-result">attack was blocked</strong>';

    playSound('block');
  }

  const opponentAttack = opponent.attackZones[0];
  if (opponentCritical) {
    character.points = updatePoints(character.points, 20);

    const characterHealth = document.getElementById(
      `health-value-${character.name}-${character.id}`,
    );
    characterHealth.textContent = `${character.points}%`;
    opponentResult =
      ' <strong class="fight__output-result">CRITICAL HIT with damage of 20%</strong>';

    setTimeout(() => playSound('critical'), 200);
  } else if (
    !character.defenceZones.includes(opponentAttack) &&
    !opponentCritical
  ) {
    character.points = updatePoints(character.points, 10);

    const characterHealth = document.getElementById(
      `health-value-${character.name}-${character.id}`,
    );
    characterHealth.textContent = `${character.points}%`;
    opponentResult =
      ' <strong class="fight__output-result">with damage of 10%</strong>';

    setTimeout(() => playSound('hit'), 200);
  } else {
    opponentResult =
      ', <strong class="fight__output-result">attack was blocked</strong>';

    setTimeout(() => playSound('block'), 200);
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

    /* opponent.name = '';
    opponent.id = '';
    opponent.attackZones = [];
    opponent.defenceZones = []; */

    setTimeout(() => {
      winnerPopup(character.points, opponent.points);
    }, 500);

    if (character.points === 0 && opponent.points > 0) {
      character.lost += 1;
    } else if (character.points === 0 && opponent.points === 0) {
      character.draw += 1;
    } else if (character.points > 0 && opponent.points === 0) {
      character.wins += 1;
    }
  }

  saveGame();
}
