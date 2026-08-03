import getRandomNumber from './getRandomNumber.js';
import { constants } from '../state.js';

export default function createRandomZones() {
  const attackZones = [
    constants.body[getRandomNumber(constants.body.length - 1)],
  ];

  const defence = [];
  while (defence.length < 2) {
    const n = getRandomNumber(constants.body.length - 1);
    if (!defence.includes(n)) {
      defence.push(n);
    }
  }
  const defenceZones = defence.map((el) => constants.body[el]);

  return [attackZones, defenceZones];
}
