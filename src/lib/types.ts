import { BORDER_COLORS } from './enums';
import { Buff, Grade } from './toyz';

export interface BorderColors {
  [key: string]: string;
}

export type ColorOption = keyof typeof BORDER_COLORS;
export interface Item {
  id: string;
  image: string;
  colors: ColorOption[];
  name?: string;
  buff?: Buff;
  grade?: Grade;
}
export interface LayoutResult {
  message: string;
  arrangements?: Item[][];
  score?: number;
}
