import { constants, opponent } from '../state.js';
import getRandomNumber from './getRandomNumber.js';

export default function createOpponent() {
  const names = constants.opponentNames;

  opponent.id = getRandomNumber(constants.charactersNumber, 1);
  opponent.name = names[getRandomNumber(names.length - 1)];
}
