import { DOM_ID } from '../../constant';
import { appendChildSection } from '../../utils';
import GameProcess from './GameProcess';
import RestartButton from './RestartButton';

interface Props {
  initGameState: () => void;
  carList: string[];
  gameCount: number;
}

const GameResultSection = ({
  initGameState,
  carList,
  gameCount,
}: Props): void => {
  appendChildSection({ sectionId: DOM_ID.gameResult });

  GameProcess({ gameCount, carList });

  RestartButton({
    initGameState,
    parentId: DOM_ID.gameResult,
    id: 'restart-button',
  });
};

export default GameResultSection;
