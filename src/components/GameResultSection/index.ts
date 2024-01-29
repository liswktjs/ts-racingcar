import { DOM_ID } from '../../constant';
import { appendChildSection } from '../../utils';
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
  appendChildSection({ sectionId: DOM_ID.gameResult });

  GameProcess({ gameCount, carObject });

  RestartButton({
    initGameState,
    parentId: DOM_ID.gameResult,
    id: 'restart-button',
  });
};

export default GameResultSection;
