import { BORDER_COLORS, BuffType } from './enums';

export interface BorderColors {
  [key: string]: string;
}

export type ColorOption = keyof typeof BORDER_COLORS;
export interface Item {
  id: string;
  name: string;
  buffType: BuffType;
  colors: ColorOption[];
}
export interface LayoutResult {
  message: string;
  arrangements?: Item[][];
  score?: number;
}
