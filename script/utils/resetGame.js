import { character, opponent, saveGame } from '../state.js';

export default function resetGame() {
  character.points = 100;
  character.attackZones = [];
  character.defenceZones = [];
  character.gameOutput = [];

  opponent.id = '';
  opponent.name = '';
  opponent.points = 100;
  opponent.attackZones = [];
  opponent.defenceZones = [];

  saveGame();
}
