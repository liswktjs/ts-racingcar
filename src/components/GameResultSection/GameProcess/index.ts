import { getGameResult } from '../../../utils';

interface Props {
  carList: string[];
  gameCount: number;
}

const GameProcess = ({ carList, gameCount }: Props): void => {
  const carGameResult = [];
  carList.forEach((_, index) => {
    carGameResult[index] = getGameResult({ count: gameCount });
  });
};

export default GameProcess;
