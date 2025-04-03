import { BorderColors } from './types';

const BORDER_COLORS: BorderColors = {
  Black: '#000000',
  Red: '#FF0000',
  Orange: '#FFA500',
  Blue: '#0000FF',
  Grey: '#808080',
  Purple: '#800080'
} as const;

const DEFAULT_COLORS = ['Red', 'Orange', 'Blue', 'Grey', 'Purple', 'Black'] as const;

const ADJACENCY = [
  [0, 0, 1, 3], // Center to Top-Right
  [0, 1, 2, 4], // Center to Right
  [0, 2, 3, 5], // Center to Bottom-Right
  [0, 3, 4, 0], // Center to Bottom-Left
  [0, 4, 5, 1], // Center to Left
  [0, 5, 6, 2], // Center to Top-Left
  [1, 2, 2, 5], // Top-Right to Right
  [2, 3, 3, 0], // Right to Bottom-Right
  [3, 4, 4, 1], // Bottom-Right to Bottom-Left
  [4, 5, 5, 2], // Bottom-Left to Left
  [5, 0, 6, 3], // Left to Top-Left
  [6, 1, 1, 4] // Top-Left to Top-Right
] as const;

export { ADJACENCY, BORDER_COLORS, DEFAULT_COLORS };
