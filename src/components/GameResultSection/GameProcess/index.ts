import { DOM_ID } from '../../../constant';
import { appendChildElement, getGameResult } from '../../../utils';

interface Props {
  carObject: Record<string, number>;
  gameCount: number;
}

const renderRacingGame = (carObject: Record<string, number>): void => {
  const container = document.createElement('div');
  container.id = 'car-list-container';

  Object.keys(carObject).forEach((name) => {
    const container = document.createElement('div');
    container.classList.add('car-container');

    const nameElement = document.createElement('div');
    nameElement.innerText = name;

    container.appendChild(nameElement);

    for (let i = 0; i < (carObject[name] ?? 0); i++) {
      const arrow = document.createElement('div');
      arrow.innerText = 'V';

      container.appendChild(arrow);
    }

    appendChildElement({
      targetElement: container,
      parentId: DOM_ID.gameResult,
    });
  });
};

const renderGameWinner = (carObject: Record<string, number>): void => {
  const winners = Object.entries(carObject).reduce<{
    maxValue: number | null;
    keys: string[];
  }>(
    (acc, [key, value]) => {
      if (acc.maxValue === null) {
        return { maxValue: value, keys: [key] };
      }
      if (value > acc.maxValue) {
        return { maxValue: value, keys: [key] };
      }
      if (value === acc.maxValue) {
        acc.keys.push(key);
      }
      return acc;
    },
    { maxValue: null, keys: [] }
  ).keys;

  const winnerElement = document.createElement('h2');
  winnerElement.innerText = `${winners.join(',')}`;
  appendChildElement({
    parentId: DOM_ID.gameResult,
    targetElement: winnerElement,
  });
};

const handleCarGame = ({
  carObject,
  gameCount,
}: {
  carObject: Record<string, number>;
  gameCount: number;
}): void => {
  Object.keys(carObject).forEach((item) => {
    carObject[item] = getGameResult({ count: gameCount });
  });
};

const GameProcess = ({ carObject, gameCount }: Props): void => {
  handleCarGame({ carObject, gameCount });

  renderRacingGame(carObject);
  renderGameWinner(carObject);
};

export default GameProcess;
