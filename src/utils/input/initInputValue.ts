import { isUndefinedOrNull } from '..';
import getElement from '../element/getElement';

export const initInputValue = (id: string): void => {
  const target = getElement(id);

  if (!isUndefinedOrNull(target)) {
    (target as HTMLInputElement).value = '';
  }

  throw new Error(`Can't find ${id}input element`);
};
