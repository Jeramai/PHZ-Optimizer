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

export { BORDER_COLORS, DEFAULT_COLORS };
