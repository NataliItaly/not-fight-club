import { character } from '../state.js';

export default function resetCharacter() {
  character.id = '';
  character.name = '';
  character.location = '';
}
