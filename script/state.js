export const character = {
  id: '',
  name: '',
  location: '',
  defenceZones: [],
  attackZones: [],
  points: 100,
  wins: 0,
  lost: 0,
  draw: 0,
  isGameStarted: false,
  gameOutput: [],
};

export const opponent = {
  id: '',
  name: '',
  defenceZones: [],
  attackZones: [],
  points: 100,
};

export const tab = {
  index: 0,
};

export const gameState = {
  character,
  opponent,
  ui: {
    tab,
  },
};

export function saveGame() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

export function loadGame() {
  const saved = localStorage.getItem('gameState');

  if (!saved) return;

  const state = JSON.parse(saved);

  Object.assign(character, state.character);
  Object.assign(opponent, state.opponent);
  Object.assign(tab, state.tab);
}

export const constants = {
  charactersNumber: 15,
  locationsNumber: 12,
  opponentNames: ['Taurus', 'Saul', 'Oberton', 'Sammy', 'Weiden', 'Kalisto'],
  body: ['head', 'neck', 'breast', 'belly', 'legs'],
};
