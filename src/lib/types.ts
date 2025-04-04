import { BORDER_COLORS } from './enums';
import { Buff } from './toyz';

export interface BorderColors {
  [key: string]: string;
}

export type ColorOption = keyof typeof BORDER_COLORS;
export interface Item {
  id: string;
  name: string;
  buffType: Buff;
  colors: ColorOption[];
  image?: string;
}
export interface LayoutResult {
  message: string;
  arrangements?: Item[][];
  score?: number;
}
