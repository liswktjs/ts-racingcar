import Button from '../../@common/Button';

interface Props {
  id: string;
  parentId: string;
  initGameState: () => void;
}

const RestartButton = ({ id, initGameState, parentId }: Props): void => {
  Button({
    id,
    parentId,
    buttonText: '다시 시작하기',
    clickAction: () => {
      initGameState();
    },
  });
};

export default RestartButton;
