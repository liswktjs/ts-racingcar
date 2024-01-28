import GameResultSection from '../components/GameResultSection';
import { DOM_ID } from '../constant';
import { getElement, isValidCarNames, isValidGameCount } from '../utils';

const GAME_STATE = {
  carList: '',
  gameCount: 0,
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
  GAME_STATE.carList = '';
  GAME_STATE.gameCount = 0;

  initInputValue(DOM_ID.gameNameInput);
  initInputValue(DOM_ID.gameCountInput);
};

export const checkRacingState = (): void => {
  if (
    isValidCarNames(GAME_STATE.carList) &&
    isValidGameCount(GAME_STATE.gameCount)
  ) {
    GameResultSection({ initGameState, gameState: GAME_STATE });
  }
};
