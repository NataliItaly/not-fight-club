export const screens = ['home', 'popup', 'fight-screen'];

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
  currentScreen: '',
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
};

export function saveGame() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

export function loadGame() {
  const saved = localStorage.getItem('gameState');

  if (!saved) return;

  try {
    const state = JSON.parse(saved);

    if (state.character) Object.assign(character, state.character);
    if (state.opponent) Object.assign(opponent, state.opponent);
    //if (state.ui?.tab) Object.assign(tab, state.ui.tab);
  } catch (err) {
    console.error('Cannot load saved game', err);
  }
}

export const constants = {
  charactersNumber: 15,
  locationsNumber: 12,
  opponentNames: ['Taurus', 'Saul', 'Oberton', 'Sammy', 'Weiden', 'Kalisto'],
  body: ['head', 'neck', 'breast', 'belly', 'legs'],
};
