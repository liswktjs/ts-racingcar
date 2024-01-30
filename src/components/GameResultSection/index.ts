import { DOM_ID } from '../../constant';
import { appendChildSection, getElement, isUndefinedOrNull } from '../../utils';
import GameProcess from './GameProcess';
import RestartButton from './RestartButton';

interface Props {
  initGameState: () => void;
  carObject: Record<string, number>;
  gameCount: number;
}

const GameResultSection = ({
  initGameState,
  gameCount,
  carObject,
}: Props): void => {
  const isAlreadySectionExist = !isUndefinedOrNull(
    getElement(DOM_ID.gameResult)
  );

  if (isAlreadySectionExist) {
    return;
  }

  appendChildSection({ sectionId: DOM_ID.gameResult });

  GameProcess({ gameCount, carObject });

  RestartButton({
    initGameState,
    parentId: DOM_ID.gameResult,
    id: 'restart-button',
  });
};

export default GameResultSection;
