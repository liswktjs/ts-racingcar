import { DOM_ID } from '../../../constant';
import { getElement, isUndefinedOrNull } from '../../../utils';
import Button from '../../@common/Button';

interface Props {
  id: string;
  parentId: string;
  initGameState: () => void;
}

const RestartButton = ({ id, initGameState, parentId }: Props): void => {
  const initGameResultSection = (): void => {
    const resultSection = getElement(DOM_ID.gameResult);
    if (!isUndefinedOrNull(resultSection)) {
      resultSection.remove();
    }
  };

  Button({
    id,
    parentId,
    buttonText: '다시 시작하기',
    clickAction: () => {
      initGameState();
      initGameResultSection();
    },
  });
};

export default RestartButton;
