export const gameState = {};

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

export const constants = {
  charactersNumber: 15,
  locationsNumber: 12,
  opponentNames: ['Taurus', 'Saul', 'Oberton', 'Sammy', 'Weiden', 'Kalisto'],
  body: ['head', 'neck', 'breast', 'belly', 'legs'],
};
