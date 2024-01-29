import GameResultSection from '../components/GameResultSection';
import { DOM_ID } from '../constant';
import { getElement, isValidCarNames, isValidGameCount } from '../utils';

const GAME_STATE: {
  carList: string | null;
  gameCount: null | number;
} = {
  carList: null,
  gameCount: null,
};

export const setCarNameList = (carList: string): void => {
  GAME_STATE.carList = carList;
  checkRacingState();
};

export const setGameCount = (count: number): void => {
  GAME_STATE.gameCount = Number(count);
  checkRacingState();
};

const initInputValue = (id: string): void => {
  const input = getElement(id);
  if (input) {
    (input as HTMLInputElement).value = '';
  }
};

export const initGameState = (): void => {
  GAME_STATE.carList = null;
  GAME_STATE.gameCount = null;

  initInputValue(DOM_ID.gameNameInput);
  initInputValue(DOM_ID.gameCountInput);
};

export const checkRacingState = (): void => {
  if (
    isValidCarNames(GAME_STATE.carList ?? '') &&
    isValidGameCount(GAME_STATE.gameCount)
  ) {
    const carList = GAME_STATE.carList?.split(',');
    const gameCount = GAME_STATE.gameCount;

    const carObject: Record<string, number> = {};

    carList?.forEach((item) => {
      carObject[item] = 0;
    });

    GameResultSection({ initGameState, carObject, gameCount: gameCount ?? 0 });
  }
};
