import { getGameResult } from '../../../utils';

interface Props {
  carList: string[];
  gameCount: number;
}

const renderRacingGame = ({
  carList,
  gameResult,
}: {
  carList: string[];
  gameResult: number[];
}): void => {
  const container = document.createElement('div');
  container.id = 'car-list-container';

  carList.forEach((car, index) => {
    const element = document.createElement('div');
    element.innerText = car;

    container.appendChild(element);
  });
};

const GameProcess = ({ carList, gameCount }: Props): void => {
  const gameResult: number[] = [];
  carList.forEach((_, index) => {
    gameResult[index] = getGameResult({ count: gameCount });
  });

  renderRacingGame({ carList, gameResult });
};

export default GameProcess;
