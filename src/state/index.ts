import GameResultSection from '../components/GameResultSection';
import { isValidCarNames, isValidGameCount } from '../utils';

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

export const checkRacingState = (): void => {
  if (
    isValidCarNames(GAME_STATE.carList) &&
    isValidGameCount(GAME_STATE.gameCount)
  ) {
    GameResultSection({ gameResult: 'sss' });
  }
};
