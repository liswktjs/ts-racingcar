import { isUndefinedOrNull, getElement } from '..';

export const getInputValue = (id: string): string => {
  const target = getElement(id);

  if (!isUndefinedOrNull(target)) {
    return (target as HTMLInputElement).value;
  }

  throw new Error(`Can't find ${id}input element`);
};
