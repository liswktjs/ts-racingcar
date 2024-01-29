import { isUndefinedOrNull } from '../check/isUndefinedOrNull';

export const isValidCarNames = (carNameInput: string | null): boolean => {
  if (carNameInput === null) {
    return false;
  }

  const carNameList = carNameInput.split(',');
  if (carNameList) {
    return isUndefinedOrNull(carNameList.find((item) => item.length > 5));
  }

  return false;
};
