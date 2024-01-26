import { isUndefinedOrNull } from '.';
import getElement from './getElement';

export const getInputValue = (id: string): string => {
  const target = getElement(id);

  if (!isUndefinedOrNull(target)) {
    return (target as HTMLInputElement).value;
  }

  throw new Error(`Can't find ${id}input element`);
};

export const initInputValue = (id: string): void => {
  const target = getElement(id);

  if (!isUndefinedOrNull(target)) {
    (target as HTMLInputElement).value = '';
  }

  throw new Error(`Can't find ${id}input element`);
};
