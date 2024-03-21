import { DOM_ID } from '../../../constant';
import { appendChildElement, getGameResult } from '../../../utils';
import { getGameWinner } from '../../../utils/game/getGameWinner';

import './index.css';

interface Props {
  carObject: Record<string, number>;
  gameCount: number;
}

const CAR_LIST_CONTAINER_ID = 'car-list-container';

const PROCESS_STYLE_CLASS = {
  carListContainer: 'car-list-container',
  carContainer: 'car-container',
  carElement: 'car-element',
  arrowElement: 'arrow-element',
};

const renderEachCarProcess = (carObject: Record<string, number>): void => {
  Object.keys(carObject).forEach((name) => {
    const container = document.createElement('div');
    container.className = PROCESS_STYLE_CLASS.carContainer;

    const nameElement = document.createElement('div');
    nameElement.innerText = name;
    nameElement.className = PROCESS_STYLE_CLASS.carElement;

    container.appendChild(nameElement);

    for (let i = 0; i < (carObject[name] ?? 0); i++) {
      const arrow = document.createElement('div');
      arrow.innerText = 'V';
      arrow.className = PROCESS_STYLE_CLASS.arrowElement;

      container.appendChild(arrow);
    }

    appendChildElement({
      targetElement: container,
      parentId: CAR_LIST_CONTAINER_ID,
    });
  });
};

const renderRacingGame = (carObject: Record<string, number>): void => {
  const listContainer = document.createElement('div');
  listContainer.id = CAR_LIST_CONTAINER_ID;
  listContainer.className = PROCESS_STYLE_CLASS.carListContainer;

  appendChildElement({
    targetElement: listContainer,
    parentId: DOM_ID.gameResult,
  });

  renderEachCarProcess(carObject);
};

const renderGameWinner = (carObject: Record<string, number>): void => {
  const winners = getGameWinner(carObject);

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
